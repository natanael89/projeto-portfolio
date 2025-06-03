
export const CardCursos = ({title, description, img}) => {
    return (
        <div className="bg-dark border border-neon p-4 rounded-lg shadow-lg">
            <img src={img} alt="" className="w-48 object-cover"/>
            <h3 className="text-lg text-white font-pixel">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    )
}