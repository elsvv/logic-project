export default (value) =>
  encodeURIComponent(value).replace(/\(/g, "%28").replace(/\)/g, "%29");
