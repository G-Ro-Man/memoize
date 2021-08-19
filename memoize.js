export default function memoize(fn) {
  const cache = [];
  return (...args) => {
    const finded = cache.find(
      (el) =>
        el.args.length === args.length && el.args.every((e, i) => e === args[i])
    );
    if (finded) {
      return finded.result;
    }
    const result = fn(...args);
    cache.push({
      args,
      result,
    });
    return result;
  };
}
