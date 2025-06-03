
export const CardCursos = ({title, description, img}) => {
    return (
        <div className="bg-dark border border-neon p-4 rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
                <div className="flex justify-center">
                <img src={img} alt="" className="w-64 object-cover"/>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-center">
                     <h3 className="text-lg text-white font-pixel">{title}</h3>
                    </div>
                    <div className="flex justify-end">
                     <p className="text-sm text-gray-400">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}