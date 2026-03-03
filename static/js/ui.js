(() => {
  "use strict";

  const THEME_KEY = "cppdocs.theme";
  const KEYS_KEY = "cppdocs.keys";
  const LIGA_KEY = "cppdocs.ligatures";
  const MIN_STANDARD_KEY = "cppdocs.min_standard";
  const PINS_KEY = "cppdocs.pins";
  const MAX_PINNED_UI = 20;
  const fallbackNormalizeMinStandard = (value) => {
    const normalized = String(value || "").trim().toLowerCase();
    return ["any", "c++11", "c++14", "c++17", "c++20", "c++23", "c++26"].includes(normalized)
      ? normalized
      : "any";
  };
  const minStandardApi = window.cppdocsMinStandard || {
    normalizeValue: fallbackNormalizeMinStandard,
    applyVisibility: () => {},
  };

  const doc = document;
  const root = doc.documentElement;
  const prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)");
  const THEME_ICONS = {
    light: [
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',
      '<circle cx="12" cy="12" r="4"></circle>',
      '<path d="M12 2v2"></path>',
      '<path d="M12 20v2"></path>',
      '<path d="m4.93 4.93 1.41 1.41"></path>',
      '<path d="m17.66 17.66 1.41 1.41"></path>',
      '<path d="M2 12h2"></path>',
      '<path d="M20 12h2"></path>',
      '<path d="m6.34 17.66-1.41 1.41"></path>',
      '<path d="m19.07 4.93-1.41 1.41"></path>',
      '</svg>',
    ].join(""),
    dark: [
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">',
      '<path d="M18 5h4"></path>',
      '<path d="M20 3v4"></path>',
      '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>',
      '</svg>',
    ].join(""),
  };

  const load = (key, fallback) => {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (_e) {
      return fallback;
    }
  };

  const save = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (_e) {
      // ignore storage errors
    }
  };

  const parsePins = () => {
    try {
      const raw = localStorage.getItem(PINS_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((p) => p && typeof p.url === "string" && typeof p.title === "string");
    } catch (_e) {
      return [];
    }
  };

  const savePins = (pins) => {
    try {
      localStorage.setItem(PINS_KEY, JSON.stringify(pins));
    } catch (_e) {
      // ignore storage errors
    }
  };

  const getCurrentPagePin = () => {
    const title = (doc.body.getAttribute("data-page-title") || "").trim() || "Untitled";
    const url = window.location.pathname || "/";
    return { title, url };
  };

  const isTextInputFocused = () => {
    const el = doc.activeElement;
    if (!el) return false;
    const tag = (el.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return true;
    if (el.isContentEditable) return true;
    return false;
  };

  const effectiveTheme = (theme) => {
    if (theme === "light" || theme === "dark") return theme;
    if (prefersLight && prefersLight.matches) return "light";
    return "dark";
  };

  const renderThemeIcon = (theme) => {
    const btn = doc.getElementById("top-theme-btn");
    if (!btn) return;
    const resolved = effectiveTheme(theme);
    btn.innerHTML = resolved === "light" ? THEME_ICONS.light : THEME_ICONS.dark;
  };

  const highlightSegment = (attr, selected) => {
    doc.querySelectorAll("[" + attr + "]").forEach((btn) => {
      const current = btn.getAttribute(attr);
      btn.classList.toggle("is-active", current === selected);
    });
  };

  const applyTheme = (theme) => {
    const value = ["auto", "light", "dark"].includes(theme) ? theme : "auto";
    root.setAttribute("data-theme", value);
    save(THEME_KEY, value);
    renderThemeIcon(value);
    highlightSegment("data-theme-choice", value);
  };

  const cycleTheme = () => {
    const current = load(THEME_KEY, "auto");
    const next = current === "auto" ? "dark" : current === "dark" ? "light" : "auto";
    applyTheme(next);
  };

  const applyLigatures = (mode) => {
    const value = mode === "off" ? "off" : "on";
    root.setAttribute("data-ligatures", value);
    save(LIGA_KEY, value);
    highlightSegment("data-liga-choice", value);
  };

  const applyMinStandard = (value) => {
    const normalized = minStandardApi.normalizeValue(value);
    root.setAttribute("data-min-standard", normalized);
    doc.body?.setAttribute("data-min-standard-current", normalized);
    save(MIN_STANDARD_KEY, normalized);
    const select = doc.getElementById("top-min-standard");
    if (select && select.value !== normalized) {
      select.value = normalized;
    }
    minStandardApi.applyVisibility(doc, normalized);
    window.dispatchEvent(
      new CustomEvent("cppdocs:min-standard-change", {
        detail: { value: normalized },
      }),
    );
  };

  const formatMinStandardLabel = (value) => {
    const normalized = minStandardApi.normalizeValue(value);
    return normalized === "any" ? "Any" : normalized.toUpperCase();
  };

  const syncMinStandardStatus = (value) => {
    const normalized = minStandardApi.normalizeValue(value);
    doc.querySelectorAll("[data-min-standard-status]").forEach((node) => {
      const scope = (node.getAttribute("data-min-standard-scope") || "").trim().toLowerCase();
      if (scope && scope !== "cpp") return;

      const valueNode = node.querySelector("[data-min-standard-status-value]");
      if (valueNode) valueNode.textContent = formatMinStandardLabel(normalized);
      node.hidden = normalized === "any";
    });
  };

  const syncSinglePageMinStandardNotice = (value) => {
    const notice = doc.querySelector("[data-min-standard-page-notice]");
    if (!notice) return;

    const kind = (doc.body.getAttribute("data-page-kind") || "").trim().toLowerCase();
    const sourcePath = (doc.body.getAttribute("data-source-path") || "").trim().toLowerCase();
    const since = (doc.body.getAttribute("data-page-since") || "").trim();
    const normalized = minStandardApi.normalizeValue(value);
    const textNode = notice.querySelector("[data-min-standard-page-notice-text]");
    const isRangesSectionPage =
      (kind === "section" || kind === "list") && sourcePath.startsWith("cpp/ranges/");

    if ((!sourcePath.startsWith("cpp/")) || normalized === "any" || !textNode) {
      notice.hidden = true;
      return;
    }

    if (kind !== "page" && !isRangesSectionPage) {
      notice.hidden = true;
      return;
    }

    const sinceVersion = typeof minStandardApi.parseCppSinceVersion === "function"
      ? minStandardApi.parseCppSinceVersion(since)
      : null;

    if (sinceVersion === null || minStandardApi.allowsSinceValue(since, normalized)) {
      notice.hidden = true;
      return;
    }

    textNode.textContent =
      `This page describes a facility introduced in ${since}. Your Min standard filter is ${formatMinStandardLabel(normalized)}, so adjacent navigation and search may hide newer facilities.`;
    notice.hidden = false;
  };

  const closeFloatingUi = () => {
    const navMenu = doc.getElementById("top-nav-menu");
    const navBtn = doc.getElementById("top-nav-btn");
    if (navMenu && !navMenu.hidden) {
      navMenu.hidden = true;
      if (navBtn) navBtn.setAttribute("aria-expanded", "false");
    }

    const menu = doc.getElementById("settings-menu");
    const settingsBtn = doc.getElementById("top-settings-btn");
    if (menu && !menu.hidden) {
      menu.hidden = true;
      if (settingsBtn) settingsBtn.setAttribute("aria-expanded", "false");
    }

    const shortcuts = doc.getElementById("shortcuts-modal");
    if (shortcuts) {
      if (typeof shortcuts.close === "function" && shortcuts.open) shortcuts.close();
      shortcuts.hidden = true;
    }

    const pinsModal = doc.getElementById("pinned-modal");
    if (pinsModal) {
      if (typeof pinsModal.close === "function" && pinsModal.open) pinsModal.close();
      pinsModal.hidden = true;
    }

    const spotlight = doc.getElementById("bookmark-spotlight");
    if (spotlight) {
      if (typeof spotlight.close === "function" && spotlight.open) spotlight.close();
      spotlight.hidden = true;
    }

    doc.querySelectorAll(".search-widget").forEach((widget) => {
      const dropdown = widget.querySelector(".search-dropdown");
      const input = widget.querySelector(".search-input");
      if (dropdown) dropdown.hidden = true;
      if (input) {
        input.setAttribute("aria-expanded", "false");
        input.setAttribute("aria-activedescendant", "");
        if (doc.activeElement === input) input.blur();
      }
    });
  };

  const showDialog = (dialog) => {
    if (!dialog) return;
    dialog.hidden = false;
    if (typeof dialog.showModal === "function" && !dialog.open) {
      dialog.showModal();
    }
  };

  const ensureDialogDismiss = (dialog, closeSelector = ".shortcuts-close") => {
    if (!dialog || dialog.dataset.dismissBound === "true") return;
    const closeButton = dialog.querySelector(closeSelector);
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        if (typeof dialog.close === "function" && dialog.open) dialog.close();
        dialog.hidden = true;
      });
    }
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) {
        if (typeof dialog.close === "function" && dialog.open) dialog.close();
        dialog.hidden = true;
      }
    });
    dialog.dataset.dismissBound = "true";
  };

  const openShortcutsModal = () => {
    let modal = doc.getElementById("shortcuts-modal");
    if (!modal) {
      modal = doc.createElement("dialog");
      modal.id = "shortcuts-modal";
      modal.className = "shortcuts-modal";
      modal.innerHTML = [
        "<h3>Keyboard shortcuts</h3>",
        "<ul>",
        "<li><code>?</code> Open shortcuts</li>",
        "<li><code>S</code> Open bookmark spotlight</li>",
        "<li><code>b</code> Toggle bookmark</li>",
        "<li><code>/</code> Focus search</li>",
        "<li><code>Esc</code> Close dialogs/menus</li>",
        "<li><code>j</code> Scroll down (Vim mode)</li>",
        "<li><code>k</code> Scroll up (Vim mode)</li>",
        "<li><code>g g</code> Go to top (Vim mode)</li>",
        "<li><code>G</code> Go to bottom (Vim mode)</li>",
        "</ul>",
        '<button type="button" class="shortcuts-close">Close</button>'
      ].join("");
      doc.body.appendChild(modal);
    }
    ensureDialogDismiss(modal);
    showDialog(modal);
  };

  const openBookmarkSpotlight = () => {
    let modal = doc.getElementById("bookmark-spotlight");
    if (!modal) {
      modal = doc.createElement("dialog");
      modal.id = "bookmark-spotlight";
      modal.className = "shortcuts-modal spotlight-modal";
      modal.innerHTML = [
        '<div class="spotlight-head">',
        "<h3>Bookmarks</h3>",
        '<button type="button" class="shortcuts-close spotlight-close">Close</button>',
        "</div>",
        '<input type="search" class="spotlight-input" placeholder="Filter bookmarks..." autocomplete="off" />',
        '<p class="spotlight-help">Enter: open · ↑/↓: move · Backspace/Delete: remove selected when query is empty</p>',
        '<ul class="spotlight-results" role="listbox" aria-label="Bookmarks"></ul>',
      ].join("");
      doc.body.appendChild(modal);
    }
    ensureDialogDismiss(modal, ".spotlight-close");

    const input = modal.querySelector(".spotlight-input");
    const list = modal.querySelector(".spotlight-results");
    if (!input || !list) {
      showDialog(modal);
      return;
    }

    let pins = parsePins();
    let filtered = pins.slice();
    let activeIndex = 0;

    const render = () => {
      list.innerHTML = "";
      if (!filtered.length) {
        list.innerHTML = '<li class="spotlight-empty">No matching bookmarks.</li>';
        return;
      }

      filtered.forEach((pin, index) => {
        const item = doc.createElement("li");
        item.className = `spotlight-item${index === activeIndex ? " is-active" : ""}`;
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", index === activeIndex ? "true" : "false");
        const titleSpan = doc.createElement("span");
        titleSpan.className = "spotlight-title";
        titleSpan.textContent = pin.title;
        const urlSpan = doc.createElement("span");
        urlSpan.className = "spotlight-url";
        urlSpan.textContent = pin.url;
        item.appendChild(titleSpan);
        item.appendChild(urlSpan);
        item.addEventListener("click", () => {
          window.location.assign(pin.url);
        });
        list.appendChild(item);
      });
    };

    const refilter = () => {
      const query = String(input.value || "").trim().toLowerCase();
      pins = parsePins();
      filtered = pins.filter((pin) => {
        if (!query) return true;
        return pin.title.toLowerCase().includes(query) || pin.url.toLowerCase().includes(query);
      });
      activeIndex = Math.max(0, Math.min(activeIndex, Math.max(filtered.length - 1, 0)));
      render();
    };

    input.oninput = () => {
      activeIndex = 0;
      refilter();
    };

    input.onkeydown = (event) => {
      if (event.key === "ArrowDown") {
        if (!filtered.length) return;
        event.preventDefault();
        activeIndex = (activeIndex + 1) % filtered.length;
        render();
        return;
      }

      if (event.key === "ArrowUp") {
        if (!filtered.length) return;
        event.preventDefault();
        activeIndex = (activeIndex - 1 + filtered.length) % filtered.length;
        render();
        return;
      }

      if (event.key === "Enter") {
        const selected = filtered[activeIndex];
        if (!selected) return;
        event.preventDefault();
        window.location.assign(selected.url);
        return;
      }

      if ((event.key === "Backspace" || event.key === "Delete") && !input.value.trim()) {
        const selected = filtered[activeIndex];
        if (!selected) return;
        event.preventDefault();
        const pinsNow = parsePins();
        const idx = pinsNow.findIndex((pin) => pin.url === selected.url);
        if (idx < 0) return;
        pinsNow.splice(idx, 1);
        savePins(pinsNow);
        renderPinned();
        syncTopPinnedButton();
        filtered = pinsNow.slice();
        activeIndex = Math.max(0, Math.min(activeIndex, Math.max(filtered.length - 1, 0)));
        render();
      }
    };

    showDialog(modal);
    input.value = "";
    refilter();
    window.setTimeout(() => {
      input.focus();
      input.select();
    }, 0);
  };

  const openPinnedModal = (pins) => {
    let modal = doc.getElementById("pinned-modal");
    if (!modal) {
      modal = doc.createElement("dialog");
      modal.id = "pinned-modal";
      modal.className = "shortcuts-modal";
      doc.body.appendChild(modal);
    }

    modal.innerHTML = "";
    const heading = doc.createElement("h3");
    heading.textContent = "Pinned pages";
    modal.appendChild(heading);

    if (pins.length) {
      const ul = doc.createElement("ul");
      pins.forEach((p) => {
        const li = doc.createElement("li");
        const a = doc.createElement("a");
        a.setAttribute("href", p.url);
        a.textContent = p.title;
        li.appendChild(a);
        ul.appendChild(li);
      });
      modal.appendChild(ul);
    } else {
      const emptyMsg = doc.createElement("p");
      emptyMsg.textContent = "No pinned pages yet.";
      modal.appendChild(emptyMsg);
    }

    const closeBtn = doc.createElement("button");
    closeBtn.type = "button";
    closeBtn.className = "shortcuts-close";
    closeBtn.textContent = "Close";
    modal.appendChild(closeBtn);
    delete modal.dataset.dismissBound;
    ensureDialogDismiss(modal);
    showDialog(modal);
  };

  const renderPinned = () => {
    const list = doc.getElementById("pinned-list");
    if (!list) return;

    const pins = parsePins();
    if (!pins.length) {
      list.innerHTML = '<p class="settings-help">No pinned pages yet.</p>';
      return;
    }

    const visible = pins.slice(0, MAX_PINNED_UI);
    const hiddenCount = pins.length - visible.length;
    list.innerHTML = "";
    visible.forEach((p) => {
      const a = doc.createElement("a");
      a.className = "pinned-link";
      a.setAttribute("href", p.url);
      a.textContent = p.title;
      list.appendChild(a);
    });

    if (hiddenCount > 0) {
      const more = doc.createElement("button");
      more.type = "button";
      more.className = "pinned-more";
      more.textContent = `+ ${hiddenCount} more`;
      more.addEventListener("click", () => openPinnedModal(pins));
      list.appendChild(more);
    }
  };

  const syncTopPinnedButton = () => {
    const btn = doc.getElementById("top-pinned-btn");
    if (!btn) return;
    const current = getCurrentPagePin();
    const pins = parsePins();
    const pinned = pins.some((p) => p.url === current.url);
    btn.textContent = pinned ? "★" : "☆";
    btn.classList.toggle("is-active", pinned);
    btn.setAttribute("aria-pressed", pinned ? "true" : "false");
    btn.title = pinned ? "Unpin this page" : "Pin this page";
  };

  const toggleCurrentPagePin = () => {
    const current = getCurrentPagePin();
    const pins = parsePins();
    const idx = pins.findIndex((p) => p.url === current.url);
    if (idx >= 0) {
      pins.splice(idx, 1);
    } else {
      pins.unshift(current);
    }
    savePins(pins);
    renderPinned();
    syncTopPinnedButton();
  };

  const initPinButton = () => {
    const btn = doc.querySelector(".pin-toggle[data-pin-url][data-pin-title]");
    if (!btn) return;

    const url = btn.getAttribute("data-pin-url");
    const title = btn.getAttribute("data-pin-title");

    const sync = () => {
      const pins = parsePins();
      const pinned = pins.some((p) => p.url === url);
      btn.setAttribute("aria-pressed", pinned ? "true" : "false");
      btn.textContent = pinned ? "★ Pinned" : "☆ Pin";
    };

    btn.addEventListener("click", () => {
      const pins = parsePins();
      const idx = pins.findIndex((p) => p.url === url);
      if (idx >= 0) {
        pins.splice(idx, 1);
      } else {
        pins.unshift({ url, title });
      }
      savePins(pins);
      sync();
      renderPinned();
    });

    sync();
  };

  const initClickableCards = () => {
    const cards = new Set([
      ...doc.querySelectorAll(".is-clickable[data-card-href]"),
      ...doc.querySelectorAll(".section-card"),
    ]);

    cards.forEach((card) => {
      let href = card.getAttribute("data-card-href");
      if (!href) {
        const fallbackLink = card.querySelector(".card-title a[href]");
        href = fallbackLink?.getAttribute("href") || "";
      }
      if (!href) return;

      card.classList.add("is-clickable");
      card.setAttribute("role", "link");
      card.setAttribute("tabindex", "0");
      if (!card.getAttribute("data-card-href")) {
        card.setAttribute("data-card-href", href);
      }

      card.addEventListener("click", (event) => {
        const target = event.target instanceof Element ? event.target : event.target?.parentElement;
        if (target && target.closest("a, button, input, textarea, select, summary, label, details")) return;
        window.location.href = href;
      });

      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        window.location.href = href;
      });
    });
  };

  const initReferenceMapControls = () => {
    const cards = [...doc.querySelectorAll(".refmap-card")];
    if (!cards.length) return;
    const toggleBtn = doc.querySelector("[data-refmap-toggle]");
    if (!toggleBtn) return;

    const syncLabel = () => {
      const allOpen = cards.every((card) => card.open);
      toggleBtn.textContent = allOpen ? "Collapse all" : "Expand all";
      toggleBtn.setAttribute("aria-pressed", allOpen ? "true" : "false");
    };

    toggleBtn.addEventListener("click", () => {
      const allOpen = cards.every((card) => card.open);
      cards.forEach((card) => {
        card.open = !allOpen;
      });
      syncLabel();
    });

    cards.forEach((card) => {
      card.addEventListener("toggle", syncLabel);
    });
    syncLabel();
  };

  const initAlgorithmIndexPanels = () => {
    doc.querySelectorAll(".algorithm-index-panel").forEach((panel) => {
      const button = panel.querySelector(".algorithm-index-toggle");
      if (!button) return;

      const sync = () => {
        const expanded = panel.getAttribute("data-expanded") !== "false";
        panel.setAttribute("data-expanded", expanded ? "true" : "false");
        button.setAttribute("aria-expanded", expanded ? "true" : "false");
        button.textContent = expanded ? "Hide" : "Show";
      };

      button.addEventListener("click", () => {
        const expanded = panel.getAttribute("data-expanded") !== "false";
        panel.setAttribute("data-expanded", expanded ? "false" : "true");
        sync();
      });

      sync();
    });
  };

  const focusSearch = () => {
    const input =
      doc.getElementById("top-search-input") ||
      doc.querySelector(".search-input");
    if (input) {
      input.focus();
      input.select();
    }
  };

  const initKeyboard = () => {
    let gPending = false;
    let gTimer = null;

    doc.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeFloatingUi();
      }

      if (event.key === "?" && !isTextInputFocused()) {
        event.preventDefault();
        openShortcutsModal();
        return;
      }

      const keyMode = load(KEYS_KEY, "default");
      if (keyMode !== "vim") return;
      if (isTextInputFocused()) return;

      if (event.key === "/") {
        event.preventDefault();
        focusSearch();
        return;
      }

      if (event.key === "S") {
        event.preventDefault();
        openBookmarkSpotlight();
        return;
      }

      if (event.key === "b") {
        event.preventDefault();
        toggleCurrentPagePin();
        return;
      }

      if (event.key === "j") {
        event.preventDefault();
        window.scrollBy({ top: 90, left: 0, behavior: "smooth" });
        return;
      }

      if (event.key === "k") {
        event.preventDefault();
        window.scrollBy({ top: -90, left: 0, behavior: "smooth" });
        return;
      }

      if (event.key === "G") {
        event.preventDefault();
        window.scrollTo({ top: doc.documentElement.scrollHeight, behavior: "smooth" });
        return;
      }

      if (event.key === "g") {
        if (gPending) {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          gPending = false;
          if (gTimer) clearTimeout(gTimer);
        } else {
          gPending = true;
          gTimer = setTimeout(() => {
            gPending = false;
          }, 500);
        }
      }
    });
  };

  const parseSince = () => {
    const explicit = (doc.body.getAttribute("data-page-since") || "").trim();
    if (explicit) return explicit;

    const article = doc.querySelector("article");
    if (!article) return "C++";
    const text = article.textContent || "";
    const match = text.match(/C\+\+\d{2}/);
    return match ? match[0] : "C++";
  };

  const parseHeader = () => {
    const explicit = (doc.body.getAttribute("data-page-header") || "").trim();
    if (explicit) return explicit;
    const path = (doc.body.getAttribute("data-source-path") || "").trim();
    const parts = path.split("/").filter(Boolean);
    const section = parts.length >= 2 && parts[0] === "cpp" ? parts[1] : (parts[0] || "cpp");
    return `<${section}>`;
  };

  const buildContextText = () => {
    const title = (doc.body.getAttribute("data-page-title") || "").trim();
    const header = parseHeader();
    const since = parseSince();
    if (!title) return `${header} | ${since}`;
    return `${header} | ${since} | ${title}`;
  };

  const initTopBar = () => {
    const topBar = doc.getElementById("top-bar");
    const context = doc.getElementById("top-context");
    if (!topBar || !context) return;

    const kind = (doc.body.getAttribute("data-page-kind") || "").trim();
    const pageTitle = (doc.body.getAttribute("data-page-title") || "").trim();
    topBar.hidden = false;

    if (kind === "page") {
      context.textContent = buildContextText();
      return;
    }

    if (kind === "home") {
      context.textContent = "Always-on settings and global search";
      return;
    }

    context.textContent = pageTitle || "Reference";
  };

  const initHeaderControl = () => {
    const navBtn = doc.getElementById("top-nav-btn");
    const navMenu = doc.getElementById("top-nav-menu");
    const settingsBtn = doc.getElementById("top-settings-btn");
    const themeBtn = doc.getElementById("top-theme-btn");
    const pinnedBtn = doc.getElementById("top-pinned-btn");
    const minStandardSelect = doc.getElementById("top-min-standard");
    const menu = doc.getElementById("settings-menu");

    if (!navBtn || !navMenu || !settingsBtn || !themeBtn || !pinnedBtn || !menu) return;

    navBtn.addEventListener("click", () => {
      const isOpen = !navMenu.hidden;
      if (!isOpen) {
        menu.hidden = true;
        settingsBtn.setAttribute("aria-expanded", "false");
      }
      navMenu.hidden = isOpen;
      navBtn.setAttribute("aria-expanded", String(!isOpen));
    });

    settingsBtn.addEventListener("click", () => {
      const isOpen = !menu.hidden;
      if (!isOpen) {
        navMenu.hidden = true;
        navBtn.setAttribute("aria-expanded", "false");
      }
      menu.hidden = isOpen;
      settingsBtn.setAttribute("aria-expanded", String(!isOpen));
    });

    themeBtn.addEventListener("click", () => {
      cycleTheme();
    });

    pinnedBtn.addEventListener("click", () => {
      toggleCurrentPagePin();
    });

    if (minStandardSelect) {
      minStandardSelect.addEventListener("change", () => {
        applyMinStandard(minStandardSelect.value);
      });
    }

    doc.addEventListener("click", (e) => {
      if (!navMenu.hidden && !navMenu.contains(e.target) && e.target !== navBtn && !navBtn.contains(e.target)) {
        navMenu.hidden = true;
        navBtn.setAttribute("aria-expanded", "false");
      }
      if (!menu.hidden && !menu.contains(e.target) && e.target !== settingsBtn && !settingsBtn.contains(e.target)) {
        menu.hidden = true;
        settingsBtn.setAttribute("aria-expanded", "false");
      }
    });

    doc.querySelectorAll("[data-theme-choice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const choice = btn.getAttribute("data-theme-choice") || "auto";
        applyTheme(choice);
      });
    });

    doc.querySelectorAll("[data-keys-choice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const choice = btn.getAttribute("data-keys-choice") || "default";
        save(KEYS_KEY, choice);
        highlightSegment("data-keys-choice", choice);
      });
    });

    doc.querySelectorAll("[data-liga-choice]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const choice = btn.getAttribute("data-liga-choice") || "on";
        applyLigatures(choice);
      });
    });

    const theme = load(THEME_KEY, "auto");
    applyTheme(theme);

    const mode = load(KEYS_KEY, "default");
    highlightSegment("data-keys-choice", mode);

    const ligatures = load(LIGA_KEY, "on");
    applyLigatures(ligatures);

    const minStandard = load(MIN_STANDARD_KEY, "any");
    applyMinStandard(minStandard);

    if (prefersLight && typeof prefersLight.addEventListener === "function") {
      prefersLight.addEventListener("change", () => {
        if ((load(THEME_KEY, "auto") || "auto") === "auto") {
          renderThemeIcon("auto");
        }
      });
    }

    renderPinned();
    syncTopPinnedButton();
  };

  const initVariantSelectors = () => {
    doc.querySelectorAll("[data-variant-selector]").forEach((rootEl) => {
      const scope = rootEl.getAttribute("data-variant-scope") || "";
      if (!scope) return;

      const storageKey = `cppdocs.${rootEl.getAttribute("data-variant-storage-key") || scope}`;
      const buttons = [...rootEl.querySelectorAll("[data-variant-choice]")];
      const links = [...doc.querySelectorAll(`[data-variant-link][data-variant-scope="${scope}"]`)];
      if (!buttons.length || !links.length) return;

      const validChoices = new Set(buttons.map((btn) => btn.getAttribute("data-variant-choice") || "").filter(Boolean));
      const params = new URLSearchParams(window.location.search || "");
      const queryChoice = params.get("variant") || "";
      const storedChoice = load(storageKey, "");
      const defaultChoice = rootEl.getAttribute("data-default-variant") || "";
      const initialChoice =
        (validChoices.has(queryChoice) && queryChoice) ||
        (validChoices.has(storedChoice) && storedChoice) ||
        (validChoices.has(defaultChoice) && defaultChoice) ||
        buttons[0].getAttribute("data-variant-choice") ||
        "";

      const applyChoice = (choice) => {
        if (!validChoices.has(choice)) return;
        save(storageKey, choice);

        buttons.forEach((btn) => {
          const current = btn.getAttribute("data-variant-choice") || "";
          const active = current === choice;
          btn.classList.toggle("is-active", active);
          btn.setAttribute("aria-pressed", active ? "true" : "false");
        });

        links.forEach((link) => {
          const baseHref = link.getAttribute("data-base-href") || link.getAttribute("href") || "";
          if (!baseHref) return;
          const url = new URL(baseHref, document.baseURI);
          url.searchParams.set("variant", choice);
          link.setAttribute("href", `${url.pathname}${url.search}${url.hash}`);
        });

        doc.querySelectorAll("[data-variant-token]").forEach((token) => {
          const current = token.getAttribute("data-variant-token") || "";
          token.classList.toggle("is-active", current === choice);
        });
      };

      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const choice = btn.getAttribute("data-variant-choice") || "";
          applyChoice(choice);
        });
      });

      applyChoice(initialChoice);
    });

    const pageChoice = new URLSearchParams(window.location.search || "").get("variant") || "";
    if (pageChoice) {
      doc.querySelectorAll("[data-variant-token]").forEach((token) => {
        const current = token.getAttribute("data-variant-token") || "";
        token.classList.toggle("is-active", current === pageChoice);
      });
    }
  };

  syncMinStandardStatus(load(MIN_STANDARD_KEY, "any"));
  syncSinglePageMinStandardNotice(load(MIN_STANDARD_KEY, "any"));
  window.addEventListener("cppdocs:min-standard-change", (event) => {
    const value = event?.detail?.value || load(MIN_STANDARD_KEY, "any");
    syncMinStandardStatus(value);
    syncSinglePageMinStandardNotice(value);
  });

  initHeaderControl();
  initVariantSelectors();
  initKeyboard();
  initPinButton();
  initClickableCards();
  initReferenceMapControls();
  initAlgorithmIndexPanels();
  initTopBar();
})();
