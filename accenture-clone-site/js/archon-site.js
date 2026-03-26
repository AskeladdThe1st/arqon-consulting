(function ($) {
    "use strict";

    var hasJQuery = typeof $ === "function";

    var localHrefMap = {
        "/us-en": "/index.html",
        "/us-en/": "/index.html",
        "/us-en/services": "/services.html",
        "/us-en/services/": "/services.html",
        "/us-en/insights": "/insights-index.html",
        "/us-en/insights/": "/insights-index.html",
        "/us-en/about/contact-us": "/contact-us.html",
        "/us-en/about/contact-us/": "/contact-us.html"
    };

    function disableCookieBanner() {
        if (!hasJQuery) {
            return;
        }

        var cookieSelectors = [
            "#onetrust-consent-sdk",
            "#onetrust-banner-sdk",
            "#onetrust-pc-sdk",
            ".onetrust-pc-dark-filter",
            ".optanon-alert-box-wrapper",
            ".onetrust-close-btn-handler",
            ".onetrust-pc-sdk"
        ];

        if (!document.getElementById("archon-cookie-banner-hide-style")) {
            $("head").append(
                "<style id=\"archon-cookie-banner-hide-style\">" +
                cookieSelectors.join(",") +
                "{display:none !important;visibility:hidden !important;opacity:0 !important;pointer-events:none !important;}" +
                "body{overflow:auto !important;}" +
                "</style>"
            );
        }

        cookieSelectors.forEach(function (selector) {
            $(selector).remove();
        });

        $("body").removeClass("onetrust-consent-sdk");
        $("html, body").css("overflow", "");
    }

    function normalizeKnownHref(href) {
        var normalized = href;

        if (/^https?:\/\//i.test(href)) {
            try {
                normalized = new URL(href, window.location.origin).pathname;
            } catch (error) {
                return null;
            }
        }

        return localHrefMap[normalized] || null;
    }

    function rewriteKnownLinks() {
        if (!hasJQuery) {
            return;
        }

        $("a[href]").each(function () {
            var link = $(this);
            var href = link.attr("href");
            var nextHref;

            if (!href) {
                return;
            }

            nextHref = normalizeKnownHref(href);
            if (nextHref) {
                link.attr("href", nextHref);
            }
        });
    }

    function applyArchonNavbarSimplification() {
        if (!hasJQuery) {
            return;
        }

        var navHrefMap = {
            "Home": "/index.html",
            "Services": "/services.html",
            "Insights": "/insights-index.html",
            "Contact": "/contact-us.html"
        };

        if (!document.getElementById("archon-navbar-quick-fix-style")) {
            $("head").append(
                "<style id=\"archon-navbar-quick-fix-style\">" +
                ".rad-global-nav__utility-nav,.rad-header__search,.rad-global-nav__language-container{display:none !important;}" +
                ".rad-global-nav__l1--button .rad-button__icon-right{display:none !important;}" +
                ".rad-global-nav__menu-item-content{display:none !important;}" +
                "@media (min-width: 1024px) {" +
                ".rad-global-nav__primary-nav{margin-left:auto !important;}" +
                ".rad-global-nav__menu-items{justify-content:flex-end !important;}" +
                "}" +
                "</style>"
            );
        }

        $(".rad-global-nav__menu-items > li").each(function () {
            var navItem = $(this);
            var button = navItem.children("button.rad-global-nav__l1--button");

            if (!button.length) {
                return;
            }

            var label = $.trim(button.find(".rad-button__text").text());
            var href = navHrefMap[label];

            if (!href) {
                return;
            }

            var link = $("<a>", {
                "class": button.attr("class") + " archon-nav-link",
                "href": href,
                "aria-label": label,
                "data-cmp-clickable": ""
            });

            link.append($("<div>", { "class": "rad-button__text", "text": label }));
            button.replaceWith(link);
            navItem.find(".rad-global-nav__menu-item-content").remove();
        });
    }

    function applyAccessibilityPolish() {
        if (!hasJQuery) {
            return;
        }

        $(".rad-card img").attr("alt", "");

        $(".rad-awards-card__rte a[target*='blank']").each(function () {
            var link = $(this);
            if (!link.attr("title")) {
                link.attr("title", "This opens a new tab.");
            }
        });
    }

    function initArchonMobileNav() {
        var navRoot = document.querySelector(".rad-global-nav");
        var openButton;
        var closeButton;
        var primaryNav;

        if (!navRoot || navRoot.dataset.archonNavBound === "true") {
            return;
        }

        openButton = navRoot.querySelector(".rad-global-nav__menu-open");
        closeButton = navRoot.querySelector(".rad-global-nav__menu-close");
        primaryNav = navRoot.querySelector(".rad-global-nav__primary-nav");

        if (!openButton || !closeButton || !primaryNav) {
            return;
        }

        function setMenuState(isOpen) {
            primaryNav.classList.toggle("is-open", isOpen);
            navRoot.classList.toggle("archon-nav-open", isOpen);
            document.documentElement.classList.toggle("archon-nav-lock", isOpen);
            document.body.classList.toggle("archon-nav-lock", isOpen);
            openButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
            closeButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
        }

        openButton.addEventListener("click", function (event) {
            if (window.innerWidth > 1023) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
            setMenuState(true);
        });

        closeButton.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();
            setMenuState(false);
        });

        primaryNav.addEventListener("click", function (event) {
            if (window.innerWidth > 1023) {
                return;
            }

            if (event.target.closest(".rad-global-nav__menu-close")) {
                return;
            }

            if (event.target.closest(".rad-global-nav__menu-items a")) {
                setMenuState(false);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setMenuState(false);
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 1023) {
                setMenuState(false);
            }
        });

        navRoot.dataset.archonNavBound = "true";
    }

    function initSimpleHeaderMobileNav() {
        var header = document.querySelector(".site-header");
        var headerInner;
        var nav;
        var openButton;
        var mobileNav;
        var closeButton;
        var linksWrap;

        if (!header || header.dataset.archonSimpleNavBound === "true") {
            return;
        }

        headerInner = header.querySelector(".site-header__inner");
        nav = header.querySelector(".site-nav");

        if (!headerInner || !nav) {
            return;
        }

        openButton = document.createElement("button");
        openButton.type = "button";
        openButton.className = "site-header__menu-open";
        openButton.setAttribute("aria-label", "Open menu");
        openButton.setAttribute("aria-expanded", "false");
        openButton.innerHTML = '<span class="site-header__menu-icon"><span></span></span>';

        mobileNav = document.createElement("div");
        mobileNav.className = "site-header__mobile-nav";
        mobileNav.setAttribute("aria-hidden", "true");

        closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "site-header__menu-close";
        closeButton.setAttribute("aria-label", "Close menu");
        closeButton.setAttribute("aria-expanded", "false");
        closeButton.innerHTML = '<span class="site-header__menu-close-icon"></span>';

        linksWrap = document.createElement("nav");
        linksWrap.className = "site-header__mobile-nav-links";
        linksWrap.setAttribute("aria-label", "Mobile navigation");
        linksWrap.innerHTML = nav.innerHTML;

        mobileNav.appendChild(closeButton);
        mobileNav.appendChild(linksWrap);
        headerInner.insertBefore(openButton, headerInner.firstChild);
        header.appendChild(mobileNav);

        function setSimpleMenuState(isOpen) {
            header.classList.toggle("is-open", isOpen);
            document.documentElement.classList.toggle("archon-simple-nav-lock", isOpen);
            document.body.classList.toggle("archon-simple-nav-lock", isOpen);
            openButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
            closeButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
            mobileNav.setAttribute("aria-hidden", isOpen ? "false" : "true");
        }

        openButton.addEventListener("click", function (event) {
            if (window.innerWidth > 1023) {
                return;
            }

            event.preventDefault();
            setSimpleMenuState(true);
        });

        closeButton.addEventListener("click", function (event) {
            event.preventDefault();
            setSimpleMenuState(false);
        });

        linksWrap.addEventListener("click", function (event) {
            if (event.target.closest("a")) {
                setSimpleMenuState(false);
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                setSimpleMenuState(false);
            }
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 1023) {
                setSimpleMenuState(false);
            }
        });

        header.dataset.archonSimpleNavBound = "true";
    }

    function handleHashScroll() {
        if (!hasJQuery) {
            return;
        }

        var href = window.location.href;
        if (href.indexOf("#") === -1) {
            return;
        }

        var targetHash = "#" + href.split("#")[1];
        var target = $(targetHash);
        var header = $(".cmp-global-header__navbar-container");

        if (!target.length) {
            return;
        }

        $("html, body").animate({
            scrollTop: target.offset().top - (header.height() || 0)
        }, 1000);
    }

    function initArchonSiteFixes() {
        disableCookieBanner();
        rewriteKnownLinks();
        applyArchonNavbarSimplification();
        applyAccessibilityPolish();
        initArchonMobileNav();
        initSimpleHeaderMobileNav();
    }

    if (hasJQuery) {
        $(function () {
            initArchonSiteFixes();
        });

        $(window).on("load", handleHashScroll);

        new MutationObserver(function () {
            disableCookieBanner();
            rewriteKnownLinks();
        }).observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    } else {
        document.addEventListener("DOMContentLoaded", initArchonSiteFixes);
        window.addEventListener("load", handleHashScroll);
    }

    window.addEventListener("radTransitionFinished", initArchonSiteFixes);
})(window.jQuery);
