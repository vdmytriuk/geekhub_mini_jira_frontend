import {createRoot} from "react-dom/client";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import {store} from "./store/store";

import App from "./App";

import "./index.scss";


const root = createRoot(document.querySelector('#root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);