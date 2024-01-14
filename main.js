// v4
function createTextVNode(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

function createElementVNode(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "string" ? createTextVNode(child) : child
      ),
    },
  }
}

function render(VNode, container) {
  const dom =
    VNode.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(VNode.type)

  Object.keys(VNode.props).forEach((key) => {
    if (key !== "children") {
      dom[key] = VNode.props[key]
    }
  })

  VNode.props.children.forEach((child) => {
    render(child, dom)
  })

  container.appendChild(dom)
}

const app = createElementVNode("div", { id: "app" }, "hello ", "world!")
render(app, document.getElementById("root"))
