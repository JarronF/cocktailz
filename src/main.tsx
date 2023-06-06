import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./main.css";

const routerBase = `${import.meta.env.VITE_BASEURL}`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={routerBase}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
