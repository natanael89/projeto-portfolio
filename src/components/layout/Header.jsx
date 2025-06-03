import { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes, FaDownload } from "react-icons/fa";

export const Header = () => {
    const [open, setOpen] = useState(false)

    const handleLinkClick = () => {
        setOpen(false)
    }

    return (
        <header id="home" className="fixed top-0 left-0 w-full bg-dark text-white z-50 shadow-md">
            <div className="flex justify-between items-center px-4 py-3 container mx-auto"> 

                <div className="text-white text-xl md:hidden" onClick={() => setOpen(!open)}>
                     {open ? <FaTimes/> : <FaBars/>}
                </div>
                <h1 className="text-neon text-lg">{'<{[DevFlix]}>'}</h1>

                <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-dark md:bg-transparent flex-col md:flex-row gap-4 px-4 py-4 md:p-0 font-pixel text-white transition-all duration-300 ${
            open ? 'flex' : 'hidden'
          } md:flex`}>
                    <div className="flex flex-col md:flex-row gap-4">
                        <a href="#home" onClick={handleLinkClick} className="hover:text-neon">Home</a>
                        <a href="#sobre" onClick={handleLinkClick} className="hover:text-neon">Sobre</a>
                        <a href="#cursos" onClick={handleLinkClick} className="hover:text-neon">Cursos</a>
                        <a href="#sites" onClick={handleLinkClick} className="hover:text-neon">Sites</a>
                        <a 
                        href="/public/curriculo_de_programador.pdf" 
                        download 
                        onClick={handleLinkClick} 
                        className="hover:text-neon flex gap-2">
                            Curriculo
                            <FaDownload/>
                        </a>
                    </div>
                </nav>
                    
                <div className="flex space-x-2">
                    <a href="https://www.linkedin.com/in/natanael-carvalho-santos/" target="_blank" className="text-blue-400"><FaLinkedin/></a>
                    <a href="https://github.com/natanael89" target="_blank" className="text-blue-400"><FaGithub/></a>
                </div>
            </div>
        </header>
    );
}