

const ProjectsComponent = () => {

    return <>

        <section className="w-full flex flex-col justify-center 
        items-center mt-20 pb-20 bg-blue-800">

            <h2 className="text-4xl m-20 font-black text-white">PROYECTOS</h2>

            <div className="w-[65%] flex flex-col gap-5">
                <a href="https://pokemon-project-pied.vercel.app/">
                    <div className="group relative flex gap-10 p-10 bg-gray-800 rounded-2xl 
                        hover:cursor-pointer border-2 border-transparent hover:scale-102 
                        transition-all duration-300 ease-in-out hover:bg-red-700">
                        <img
                        className="w-full h-60 rounded-xl group-hover:opacity-0 transition-all duration-300 ease-in-out" 
                        src="../public/assets/pokemon.png" alt="" />
                        <div className="flex flex-col justify-between gap-6 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                            <h3 className="text-2xl font-bold text-blue-800">POKEMON DATABASE</h3>
                            <p className="text-white">Plataforma interactiva que integra múltiples APIs para ofrecer la experiencia más 
                                completa sobre cada Pokémon, optimizando el uso de datos.</p>
                            <div className="w-[100%] flex justify-around bg-blue-500 rounded-3xl p-4">
                                <img
                                className="h-12 group-hover:opacity-0 transition-all duration-300 ease-in-out"   
                                src="../public/assets/angular.png" alt="" />
                            </div>
                        </div>
                        <div className="absolute flex flex-col inset-0 justify-center items-center 
                            opacity-0 group-hover:opacity-100 z-20 gap-8">
                                <div>
                                    <img
                                    className="h-16 transition-all duration-300 ease-in-out"   
                                    src="../public/assets/angular.png" alt="" />
                                </div>
                                <a href="https://pokemon-project-pied.vercel.app/"
                                className="text-white font-bold bg-blue-800 rounded-xl p-5 
                                hover:bg-blue-900 hover:scale-105 transition-all duration-200">
                                Dale click para visitar el proyecto
                                </a>
                        </div>
                    </div>
                    
                </a>
                <a href="https://inventary-frontend-tawny.vercel.app/">
                    <div className="group relative flex gap-10 p-10 bg-gray-800 rounded-2xl hover:cursor-pointer 
                                    hover:bg-gradient-to-tr from-red-700 via-blue-800 to-cyan-700 hover:scale-102 
                                    transition-all duration-300 ease-in-out">
                        <img
                        className="w-full h-60 rounded-xl group-hover:opacity-0 transition-all duration-300 ease-in-out" 
                        src="../public/assets/inventary.png" alt="" />
                        <div className="flex flex-col justify-between gap-6 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                            <h3 className="text-2xl font-bold text-blue-800">SISTEMA INVENTARIO</h3>
                            <p className="text-white">Un sistema sólido y eficiente que gestiona el inventario con endpoints seguros y transacciones controladas, 
                                garantizando precisión y confianza.</p>
                            <div className="w-[100%] flex justify-around bg-blue-500 rounded-3xl p-4">
                                <img
                                className="h-12 group-hover:opacity-0 transition-all duration-300 ease-in-out"   
                                src="../public/assets/React.webp" alt="" />
                                <img 
                                className="h-12 group-hover:opacity-0 transition-all duration-300 ease-in-out"
                                src="../public/assets/nest.png" alt="" />
                            </div>
                        </div>
                        <div className="absolute flex flex-col inset-0 justify-center items-center opacity-0 
                                        group-hover:opacity-100 z-20 gap-8">
                            <div className="flex gap-10">
                                <img
                                    className="h-12 transition-all duration-300 ease-in-out"   
                                    src="../public/assets/React.webp" alt="" />
                                    <img 
                                    className="h-12 transition-all duration-300 ease-in-out"
                                    src="../public/assets/nest.png" alt="" />
                            </div>
                            <a href="https://inventary-frontend-tawny.vercel.app/"
                            className="text-white font-bold bg-blue-800 rounded-xl p-5 
                            hover:bg-blue-900 hover:scale-105 transition-all duration-200">
                                Dale click para visitar el proyecto
                            </a>
                        </div>
                    </div>
                </a>
                <a href="https://essentialproject.com.co/">
                    <div className="group relative flex gap-10 p-10 bg-gray-800 rounded-2xl 
                    hover:cursor-pointer hover:bg-gradient-to-tr from-sky-700 via-sky-500 to-blue-800 hover:scale-102 transition-all duration-300 ease-in-out">
                        <img
                        className="w-full h-60 rounded-xl group-hover:opacity-0 transition-all duration-300 ease-in-out" 
                        src="../public/assets/Essential.png" alt="" />
                        <div className="flex flex-col justify-between gap-6 group-hover:opacity-0 transition-all duration-300 ease-in-out">
                            <h3 className="text-2xl font-extrabold text-blue-800">ESSENTIAL PROJECT</h3>
                            <p className="text-white">Creación de un sitio web en WordPress con un diseño atractivo y funcional, enfocado 
                                en ofrecer una experiencia fluida, impactante y efectiva.</p>
                            <div className="w-[100%] flex justify-around bg-blue-500 rounded-3xl p-4">
                                <img
                                className="h-14 group-hover:opacity-0 transition-all duration-300 ease-in-out"   
                                src="../public/assets/wordpress.png" alt="" />
                            </div>
                        </div>
                        <div className="absolute flex flex-col inset-0 justify-center items-center opacity-0 
                        group-hover:opacity-100 z-20 gap-8">
                                <img
                                className="h-18 transition-all duration-300 ease-in-out"   
                                src="../public/assets/wordpress.png" alt="" />
                                <a href="https://essentialproject.com.co/"
                                    className="text-white font-bold bg-blue-800 rounded-xl p-5 
                                hover:bg-blue-900 hover:scale-105 transition-all duration-200">
                                    Dale click para visitar el proyecto
                                </a>
                        </div>
                        
                    </div>
                </a>  
            </div>
        </section>
    
    </>

}


export default ProjectsComponent