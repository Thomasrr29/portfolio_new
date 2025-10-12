const TechonologiesComponent = () => {

    const technologies = [
        { id: 1, name: 'FastAPI', icon: 'fastapi.webp' },
        { id: 2, name: 'Supabase', icon: 'supabase.webp' },
        { id: 3, name: 'MongoDB', icon: 'mongo DB.webp' },
        { id: 4, name: 'MySQL', icon: 'mysql.webp' },
        { id: 5, name: 'NestJS', icon: 'nestjs.webp' },
        { id: 6, name: 'PostgreSQL', icon: 'postgres.webp' },
        { id: 7, name: 'Python', icon: 'python.webp' },
        { id: 8, name: 'React', icon: 'reactjs.webp' },
        { id: 9, name: 'TypeScript', icon: 'typescript.webp' },
        { id: 10, name: 'Next JS', icon: 'nextjs.webp' },
        { id: 11, name: 'Tailwind', icon: 'tailwindcss.webp' }
      ];
    
      return (
        <div className="flex justify-center items-center bg-black-main text-gray-100 py-56">
          <ul className="w-2/3 grid grid-cols-[repeat(auto-fill,minmax(128px,1fr))] gap-14 
          space-y-2 place-items-center bg-dark-blue p-12 rounded-4xl">
            {technologies.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center justify-center
                rounded-md transition-colors font-semibold"
              >
                <div className="flex flex-col items-center justify-center w-28 h-28 cursor-pointer gap-2">
                  <img
                    src={`/assets/icons/${tech.icon}`}
                    alt={`${tech.name} icon`}
                    className="max-w-full max-h-full flex-shrink-0 group-hover:scale-110 duration-500 bg-blue-200 py-2 px-2 rounded-lg"
                  />
                  <span className="w-full text-sm font-semibold text-dark-blue bg-blue-200 rounded-lg px-2">{tech.name}</span>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      );
}

export default TechonologiesComponent