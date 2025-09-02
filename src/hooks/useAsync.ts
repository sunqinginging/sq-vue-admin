export function useAsync<T>(
  asyncFn: () => Promise<T>,
  initialValue: T,
  immediate: boolean = true,
) {
  const loading = ref(false);
  const data = ref(initialValue);
  const error = ref(null);

  const run = () => {
    loading.value = true;
    error.value = null;

    return asyncFn()
      .then((res) => {
        data.value = res;
        loading.value = false;
      })
      .catch((err) => {
        error.value = err;
        loading.value = false;
      });
  };

  if (immediate) {
    run();
  }

  return {
    loading,
    data,
    error,
    run,
  };
}
