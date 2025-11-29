import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {App} from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
 <Provider store={store}>
   <App />
 </Provider>
);