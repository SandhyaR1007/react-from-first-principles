import { createElement, render } from "./utility.js";

// Our custom React
const Acter = { createElement, render };

function generateBigTree(depth = 0) {
  if (depth > 1650) return "End";

  return Acter.createElement(
    "div",
    { style: "padding-left: 5px; border-left: 1px solid #ccc;" },
    `Node ${depth}`,
    // Recursively create children
    // (In a real app, this would be a list of items, but nesting works best to show stack depth)
    Acter.createElement("span", null, " -> "),
    generateBigTree(depth + 1),
  );
}
function updateApp(value = "") {
  const element = Acter.createElement(
    "div",
    null,
    Acter.createElement("h1", null, `Current value: ${value}`),
    Acter.createElement("input", {
      id: "input",
      value,
      oninput: (e) => updateApp(e.target.value),
      placeholder: "Type something",
    }),
    Acter.createElement("p", null, "Test"),
  );
  const container = document.body;
  container.innerHTML = "";
  Acter.render(element, container);
}

document.addEventListener("DOMContentLoaded", () => {
  updateApp();
});
