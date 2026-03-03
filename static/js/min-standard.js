(() => {
  "use strict";

  const VALID_OPTIONS = new Set(["any", "c++11", "c++14", "c++17", "c++20", "c++23", "c++26"]);
  const OPTION_TO_VERSION = {
    any: Number.POSITIVE_INFINITY,
    "c++11": 11,
    "c++14": 14,
    "c++17": 17,
    "c++20": 20,
    "c++23": 23,
    "c++26": 26,
  };

  const normalizeText = (value) => String(value || "").trim().toLowerCase();

  const normalizeValue = (value) => {
    const normalized = normalizeText(value);
    return VALID_OPTIONS.has(normalized) ? normalized : "any";
  };

  const parseCppSinceVersion = (sinceValue) => {
    if (typeof sinceValue !== "string") return null;
    const text = sinceValue.toLowerCase();
    const matches = [...text.matchAll(/c\+\+\s*(\d{2,4})/g)];
    if (!matches.length) return null;

    const versions = matches
      .map((match) => {
        const raw = Number.parseInt(match[1], 10);
        if (Number.isNaN(raw)) return null;
        if (raw >= 2000) return raw % 100;
        if (raw === 98) return 3;
        return raw;
      })
      .filter((version) => Number.isFinite(version));

    if (!versions.length) return null;
    return Math.min(...versions);
  };

  const isCppScope = ({ scope = "", path = "" } = {}) => {
    const normalizedScope = normalizeText(scope);
    if (normalizedScope === "cpp") return true;

    const normalizedPath = String(path || "").trim().toLowerCase();
    return normalizedPath.startsWith("/cpp/") || normalizedPath === "/cpp" || normalizedPath.startsWith("cpp/");
  };

  const allowsSinceValue = (sinceValue, minStandard) => {
    const normalized = normalizeValue(minStandard);
    if (normalized === "any") return true;

    const selectedVersion = OPTION_TO_VERSION[normalized];
    if (!Number.isFinite(selectedVersion)) return true;

    const sinceVersion = parseCppSinceVersion(sinceValue);
    if (sinceVersion === null) return true;
    return sinceVersion <= selectedVersion;
  };

  const shouldShowItem = (item, minStandard) => {
    if (!isCppScope(item)) return true;
    return allowsSinceValue(item?.since, minStandard);
  };

  const applyVisibility = (root = document, minStandard) => {
    if (!root || typeof root.querySelectorAll !== "function") return;
    const normalized = normalizeValue(
      minStandard || document.documentElement.getAttribute("data-min-standard"),
    );

    root.querySelectorAll("[data-min-standard-item]").forEach((node) => {
      const visible = shouldShowItem(
        {
          scope: node.getAttribute("data-min-standard-scope") || "",
          path: node.getAttribute("data-min-standard-path") || "",
          since: node.getAttribute("data-min-standard-since") || "",
        },
        normalized,
      );

      node.hidden = !visible;
      if (!visible) node.setAttribute("aria-hidden", "true");
      else node.removeAttribute("aria-hidden");
    });
  };

  window.cppdocsMinStandard = Object.freeze({
    normalizeValue,
    parseCppSinceVersion,
    allowsSinceValue,
    shouldShowItem,
    applyVisibility,
  });
})();
