

export default function CardProject({ title, description, github, site }) {
  return (
    <div className="bg-black border border-neon rounded-lg p-4 max-w-sm w-full mx-auto">
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex gap-3 text-sm">
        <a href={github} target="_blank" className="text-pink-500 hover:underline">Github</a>
        <a href={site} target="_blank" className="text-pink-500 hover:underline">Site</a>
      </div>
    </div>
  );
}

