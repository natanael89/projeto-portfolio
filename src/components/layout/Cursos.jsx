import { CardCursos } from "./../utils/CardCursos";

export const Cursos = () => {

    return (
        <section id="cursos"  className=" text-white p-5 w-full flex flex-col items-center">
            <h2  className="text-5xl text-center mb-3 text-neon">Cursos</h2>
            <div className="flex flex-col items-center gap-8">
                <img src="https://www.bdigital.co.nz/wp-content/uploads/2019/07/Graphic-workstation.gif" alt="ilustração" className="w-64" />
                <div className="grid md:grid-cols-2 gap-4">
                    <CardCursos
                        title="React"
                        description="Projeto desenvolvido para o curso de React do DevFlix"
                        img="https://user-images.githubusercontent.com/97989643/220242520-78dd8232-4416-461a-a8f1-6c0b3f5f357f.gif"
                    />
                    <CardCursos
                        title="NodeJS"
                        description="Projeto desenvolvido para o curso de React do DevFlix"
                        img="https://miro.medium.com/v2/resize:fit:1000/1*LGNLwf-3dknhu1mMalKDJQ.gif"
                    />
                </div>
            </div>
        </section>
    )
}