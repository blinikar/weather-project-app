import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import { WelcomePage } from "pages/WelcomePage";
import { MapPage } from "pages/MapPage";
import { FeedbackPage } from "pages/FeedbackPage";
import { Provider } from "react-redux";
import store from "store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <Routes>
                <Route path={"/"} element={<App />}>
                    <Route index element={<WelcomePage />} />
                    <Route path={":city"} element={<WelcomePage />} />
                    <Route path={"map"} element={<MapPage />} />
                    <Route path={"feedback"} element={<FeedbackPage />} />
                </Route>
                <Route path={"*"} element={<h1>404</h1>} />
            </Routes>
        </Provider>
    </BrowserRouter>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
