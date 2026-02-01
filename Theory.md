# React from First Principles

- **Host Trees**: UI representation of the host/client environment. Can be DOM tree, iOS hierarchy, etc.
- React is used to manipulate these complex host trees with respect to some external events.
- React bets on two principles:
  1. **Stability**: The host tree should be stable. It should not be that on changing an input, it tears down the whole tree to rebuild a new one.
  2. **Regularity**: The UI can be broken down into consistent patterns like buttons, avatars, etc.
- **Host Instances**: The nodes of host trees. The environment provides APIs to manipulate these host instances, and React uses those APIs.
- **Renderers**: These teach React how to talk to the host environment. React DOM, React Native, Ink, etc. These work in two modes:
  1. **Mutating**: Can add, delete nodes, set attributes of nodes' children.
  2. **Persistent/Immutating**: Need to clone the tree and replace the top-level children. We have access to the previous versions of the tree.
- **React Elements**: The building block of React. JS object representation of host instances. However, not tied to one host instance.

```
<button className="blue"></button> -> JSX is just syntactic sugar
{
type: "button",
props: { className: "blue" }
}
```

- These are immutable, for any change we need to describe element tree from scratch.
- Elements are like movie frames that represent the UI at a specific point in time.
