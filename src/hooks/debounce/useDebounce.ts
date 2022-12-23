function useDebounce<T extends Function>(): Function {
  return (callback: T, delay: number = 400): Function => {
    let timeoutId = null;
    const callable = (...args: any): void => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };

    return <T>(<unknown>callable);
  };
}

export default useDebounce;
