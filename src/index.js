import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import configureStore from "./store/store.js"
import App from "./App"

let initialState = {
  text: "",
  items: ["Redux", "Rebass", "Webpack"],
  counter: 3,
}

const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)
