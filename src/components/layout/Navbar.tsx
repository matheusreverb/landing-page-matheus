import { Link } from "react-router-dom";

type NavbarOptions = {
  home?: boolean
}

export default function Navbar({home}: NavbarOptions) {
  return(
    <div className={home? 'bg-transparent':'bg-white'}>
      <div className="flex max-w-7xl mx-auto justify-end py-6 bg">
        <ul className="flex w-[30%] justify-between">
          <li><Link className="navbar-font text-[22px]" to="/">Home</Link></li>
          <li><Link className="navbar-font text-[22px]" to="projects">Projects</Link></li>
          <li><Link className="navbar-font text-[22px]" to="about-me">About me</Link></li>
        </ul>
      </div>
    </div>
  )
}