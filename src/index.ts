export default {
  deepCopy: (obj: object) => {
    return JSON.parse(JSON.stringify(obj));
  },
};
