import Navbar from "../components/layout/Navbar"
import bgImage from "../images/download-page-bg.png"

export default function Home() {
  return(
    <div className="h-screen bg-cover bg-[200px] bg-main-image">
      <Navbar home />
      <div className="h-[90%] flex justify-start items-center">
        <div className="p-4">
          <p className="sub-title text-[40px] w-[870px]">Matheus Monteiro de Moura</p>
          <h1 className=" flex flex-col main-title text-[150px]">
            <span>FRONT END</span><span className="-mt-20">DEVELOPER</span>
          </h1>
        </div>
      </div>
    </div>
  )
}