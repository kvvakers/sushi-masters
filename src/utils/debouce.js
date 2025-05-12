
export function debounce(callback, delay = 500) {
  let timeoutId;

  function cancel() {
    clearTimeout(timeoutId);
  }

  function debounced(...args) {
    cancel();
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };

  debounced.cancel = cancel;;

  return debounced;
}
