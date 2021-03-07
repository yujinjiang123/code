function debounce(fn, wait, immediate) {
  let timeout = null;
  const debounced = function () {
    const context = this;
    const args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timeout = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  };

  debounce.cancel = function () {
    timeout = null;
  };
  return debounce;
}
