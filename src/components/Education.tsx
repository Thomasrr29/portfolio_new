import { certificates } from "../data/certificates/certificates"
import Carousel from "./carousel"

const EducationComponent = () => {
    return <section className="w-full h-[800px] lg:h-[1200px] flex flex-col justify-center items-center py-10 bg-black-main">
            <h3 className="text-4xl text-white font-black bg-dark-blue p-4 rounded-4xl">EDUCACIÓN</h3>
            <Carousel slides={certificates} autoPlay={true} autoPlayInterval={6000}/>
        </section>
    
}

export default EducationComponent