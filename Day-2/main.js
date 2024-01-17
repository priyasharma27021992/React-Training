// const heading = React.createElement("h1", {}, "Hello from React world peeps!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello from React world peeps!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("div", { id: "heading" }, "I am h1")
//   )
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I am h1"),
    React.createElement("h2", { id: "heading2" }, "I am h2"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
