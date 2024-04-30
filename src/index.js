import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
// These lines import the necessary modules. `React` is imported from the `react` package,
//  `ReactDOM` is imported from the `react-dom/client` module, and the `App` component is imported from the local file `./App`.

const root = ReactDOM.createRoot(document.getElementById("root"));
// This line creates a root React DOM node using `ReactDOM.createRoot()`. It takes an element where the root component will be rendered.
//  In this case, it uses `document.getElementById("root")` to find the element with the id "root" in the HTML document.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
// This line renders the `App` component into the root React DOM node. The component is wrapped in `React.StrictMode`, 
// which is a tool for highlighting potential problems in the application. It does not render any visible UI itself and does not affect the behavior of the application in production.
