(() => {
  const LOCAL_PAGE_SLUGS = new Set([
    "accenture-banking-trends-2026",
    "accenture-federal-services",
    "accenture-song-index",
    "accessibility-statement",
    "ae-en",
    "aerospace-defense",
    "ai-usage-job-search",
    "ar-es",
    "at-de",
    "au-en",
    "automotive",
    "awards-recognition",
    "banking",
    "be-en",
    "benefits",
    "bg-en",
    "blogs-careers",
    "bristol-myers-squibb-accelerates-drug-development-genai",
    "br-pt",
    "ca-en",
    "ca-fr",
    "capital-markets",
    "career-areas",
    "careers",
    "chemicals",
    "ch-en",
    "cl-es",
    "cloud",
    "cn-en",
    "co-es",
    "communications-media",
    "company-cookies-similar-technology",
    "company-index",
    "complexity-dividend-turning-scale-into-growth",
    "consulting-index",
    "consumer-goods-services",
    "contact-us",
    "corporate-sustainability",
    "cr-en",
    "customer-service",
    "cybersecurity",
    "cz-en",
    "data-ai",
    "de-de",
    "digital-engineering-manufacturing",
    "dk-en",
    "ecosystem-partners",
    "emerging-technology",
    "energy",
    "es-es",
    "fi-en",
    "finance-risk",
    "form-do-not-sell-my-personal-information",
    "fr-fr",
    "gb-en",
    "gr-en",
    "health",
    "high-tech",
    "hk-en",
    "hu-en",
    "id-en",
    "ie-en",
    "il-en",
    "index",
    "industrial-equipment",
    "industry-analyst",
    "in-en",
    "infrastructure-capital-projects",
    "insights-index",
    "insurance",
    "integrated-reporting",
    "it-it",
    "jobsearch",
    "journey-to-accenture",
    "jp-ja",
    "leadership",
    "learning",
    "learning-reinvented-accelerating-human-ai-collaboration",
    "life-sciences",
    "location",
    "lu-en",
    "lv-en",
    "ma-en",
    "making-self-funding-supply-chains-real",
    "managed-services",
    "marketing-experience",
    "metaverse",
    "microsoft-reaches-sky-scaling-cloud-at-speed-of-ai",
    "mu-en",
    "mx-es",
    "my-en",
    "natural-resources",
    "new-rules-platform-strategy-agentic-ai",
    "nl-en",
    "no-en",
    "noli-uses-ai-beat-beauty-jungle-find-your-perfect-match",
    "nz-en",
    "ph-en",
    "pl-en",
    "pl-pl",
    "poste-italianes-pivot-postal-service-platform-powerhouse",
    "privacy-policy",
    "private-equity",
    "pro-tips",
    "pt-pt",
    "public-service",
    "pulse-of-change",
    "retail",
    "ro-en",
    "sa-en",
    "sales-commerce",
    "search",
    "se-en",
    "services",
    "sg-en",
    "site-map",
    "sk-en",
    "software-platforms",
    "sovereign-ai",
    "state-cybersecurity-2025",
    "strategy",
    "sumitomo-metal-mining-reimagines-materials-drive-global-innovation",
    "supply-chain",
    "sustainability",
    "talent-organization",
    "technology-index",
    "technology-transformation",
    "terms-of-use",
    "th-en",
    "travel",
    "unicef-ai-strategy",
    "utilities",
    "work-environment",
    "working-here",
    "za-en"
  ]);

  const HOST_FALLBACKS = {
    "accenture.com": "/index.html",
    "www.accenture.com": "/index.html",
    "accenture.cn": "/cn-en.html",
    "www.accenture.cn": "/cn-en.html",
    "newsroom.accenture.com": "/insights-index.html",
    "investor.accenture.com": "/company-index.html",
    "wd103.myworkday.com": "/careers.html",
    "linkedin.com": "/index.html",
    "www.linkedin.com": "/index.html",
    "facebook.com": "/index.html",
    "www.facebook.com": "/index.html",
    "instagram.com": "/index.html",
    "www.instagram.com": "/index.html"
  };

  const PATH_FALLBACKS = [
    { test: /\/insights\//i, path: "/insights-index.html" },
    { test: /\/news\//i, path: "/insights-index.html" },
    { test: /\/services?\//i, path: "/services.html" },
    { test: /\/industr(?:y|ies)\//i, path: "/services.html" },
    { test: /\/careers?\//i, path: "/careers.html" },
    { test: /\/jobs?\//i, path: "/careers.html" },
    { test: /\/about\//i, path: "/company-index.html" },
    { test: /\/contact/i, path: "/contact-us.html" }
  ];

  function normalizeSlug(value) {
    return decodeURIComponent(value || "")
      .toLowerCase()
      .replace(/\.html$/i, "")
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function isLegacyAccenturePath(url) {
    return /^\/[a-z]{2}(?:-[a-z]{2})?(?:\/|$)/i.test(url.pathname);
  }

  function resolveLocalPath(url) {
    const segments = url.pathname.split("/").filter(Boolean);

    for (let i = segments.length - 1; i >= 0; i -= 1) {
      const slug = normalizeSlug(segments[i]);
      if (LOCAL_PAGE_SLUGS.has(slug)) {
        return `/${slug}.html`;
      }
    }

    const hostFallback = HOST_FALLBACKS[url.hostname.toLowerCase()];
    if (hostFallback) {
      return hostFallback;
    }

    for (const fallback of PATH_FALLBACKS) {
      if (fallback.test.test(url.pathname)) {
        return fallback.path;
      }
    }

    return "/index.html";
  }

  function shouldRewrite(url) {
    if (url.protocol === "mailto:" || url.protocol === "tel:") {
      return false;
    }

    if (url.origin !== window.location.origin) {
      return true;
    }

    return isLegacyAccenturePath(url);
  }

  function rewriteAnchors() {
    document.querySelectorAll("a[href]").forEach((anchor) => {
      const rawHref = (anchor.getAttribute("href") || "").trim();

      if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("javascript:")) {
        return;
      }

      let url;

      try {
        url = new URL(rawHref, window.location.origin);
      } catch {
        return;
      }

      if (!shouldRewrite(url)) {
        return;
      }

      const localPath = resolveLocalPath(url);
      anchor.setAttribute("href", `${localPath}${url.hash || ""}`);
      anchor.removeAttribute("target");
      anchor.removeAttribute("rel");
    });
  }

  document.addEventListener(
    "click",
    (event) => {
      const anchor = event.target.closest("a[href]");
      if (!anchor) {
        return;
      }

      const rawHref = (anchor.getAttribute("href") || "").trim();
      if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("javascript:")) {
        return;
      }

      let url;

      try {
        url = new URL(rawHref, window.location.origin);
      } catch {
        return;
      }

      if (!shouldRewrite(url)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const localPath = resolveLocalPath(url);
      window.location.assign(`${localPath}${url.hash || ""}`);
    },
    true
  );

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", rewriteAnchors, { once: true });
  } else {
    rewriteAnchors();
  }
})();
