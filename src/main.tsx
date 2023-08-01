import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles.css"
import App from "./App";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Projects from "./routes/Projects";
import Home from "./routes/Home";

const routes = createBrowserRouter([
  {
    path: "/landing-page-matheus/home", 
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "projects",
        element: <Projects />
      },
      {
        path: "about"
      }
    ]
  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
  document.getElementById("root")
);

