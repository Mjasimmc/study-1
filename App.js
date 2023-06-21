const heading = React.createElement('h1',{},"nohtinh")
const heading2 = React.createElement('h1',{},"nothging")

const container = React.createElement("div",{},[heading,heading2])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(container)