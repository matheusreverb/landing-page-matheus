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
    path: "/", 
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "projects",
        element: <Projects />
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

