// v3
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
      children,
    },
  }
}

const textVNode = createTextVNode("app")
const VNode = createElementVNode("div", { id: "app" }, textVNode)

const app = document.createElement(VNode.type)
app.id = VNode.props.id
document.getElementById("root").appendChild(app)

const textEL = document.createTextNode("")
textEL.nodeValue = textVNode.props.nodeValue
app.appendChild(textEL)
