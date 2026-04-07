(function () {
  "use strict";

  function animateCount(el, duration) {
    if (!el || el.dataset.animated === "true") return;
    el.dataset.animated = "true";

    var target = parseInt(el.getAttribute("data-target") || "0", 10);
    var prefix = el.getAttribute("data-prefix") || "";
    var suffix = el.getAttribute("data-suffix") || "";
    var startTime = null;

    function frame(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 2.2);
      var value = Math.floor(eased * target);

      el.textContent = prefix + value + suffix;

      if (progress < 1) {
        window.requestAnimationFrame(frame);
      } else {
        el.textContent = prefix + target + suffix;
      }
    }

    window.requestAnimationFrame(frame);
  }

  function initArchonCredibilityBand() {
    var band = document.querySelector(".archon-credibility-band");
    if (!band || band.dataset.countupReady === "true") return;

    var counters = band.querySelectorAll(".archon-countup");
    if (!counters.length) return;

    band.dataset.countupReady = "true";

    function runAllCounters() {
      counters.forEach(function (counter) {
        animateCount(counter, 6800);
      });
    }

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              runAllCounters();
              observer.disconnect();
            }
          });
        },
        {
          threshold: 0.25,
          rootMargin: "0px 0px -12% 0px",
        }
      );

      observer.observe(band);
    } else {
      runAllCounters();
    }
  }

  window.addEventListener("DOMContentLoaded", initArchonCredibilityBand);
  window.addEventListener("load", initArchonCredibilityBand);
  window.addEventListener("radTransitionFinished", initArchonCredibilityBand);
  setTimeout(initArchonCredibilityBand, 1200);
})();
