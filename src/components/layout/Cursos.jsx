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
                        description="Curso de React na escola Infinity School"
                        img="https://user-images.githubusercontent.com/97989643/220242520-78dd8232-4416-461a-a8f1-6c0b3f5f357f.gif"
                    />
                    <CardCursos
                        title="GitHub"
                        description="Curso de GitHub na escola OneBitCode"
                        img="https://cdn.hashnode.com/res/hashnode/image/upload/v1658567611905/kMCMR25Vh.gif"
                    />
                    <CardCursos
                        title="HTML,CSS,JS"
                        description="Curso de HTML,CSS,JS na escola Infinity School"
                        img="https://miro.medium.com/v2/resize:fit:1400/1*Jek77W1UJM-DZgpcG9nFsw.png"
                    />
                    <CardCursos
                        title="NodeJS"
                        description="Curso de NodeJS na escola OneBitCode"
                        img="https://miro.medium.com/v2/resize:fit:1000/1*LGNLwf-3dknhu1mMalKDJQ.gif"
                    />
                </div>
            </div>
        </section>
    )
}