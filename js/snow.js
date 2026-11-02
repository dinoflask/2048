// Gentle, randomised snowfall for the Christmas theme.
(function () {
  "use strict";

  var layer = document.querySelector(".snowfall");
  if (!layer) return;

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion) return;

  var flakeCount = window.innerWidth < 520 ? 28 : 55;
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < flakeCount; i++) {
    var flake = document.createElement("span");
    var size = Math.random() * 5 + 2;
    var duration = Math.random() * 14 + 10;
    var delay = Math.random() * -24;
    var drift = (Math.random() - 0.5) * 180;

    flake.className = "snowflake";
    flake.style.left = (Math.random() * 100) + "vw";
    flake.style.width = size + "px";
    flake.style.height = size + "px";
    flake.style.opacity = (Math.random() * 0.5 + 0.25).toFixed(2);
    flake.style.animationDuration = duration + "s";
    flake.style.animationDelay = delay + "s";
    flake.style.setProperty("--drift", drift.toFixed(0) + "px");

    fragment.appendChild(flake);
  }

  layer.appendChild(fragment);
})();
