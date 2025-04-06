export const getUrlFromPath = (path) => {
  return new URL(path, import.meta.url).href;
};
