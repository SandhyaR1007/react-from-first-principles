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
  return { type: "TEXT_NODE", props: { nodeValue: text, children: [] } };
}

function render(element, container) {
  const dom =
    element.type === "TEXT_NODE"
      ? document.createTextNode(element.props.nodeValue ?? "")
      : document.createElement(element.type);

  // assign props;
  const isProp = (key) => key !== "children";
  element.props &&
    Object.keys(element.props)
      .filter(isProp)
      .forEach((attr) => {
        dom[attr] = element.props[attr];
      });

  if (element?.props?.children.length) {
    element.props.children.forEach((child) => {
      render(child, dom);
    });
  }

  container.appendChild(dom);
}

export { createElement, render };
