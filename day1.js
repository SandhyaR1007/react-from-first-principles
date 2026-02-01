function createElement(type, props, ...children) {
  // creates description of UI
  return {
    type,
    props: {
      ...(props || {}),
      children: children.map((child) => {
        return typeof child === "object" ? child : createTextNode(child);
      }),
    },
  };
}
function createTextNode(text) {
  return { type: "TEXT_NODE", nodeValue: text, children: [] };
}

const myElement = createElement(
  "div",
  { id: "foo" },
  createElement("a", null, "bar"),
  "Hello",
);

console.log(myElement);
