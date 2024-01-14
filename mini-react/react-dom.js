import { render } from "./react.js"

const ReactDOM = {
  createRoot: (container) => {
    return {
      render: (VNode) => render(VNode, container),
    }
  },
}

export default ReactDOM
