import Footer from "./components/Footer"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Home from "./sections/Home"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"

const App = () => {
  return (
    <div className=" bg-[url(./assets/images/bg.jpg)] bg-cover  text-white">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App