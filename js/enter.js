
(function (factory) {

  if (typeof define === "function" && define.amd) {
      define(factory);
  } else if (typeof module !== "undefined" && module.exports) {
      module.exports = factory();
  } else {
      window.enterView = factory.call(this);
      console.log(window.enterView);
  }
})(() => {
  const lib = ({ selector: selector, enter: enter = () => {}, exit: exit = () => {}, progress: progress = () => {}, offset: offset = 0, once: once = false }) => {
      let raf = null;
      let ticking = false;
      let elements = [];
      let height = 0;
      function setupRaf() {
          raf =
              window.requestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.msRequestAnimationFrame ||
              function (callback) {
                  return setTimeout(callback, 1e3 / 60);
              };
      }
      function getOffsetHeight() {
          if (offset && typeof offset === "number") {
              const fraction = Math.min(Math.max(0, offset), 1);
              return height - fraction * height;
          }
          return height;
      }
      function updateHeight() {
          const cH = document.documentElement.clientHeight;
          const wH = window.innerHeight || 0;
          height = Math.max(cH, wH);
      }
      function updateScroll() {
          ticking = false;
          const targetFromTop = getOffsetHeight();
          elements = elements.filter((el) => {
              const { top: top, bottom: bottom, height: height } = el.getBoundingClientRect();
              const entered = top < targetFromTop;
              const exited = bottom < targetFromTop;
              if (entered && !el.__ev_entered) {
                  enter(el);
                  el.__ev_progress = 0;
                  progress(el, el.__ev_progress);
                  if (once) return false;
              } else if (!entered && el.__ev_entered) {
                  el.__ev_progress = 0;
                  progress(el, el.__ev_progress);
                  exit(el);
              }
              if (entered && !exited) {
                  const delta = (targetFromTop - top) / height;
                  el.__ev_progress = Math.min(1, Math.max(0, delta));
                  progress(el, el.__ev_progress);
              }
              if (entered && exited && el.__ev_progress !== 1) {
                  el.__ev_progress = 1;
                  progress(el, el.__ev_progress);
              }
              el.__ev_entered = entered;
              return true;
          });
          if (!elements.length) {
              window.removeEventListener("scroll", onScroll, true);
              window.removeEventListener("resize", onResize, true);
              window.removeEventListener("load", onLoad, true);
          }
      }
      function onScroll() {
          if (!ticking) {
              ticking = true;
              raf(updateScroll);
          }
      }
      function onResize() {
          updateHeight();
          updateScroll();
      }
      function onLoad() {
          updateHeight();
          updateScroll();
      }
      function selectionToArray(selection) {
          const len = selection.length;
          const result = [];
          for (let i = 0; i < len; i += 1) {
              result.push(selection[i]);
          }
          return result;
      }
      function selectAll(selector, parent = document) {
          if (typeof selector === "string") {
              return selectionToArray(parent.querySelectorAll(selector));
          } else if (selector instanceof NodeList) {
              return selectionToArray(selector);
          } else if (selector instanceof Array) {
              return selector;
          }
      }
      function setupElements() {
          elements = selectAll(selector);
      }
      function setupEvents() {
          window.addEventListener("resize", onResize, true);
          window.addEventListener("scroll", onScroll, true);
          window.addEventListener("load", onLoad, true);
          onResize();
      }
      function init() {
          if (!selector) {
              return false;
          }
          setupElements();
          if (!elements || !elements.length) {
              return false;
          }
          setupRaf();
          setupEvents();
          updateScroll();
      }
      init();
  };
  return lib;
});
