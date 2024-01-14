// v2
const textVNode = {
  type: "TEXT_ELEMENT",
  props: {
    nodeValue: "app",
    children: [],
  },
}

const VNode = {
  type: "div",
  props: {
    id: "app",
    children: [textVNode],
  },
}

const app = document.createElement(VNode.type)
app.id = VNode.props.id
document.getElementById("root").appendChild(app)

const textEL = document.createTextNode("")
textEL.nodeValue = textVNode.props.nodeValue
app.appendChild(textEL)
