import ReactDOM from "./mini-react/react-dom.js"
import { createElementVNode } from "./mini-react/react.js"

const app = createElementVNode(
  "div",
  { id: "app" },
  "hello, ",
  "mini-",
  "react"
)
ReactDOM.createRoot(document.getElementById("root")).render(app)
