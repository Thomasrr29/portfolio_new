/**/
const AboutMeComponent = () => {

    return <div className="flex flex-col justify-center items-center py-20">
        <div className="w-screen flex justify-center">
            <p className="w-[80%] text-white text-sm lg:w-2xl xl:w-2xl">
            Me encanta la tecnología, aprender cosas nuevas y encontrar mejores maneras de hacer las cosas. 
            Disfruto los retos, optimizo procesos y siempre busco soluciones que realmente hagan la diferencia. 
            <br></br>
            <br></br>

            Me motiva crear proyectos con propósito, trabajar con personas que tienen visión 
            y seguir evolucionando en el camino. Para mí, cada línea de código es una oportunidad para mejorar, 
            innovar y aportar valor.
            <br></br>
            <br></br>

            Siempre estoy en movimiento, explorando, aprendiendo y listo para lo que viene.
            </p>
        </div>
        <div className="flex gap-16">
            <a href="https://github.com/Thomasrr29?tab=repositories">
                <img src="/assets/icons/github.webp" className="h-8 w-8 mt-8 hover:cursor-pointer hover:scale-110 ease-in-out transition-all duration-500" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/thomasrpo/">
                <img src="/assets/icons/linkedin.webp" className="h-8 w-8 mt-8 hover:cursor-pointer hover:scale-110 ease-in-out transition-all duration-500" alt="" />
            </a>
        </div>
    </div>
}

export default AboutMeComponent