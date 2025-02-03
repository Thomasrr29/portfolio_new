/**/
const AboutMeComponent = () => {

    return <div className="flex flex-col justify-center items-center">
        <div className="w-screen flex justify-center">
            <p className="w-2xl text-white">
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
        <a href="https://github.com/Thomasrr29">
            <img src="./src/assets/image.webp" className="h-10 w-10 mt-8 hover:cursor-pointer hover:scale-105" alt="" />
        </a>
    </div>
}

export default AboutMeComponent