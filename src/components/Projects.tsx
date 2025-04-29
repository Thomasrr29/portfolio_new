

const ProjectsComponent = () => {


    const projects = [
        {
          "name": "POKEMON DATABASE",
          "description": "Plataforma interactiva que integra múltiples APIs para ofrecer la experiencia más completa sobre cada Pokémon, optimizando el uso de datos.",
          "technologies": ["reactjs"],
          "abilities": ["Integración de APIs", "Optimización de datos", "Manejo de estados", "Tipado"],
          "github_url": "https://github.com/Thomasrr29/pokemon_project",
          "deploy_url": "https://pokemon-project-pied.vercel.app/",
          "project_img": "pokemon.webp" 
        },
        {
          "name": "SISTEMA INVENTARIO",
          "description": "Un sistema sólido y eficiente que gestiona el inventario con endpoints seguros y transacciones controladas, garantizando precisión y confianza.",
          "technologies": ["reactjs", "nestjs"],
          "abilities": ["Seguridad endpoints", "Transacciones controladas", "Emisión eventos", "Arquitectura Base de datos"],
          "github_url": "https://github.com/Thomasrr29/Inventary_project",
          "deploy_url": "https://inventary-frontend-tawny.vercel.app/",
          "project_img": "inventary.webp" 
        },
        {
          "name": "API SISTEMA DE FIDELIZACIÓN",
          "description": "Un sistema pensado en manejar la fidelización de clientes por medio de un sistema de puntos con posibilidades de escalar hacia otras bonificaciones y monedas",
          "technologies": ["reactjs", "fastapi"],
          "abilities": ["Construcción API", "Pattern Strategy", "Transacción base de datos", "Arquitectura base de datos"],
          "github_url": "https://github.com/Thomasrr29/affiliate_system.git",
          "deploy_url": "",
          "project_img": "git_affiliate.webp"
        },
        {
          "name": "BODEGA",
          "description": "Sistema de bodega con manejo de inicio de sesión, aplicando autenticación con JWT Token",
          "technologies": ["reactjs", "nestjs"],
          "abilities": ["JWT Authentication", "Gestión de inventario"],
          "github_url": "https://github.com/AXrodriguezQ/bodega/tree/dev",
          "deploy_url": "",
          "project_img": "inventary.webp"
        }
      ];

    return <>

        <section className="w-full flex flex-col justify-center 
        items-center pb-20 bg-black-main">

            <h2 className="font-black text-4xl m-20 text-white bg-dark-blue p-4 rounded-4xl">PROYECTOS</h2>
            
            <div className="w-[65%] flex flex-col gap-5">

                    {
                        projects.map((project) => (

                            <div className="group relative flex flex-col gap-10 p-10 bg-dark-blue rounded-2xl hover:cursor-pointer 
                                    hover:bg-gradient-to-tr hover:scale-102 
                                    transition-all duration-300 ease-in-out lg:flex-row xl:flex-row">
                                <img
                                className="w-auto h-60 rounded-xl group-hover:opacity-0 transition-all duration-300 
                                ease-in-out object-cover" 
                                src={`/assets/projects/${project.project_img}`} alt="" />
                                <div className="flex flex-col justify-between gap-6 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                                    <h3 className="text-2xl font-bold text-blue-white">{project.name}</h3>
                                    <p className="text-white">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-white rounded-lg p-1 opacity-80 font-semibold text-sm">{project.abilities[0]}</span>
                                        <span className="bg-blue-white rounded-lg p-1 opacity-80 font-semibold text-sm">{project.abilities[1]}</span>
                                        <span className="bg-blue-white rounded-lg p-1 opacity-80 font-semibold text-sm">{project.abilities[2]}</span>
                                        <span className="bg-blue-white rounded-lg p-1 opacity-80 font-semibold text-sm">{project.abilities[3]}</span>
                                    </div>
                                    <div className="w-[100%] flex flex-col justify-center items-center gap-6 rounded-3xl p-4">
                                        <div className="flex gap-6">
                                            <img
                                            className="h-12 group-hover:opacity-0 transition-all duration-300 ease-in-out"   
                                            src={`/assets/icons/${project.technologies[0]}.webp`} alt="" />
                                            <img className={`h-12 group-hover:opacity-0 transition-all duration-300 ease-in-out ${
                                                project.technologies[1] ? "inline-block": "hidden"
                                            }`}
                                            src={`/assets/icons/${project.technologies[1]}.webp`} alt="" />
                                        </div>
                                        <div className="flex gap-6">
                                            <a href={project.github_url}
                                            className="text-white font-bold bg-blue-medium rounded-xl py-2 px-4  
                                            hover:bg-blue-900 hover:scale-105 transition-all duration-200">
                                                Codigo
                                            </a>
                                            <a href={project.deploy_url}
                                            className={`text-white font-bold bg-blue-medium rounded-xl py-2 px-4  
                                            hover:bg-blue-900 hover:scale-105 transition-all duration-200 ${project.deploy_url ? "inline" : "hidden"} `}>
                                                Web
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute flex-col inset-0 justify-center items-center hidden opacity-0
                                                group-hover:opacity-100 group-hover:flex z-20 gap-8">
                                    <div className="flex gap-10">
                                        <img
                                            className="h-12 transition-all duration-300 ease-in-out"   
                                            src={`/assets/icons/${project.technologies[0]}.webp`} alt="" />
                                            <img 
                                            className={`h-12 transition-all duration-300 ease-in-out ${
                                            project.technologies[1] ? "inline-block": "hidden"}`}
                                            src={`/assets/icons/${project.technologies[1]}.webp`} alt="" />
                                    </div>
                                    <div className="flex gap-10">
                                        <a href={project.github_url}
                                        className="text-white font-bold bg-blue-medium rounded-xl py-2 px-4  
                                        hover:bg-blue-900 hover:scale-105 transition-all duration-200">
                                            Codigo
                                        </a>
                                        <a href={project.deploy_url}
                                        className={`text-white font-bold bg-blue-medium rounded-xl py-2 px-4  
                                        hover:bg-blue-900 hover:scale-105 transition-all duration-200 ${project.deploy_url ? "inline" : "hidden"} `}>
                                            Web
                                        </a>      
                                    </div>
                                </div>
                            </div> 

                        ))
                    } 
            </div>
        </section>
    
    </>

}


export default ProjectsComponent