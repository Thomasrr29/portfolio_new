const TechonologiesComponent = () => {

    const technologies = [
        { id: 1, name: 'FastAPI', icon: 'fastapi.webp' },
        { id: 2, name: 'JavaScript', icon: 'javascript.webp' },
        { id: 3, name: 'MongoDB', icon: 'mongo DB.webp' },
        { id: 4, name: 'MySQL', icon: 'mysql.webp' },
        { id: 5, name: 'NestJS', icon: 'nestjs.webp' },
        { id: 6, name: 'PostgreSQL', icon: 'postgres.webp' },
        { id: 7, name: 'Python', icon: 'python.webp' },
        { id: 8, name: 'React', icon: 'reactjs.webp' },
        { id: 9, name: 'TypeScript', icon: 'typescript.webp' },
        { id: 10, name: 'Wordpress', icon: 'wordpress.webp' },
        { id: 11, name: 'Tailwind', icon: 'tailwindcss.webp' }
      ];
    
      return (
        <div className="flex justify-center items-center bg-black-main text-gray-100 py-56">
          <ul className="w-2/3 grid grid-cols-[repeat(auto-fill,minmax(128px,1fr))] gap-14 
          space-y-2 place-items-center bg-dark-blue p-12 rounded-4xl">
            {technologies.map((tech) => (
              <li
                key={tech.id}
                className="flex items-center p-2 hover:bg-blue-white hover:text-gray-800 
                rounded-md transition-colors font-semibold group"
              >
                <div className="flex flex-col items-center justify-center w-28 h-28 p-6 cursor-pointer gap-8">
                  <img
                    src={`/assets/icons/${tech.icon}`}
                    alt={`${tech.name} icon`}
                    className="max-w-full max-h-full flex-shrink-0 group-hover:scale-110 duration-500"
                  />
                  <span className="text-sm font-semibold text-dark-blue bg-blue-white rounded-4xl px-2">{tech.name}</span>
                </div>
                
              </li>
            ))}
          </ul>
        </div>
      );
}

export default TechonologiesComponent