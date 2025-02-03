


const EducationComponent = () => {
    return <section className="w-full flex flex-col justify-center items-center pt-10 mt-20 bg-blue-800">
            <h3 className="text-4xl text-white font-black ">EDUCACIÓN</h3>
            <div className="grid grid-cols-2">
                <div className="group hover:cursor-pointer w-full flex justify-center items-center
                bg-gradient-to-bl from-blue-800 via-blue-800 to-purple-800 p-10">
                    <img src="./src/assets/certificado_riwi.png" className="w-[60%] group-hover:scale-105 transition-all duration-200 ease-in-out" alt="" />
                </div>
                <div className="group hover:cursor-pointer w-full flex justify-center items-center 
                bg-gradient-to-br from-blue-800 via-blue-800 to-green-600 p-10">
                    <img src="./src/assets/programacion.png" className="w-[60%] group-hover:scale-105 transition-all duration-200 ease-in-out" alt="" />
                </div>
            </div>
            
        </section>
    
}

export default EducationComponent