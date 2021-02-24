function debounce(fn, wait = 100, immediate = false) {
    let timeout = null;
    let result;
    let debounced = function () {
      const context = this;
      const args = arguments;
      if(timeout) clearTimeout(timeout);
      if (immediate) {
        const callNow = !timeout;
        timeout = setTimeout(() => {
          timeout = null;
        }, wait);
        if (callNow) result = fn.apply(context, args);
      } else {
        timeout = setTimeout(() => {
          fn.apply(context, args);
        }, wait);
      }
      return result;
    };
  
    debounced.cancel=function(){
        clearTimeout(timeout);
        timeout=null;
    }
  
    return debounced;
  }
  