const a = [
  ["Lui", 33],
  ["Bob", 88],
  ["Suji", 12],
  ["Andrew", 44],
];

JSON.parse(JSON.stringify(a));

let clone = { ...a };

let clone1 = Object.assign({}, a);

function cloneObj(value) {
  if (typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item) => cloneObj(item));
  }

  let enter = Object.entries(cloneObj);
  return enter.reduce((acc, [key, value]) => {
    acc[key] = cloneObj(value);
    return acc;
  }, {});
}
console.log(cloneObj(a));
