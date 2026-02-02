import { createElement, render } from "./utility.js";

// Our custom React
const Acter = { createElement, render };

// A helper to generate a HUGE tree

function generateBigTree(depth = 0) {
  if (depth > 1650) return "End"; // breaks beyond this

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

document.addEventListener("DOMContentLoaded", () => {
  console.time("Render Time"); // Start timer

  const bigTree = generateBigTree(0); // Create the heavy object
  Acter.render(bigTree, document.body); // Start the recursive render

  console.timeEnd("Render Time"); // Stop timer
  console.log(
    "If you see this immediately, your browser is fast. But try interacting with the page!",
  );
});
