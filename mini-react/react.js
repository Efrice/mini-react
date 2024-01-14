export function createTextVNode(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  }
}

export function createElementVNode(type, props, ...children) {
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

export function render(VNode, container) {
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
