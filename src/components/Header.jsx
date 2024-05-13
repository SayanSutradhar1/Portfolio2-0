import Hamburger from "hamburger-react"
import { useState } from "react";
import SideBar from "./SideBar";

const Header = () => {
    const [isOpen, setOpen] = useState(true);
  return (
    <header className=" flex justify-between px-32 max-[850px]:px-10 py-4 sticky top-0 backdrop-blur-md items-center z-10 text-orange-400">
        <h1 className="text-2xl">Portfolio</h1>
        <nav className="flex gap-8 text-xl max-[850px]:hidden">
            <a href="#">Home</a>
            <a href="#about">About</a>
            <a href="#mySkills">Skills</a>
            <a href="#myProjects">Projects</a>
        </nav>
        <a href="#contact" className="text-2xl max-[850px]:hidden">
            Contact Me
        </a>
        <span className={`min-[850px]:hidden right-6`}>
            <Hamburger toggled={isOpen} toggle={setOpen} color={"black"} />
            {/* {
                isOpen && <SideBar/>
            } */}
        </span>
    </header>
  )
}

export default Header