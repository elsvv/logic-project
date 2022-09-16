const encodeToURI = (value) =>
  encodeURIComponent(value).replace(/\(/g, "%28").replace(/\)/g, "%29");

export default encodeToURI;
