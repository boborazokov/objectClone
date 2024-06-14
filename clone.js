const a = {
  name: "ewre",
  age: 32,
};

JSON.parse(JSON.stringify(a));

var clone = Object.assign(a, {});

let clone1 = { ...a };

function cloneObj(value) {
  if (typeof value !== "object") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(cloneObj);
  }

  let enter = Object.entries(value);
  return enter.reduce((acc, [key, value]) => {
    acc[key] = cloneObj(value);
    return acc;
  }, {});
}

console.log(cloneObj(a));
