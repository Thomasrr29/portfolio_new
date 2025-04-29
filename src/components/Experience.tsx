import { useState } from "react"
import SelectorCompanyComponent from "./SelectorCompany"


const ExperienceComponent = () => {

    interface Experience {
        id: number,
        name: string,
        image: string[],
        company: string,
        skills: string[],
        description: string,
        start: string,
        end: any
    }

    const [selectedCompany, setSelectedCompany] = useState<Experience | null >(null)

    const handleSelectedCompany = (data: Experience) => {
        setSelectedCompany(data)
    }

    return <section className="w-full bg-orange-600 pt-20 pb-20">

        <div className="w-1/2 m-auto text-center">

            <div className="w-full flex flex-col gap-20">
                <h2 className="font-extrabold text-5xl text-white">EXPERIENCE</h2>
                <SelectorCompanyComponent onSendData={handleSelectedCompany}/>
    
                    <div className="rounded overflow-hidden shadow-lg bg-white p-2 pt-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center place-items-center">
                            {
                                selectedCompany?.image.map((image) => ( 
                                    <img src={image}></img>
                                ))
                            }
                        </div>

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl">{selectedCompany?.name}</div>
                            <span className="text-sm font-semibold text-gray-500">{selectedCompany?.start} | {selectedCompany?.end ? selectedCompany?.end : "Now"}</span>
                            <p className="text-gray-700 text-base mt-10">
                                {selectedCompany?.description}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {
                                selectedCompany?.skills.map((skill) => (
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{skill}</span>
                                ))
                            }
                        </div>
                    </div>

            </div>

        </div>
    </section>

}

    



export default ExperienceComponent