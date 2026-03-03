(() => {
  "use strict";

  const MAX_RESULTS = 10;
  const DEBOUNCE_MS = 80;
  const CACHE_KEY = "mcr_search_index_v1";
  const MIN_STANDARD_KEY = "cppdocs.min_standard";
  const minStandardApi = window.cppdocsMinStandard || null;
  const VALID_MIN_STANDARDS = new Set(["any", "c++11", "c++14", "c++17", "c++20", "c++23", "c++26"]);
  const MIN_STANDARD_TO_VERSION = {
    any: Number.POSITIVE_INFINITY,
    "c++11": 11,
    "c++14": 14,
    "c++17": 17,
    "c++20": 20,
    "c++23": 23,
    "c++26": 26,
  };
  const PREFERRED_ROUTES = [
    { query: "thread", routes: ["/cpp/thread/thread/"] },
    { query: "vector", routes: ["/cpp/container/vector/"] },
    { query: "std vector", routes: ["/cpp/container/vector/"] },
    { query: "execution", routes: ["/cpp/execution/"] },
    { query: "filesystem", routes: ["/cpp/filesystem/"] },
    { query: "concepts", routes: ["/cpp/concepts/"] },
    { query: "ranges views", routes: ["/cpp/ranges/"] },
    { query: "feature test", routes: ["/cpp/feature_test/"] },
    { query: "format", routes: ["/cpp/utility/format/"] },
    { query: "printf", routes: ["/cpp/io/c/printf/", "/cpp/io/c/fprintf/"] },
    { query: "coroutine", routes: ["/cpp/coroutine/", "/cpp/language/coroutines/"] },
    { query: "coroutines", routes: ["/cpp/language/coroutines/", "/cpp/coroutine/"] },
  ];
  const SHORT_GENERIC_QUERIES = new Set([
    "thread",
    "vector",
    "map",
    "set",
    "string",
    "format",
    "mutex",
    "regex",
  ]);

  const normalize = (text) => (text || "").toLowerCase().trim();
  const canonicalize = (text) =>
    normalize(text)
      .replace(/std::/g, "std ")
      .replace(/::/g, " ")
      .replace(/[^\p{L}\p{N}+]+/gu, " ")
      .replace(/\s+/g, " ")
      .trim();

  const ensureArray = (value) => {
    if (Array.isArray(value)) return value;
    if (typeof value === "string" && value.trim()) return [value.trim()];
    return [];
  };

  const toUrlKey = (url) => {
    if (!url) return "";
    const trimmed = String(url).trim();
    if (!trimmed) return "";
    try {
      const parsed = new URL(trimmed, document.baseURI);
      let path = parsed.pathname || "/";
      if (path !== "/" && path.endsWith("/")) path = path.slice(0, -1);
      return path.toLowerCase();
    } catch {
      let path = trimmed.split("#", 1)[0].split("?", 1)[0];
      if (!path.startsWith("/")) path = `/${path}`;
      if (path !== "/" && path.endsWith("/")) path = path.slice(0, -1);
      return path.toLowerCase();
    }
  };

  const debounce = (fn, wait) => {
    let timer = null;
    return (...args) => {
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(() => fn(...args), wait);
    };
  };

  const normalizeMinStandard = (value) => {
    if (minStandardApi && typeof minStandardApi.normalizeValue === "function") {
      return minStandardApi.normalizeValue(value);
    }
    const normalized = normalize(value);
    return VALID_MIN_STANDARDS.has(normalized) ? normalized : "any";
  };

  const parseCppSinceVersion = (sinceValue) => {
    if (minStandardApi && typeof minStandardApi.parseCppSinceVersion === "function") {
      return minStandardApi.parseCppSinceVersion(sinceValue);
    }
    if (typeof sinceValue !== "string") return null;
    const text = sinceValue.toLowerCase();
    const matches = [...text.matchAll(/c\+\+\s*(\d{2,4})/g)];
    if (!matches.length) return null;

    const versions = matches
      .map((m) => {
        const raw = Number.parseInt(m[1], 10);
        if (Number.isNaN(raw)) return null;
        if (raw >= 2000) return raw % 100;
        return raw;
      })
      .filter((v) => Number.isFinite(v));

    if (!versions.length) return null;
    return Math.min(...versions);
  };

  const filterByMinStandard = (items, minStandard) => {
    if (minStandard === "any") return items;
    const selected = MIN_STANDARD_TO_VERSION[minStandard];
    if (!Number.isFinite(selected)) return items;

    return items.filter((item) => {
      const sinceVersion = parseCppSinceVersion(item.since);
      // Keep items with missing/unknown since metadata by default.
      if (sinceVersion === null) return true;
      return sinceVersion <= selected;
    });
  };

  const getSearchIndexUrl = () => {
    const configured = document.documentElement.getAttribute("data-search-index-url");
    if (configured) {
      return new URL(configured, document.baseURI).toString();
    }
    return new URL("/search-index.json", document.baseURI).toString();
  };

  const filterByScope = (items, widget) => {
    const scope = widget.dataset.searchScope || "home";
    if (scope !== "section") return items;
    const prefix = widget.dataset.sectionPrefix || "";
    if (!prefix) return items;
    return items.filter((item) => (item.url || "").startsWith(prefix));
  };

  const scoreResult = (item, query) => {
    const rawTitle = normalize(item.title);
    const title = canonicalize(item.title);
    const rawSummary = normalize(item.summary || item.content_snippet || "");
    const summary = canonicalize(rawSummary);
    const signatures = ensureArray(item.signatures).map(canonicalize).join(" ");
    const aliases = ensureArray(item.aliases).map(canonicalize).join(" ");
    const secondary = `${summary} ${signatures} ${aliases}`.trim();
    const q = canonicalize(query);
    const path = canonicalize(item.path || item.url || "");
    const tokens = q.split(" ").filter(Boolean);
    const url = item.url || "";

    if (!q || !title) return -1;

    let score = -1;
    if (title === q) score = 10000;
    else if (title.startsWith(q)) score = 8000;
    else if (title.includes(q)) score = 6000;
    else if (tokens.length > 1 && tokens.every((t) => title.includes(t))) score = 5200;
    else if (secondary.includes(q)) {
      score = 2500;
      if (aliases.includes(q)) score += 500;
      if (signatures.includes(q)) score += 300;
    } else return -1;

    const titleLenPenalty = Math.min(600, Math.max(0, rawTitle.length - 48) * 6);
    score -= titleLenPenalty;

    if (url.startsWith("/cpp/")) score += 900;
    else score -= 80;

    if (SHORT_GENERIC_QUERIES.has(q) && rawTitle.startsWith("std::")) {
      score += 320;
    }

    const explicitVectorQuery = q.includes("vector ");
    if (explicitVectorQuery) {
      const isStdVectorMember = title.includes("std vector ") && title.includes(" vector ");
      if (isStdVectorMember || path.includes("cpp container vector ")) {
        score += 700;
      }
      if (title.includes("inplace_vector")) {
        score -= 220;
      }
    }

    const pathRaw = normalize(item.path || "");
    const depth = pathRaw ? pathRaw.split("/").filter(Boolean).length : 0;
    if (q.length <= 6 && depth >= 4) {
      score -= Math.min(240, (depth - 3) * 40);
    }

    if (tokens.length > 1) {
      const titleHits = tokens.filter((t) => title.includes(t)).length;
      const pathHits = tokens.filter((t) => path.includes(t)).length;
      if (titleHits === 0 && pathHits === 0 && score < 7000) score -= 500;
      else if (titleHits + pathHits < tokens.length && score < 7000)
        score -= (tokens.length - (titleHits + pathHits)) * 90;
    }

    const preferred = PREFERRED_ROUTES.find(
      (rule) => q === rule.query || q.startsWith(`${rule.query} `),
    );
    if (preferred && preferred.routes.some((route) => url.startsWith(route))) {
      score += 2400;
    }

    return score;
  };

  const toRankedResults = (items, query) => {
    const ranked = [];
    for (const item of items) {
      const score = scoreResult(item, query);
      if (score >= 0) ranked.push({ item, score });
    }

    ranked.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const al = (a.item.title || "").length;
      const bl = (b.item.title || "").length;
      if (al !== bl) return al - bl;
      return (a.item.title || "").localeCompare(b.item.title || "");
    });

    const deduped = [];
    const seenUrls = new Set();
    for (const row of ranked) {
      const key = toUrlKey(row.item.url || "");
      if (key && seenUrls.has(key)) continue;
      if (key) seenUrls.add(key);
      deduped.push(row.item);
      if (deduped.length >= MAX_RESULTS) break;
    }
    return deduped;
  };

  const renderResults = (list, results, activeIndex, listId) => {
    list.innerHTML = "";
    results.forEach((item, index) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const optionId = `${listId}-opt-${index}`;
      a.id = optionId;
      a.className = "search-result";
      a.setAttribute("role", "option");
      a.setAttribute("aria-selected", index === activeIndex ? "true" : "false");
      if (index === activeIndex) a.classList.add("is-active");
      a.href = item.url;

      const title = document.createElement("span");
      title.className = "search-title";
      title.textContent = item.title || "";
      a.appendChild(title);

      const metaParts = [];
      if (item.section) metaParts.push(String(item.section));
      if (item.path) metaParts.push(String(item.path));
      if (metaParts.length) {
        const meta = document.createElement("span");
        meta.className = "search-meta";
        meta.textContent = metaParts.join(" · ");
        a.appendChild(meta);
      }

      const tagParts = [];
      if (item.header) tagParts.push(String(item.header));
      if (item.since) tagParts.push(String(item.since));
      if (tagParts.length) {
        const tags = document.createElement("span");
        tags.className = "search-tags";
        tags.textContent = tagParts.join(" · ");
        a.appendChild(tags);
      }

      const signatures = ensureArray(item.signatures);
      if (signatures.length) {
        const sig = document.createElement("span");
        sig.className = "search-signature";
        sig.textContent = signatures[0];
        a.appendChild(sig);
      } else {
        const summaryText = item.summary || item.content_snippet || "";
        if (summaryText) {
          const snippet = document.createElement("span");
          snippet.className = "search-snippet";
          snippet.textContent = summaryText;
          a.appendChild(snippet);
        }
      }

      li.appendChild(a);
      list.appendChild(li);
    });
  };

  const widgets = [...document.querySelectorAll(".search-widget")];
  if (!widgets.length) return;

  let loadedItems = null;
  let loadPromise = null;

  const loadFromSession = () => {
    try {
      const raw = sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : null;
    } catch {
      return null;
    }
  };

  const saveToSession = (items) => {
    try {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(items));
    } catch {
      // ignore quota/storage availability issues
    }
  };

  const ensureIndexLoaded = () => {
    if (loadedItems) return Promise.resolve(loadedItems);
    if (loadPromise) return loadPromise;

    const cached = loadFromSession();
    if (cached) {
      loadedItems = cached;
      return Promise.resolve(loadedItems);
    }

    loadPromise = fetch(getSearchIndexUrl())
      .then((resp) => (resp.ok ? resp.json() : []))
      .then((items) => {
        loadedItems = Array.isArray(items) ? items : [];
        saveToSession(loadedItems);
        return loadedItems;
      })
      .catch(() => {
        loadedItems = [];
        return loadedItems;
      })
      .finally(() => {
        loadPromise = null;
      });

    return loadPromise;
  };

  const initWidget = (widget, widgetIndex) => {
    const input = widget.querySelector(".search-input");
    const dropdown = widget.querySelector(".search-dropdown");
    const list = widget.querySelector(".search-results");
    if (!input || !dropdown || !list) return;

    const listId = `search-results-${widgetIndex}`;
    dropdown.id = `${listId}-dropdown`;
    dropdown.setAttribute("role", "listbox");
    list.id = listId;
    list.setAttribute("role", "listbox");

    input.setAttribute("autocomplete", "off");
    input.setAttribute("aria-controls", listId);
    input.setAttribute("aria-expanded", "false");
    input.setAttribute("aria-activedescendant", "");

    let shown = [];
    let activeIndex = -1;

    const hide = () => {
      dropdown.hidden = true;
      input.setAttribute("aria-expanded", "false");
      input.setAttribute("aria-activedescendant", "");
      activeIndex = -1;
      renderResults(list, shown, activeIndex, listId);
    };

    const renderCurrent = () => {
      renderResults(list, shown, activeIndex, listId);
      if (activeIndex >= 0) {
        input.setAttribute("aria-activedescendant", `${listId}-opt-${activeIndex}`);
      } else {
        input.setAttribute("aria-activedescendant", "");
      }
    };

    const update = () => {
      const query = normalize(input.value);
      if (!query) {
        shown = [];
        hide();
        return;
      }
      ensureIndexLoaded().then((items) => {
        const scopedItems = filterByScope(items, widget);
        const minStandard = normalizeMinStandard(
          document.documentElement.getAttribute("data-min-standard"),
        );
        const minStandardItems = filterByMinStandard(scopedItems, minStandard);
        shown = toRankedResults(minStandardItems, query);
        if (!shown.length) {
          hide();
          return;
        }
        activeIndex = 0;
        dropdown.hidden = false;
        input.setAttribute("aria-expanded", "true");
        renderCurrent();
      });
    };

    const debouncedUpdate = debounce(update, DEBOUNCE_MS);

    input.addEventListener("focus", () => {
      ensureIndexLoaded();
      if (input.value.trim()) debouncedUpdate();
    });

    input.addEventListener("input", debouncedUpdate);

    input.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        hide();
        return;
      }
      if (dropdown.hidden || shown.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();
        activeIndex = (activeIndex + 1) % shown.length;
        renderCurrent();
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        activeIndex = (activeIndex - 1 + shown.length) % shown.length;
        renderCurrent();
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        const target = shown[activeIndex] || shown[0];
        if (target && target.url) window.location.assign(target.url);
      }
    });

    list.addEventListener("mousemove", (event) => {
      const anchor = event.target.closest(".search-result");
      if (!anchor) return;
      const anchors = [...list.querySelectorAll(".search-result")];
      const idx = anchors.indexOf(anchor);
      if (idx >= 0 && idx !== activeIndex) {
        activeIndex = idx;
        renderCurrent();
      }
    });

    document.addEventListener("click", (event) => {
      if (!widget.contains(event.target)) hide();
    });
  };

  const initMinStandardControl = () => {
    const select = document.getElementById("top-min-standard");
    if (!select) return;

    let initial = normalizeMinStandard(
      select.value || document.documentElement.getAttribute("data-min-standard"),
    );
    try {
      initial = normalizeMinStandard(localStorage.getItem(MIN_STANDARD_KEY) || initial);
    } catch {
      // ignore storage errors
    }

    select.value = initial;
    document.documentElement.setAttribute("data-min-standard", initial);

    const refreshOpenQueries = () => {
      widgets.forEach((widget) => {
        const input = widget.querySelector(".search-input");
        if (!input || !input.value.trim()) return;
        input.dispatchEvent(new Event("input", { bubbles: true }));
      });
    };

    select.addEventListener("change", () => {
      const value = normalizeMinStandard(select.value);
      select.value = value;
      document.documentElement.setAttribute("data-min-standard", value);
      try {
        localStorage.setItem(MIN_STANDARD_KEY, value);
      } catch {
        // ignore storage errors
      }
      refreshOpenQueries();
    });

    window.addEventListener("cppdocs:min-standard-change", () => {
      refreshOpenQueries();
    });
  };

  initMinStandardControl();
  widgets.forEach((widget, index) => initWidget(widget, index));

  document.addEventListener("keydown", (event) => {
    if (event.key !== "/") return;
    const target = event.target;
    const tag = target && target.tagName ? target.tagName.toLowerCase() : "";
    if (tag === "input" || tag === "textarea" || (target && target.isContentEditable)) return;

    const firstInput = widgets[0]?.querySelector(".search-input");
    if (!firstInput) return;

    event.preventDefault();
    ensureIndexLoaded();
    firstInput.focus();
  });
})();
