import { Header } from "../components/layout/Header"
import { Hero } from "../components/layout/Hero"
import { About } from "../components/layout/About"
import { Cursos } from "../components/layout/Cursos"
import { Projects } from "../components/layout/Projects"
import { Footer } from "../components/layout/Footer"


function App() {
  return (
    <div className="bg-black font-sans font-pixel">
      <Header />
      <Hero />
      <div className="bg-dark">
        <div className="container mx-auto p-5">
          <About />
          <Cursos />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
