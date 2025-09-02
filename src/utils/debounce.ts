export function debounce(
  fn: (...args: any[]) => void,
  delay: number,
  immediate: boolean = false,
) {
  let timer: number | null | undefined = null;
  let isInvoke = false;

  const _debounce = function (...args: any[]) {
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate && !isInvoke) {
      fn.apply(this, args);
      isInvoke = true;
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
      isInvoke = false;
    }, delay);
  };

  _debounce.cancel = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = null;
    isInvoke = false;
  };

  return _debounce;
}
