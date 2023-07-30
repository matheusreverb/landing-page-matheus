import { useState } from "react";
import logo from "./logo.svg";
import poweredBy from "./powered-by-vitawind-dark.png";
import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Outlet />
    </>  
  );
}

export default App;
