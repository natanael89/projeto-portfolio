

export const About = () => {
    return (
        <section id="sobre" className=" text-white mt-5 p-5  h-screen w-full flex items-center justify-center">
            <div className="container mx-auto">
                <div className="flex flex-col">
                    <h2 className="text-5xl text-neon">Sobre</h2>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <img src="https://mustafagunaydin.dev/images/dev.gif" alt="ilustração" 
                        className="w-64"
                        />
                        <div className="flex flex-col gap-4">
                            <p className="text-sm max-w-xl">
                                Olá, meu nome é <strong>Natanael Carvalho</strong>, sou um desenvolvedor web apaixonado por tecnologia e inovação. 
                                Com uma paixão pela criação de aplicações web modernas e intuitivas, 
                                tenho o prazer de trabalhar em projetos desafiadores e emocionantes.
                            </p>
                            <p className="text-sm max-w-xl">
                                Meu objetivo principal é criar soluções digitais que impulsionem a inovação e a satisfação dos usuários.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}