'use client'

import { useEffect, useState } from 'react'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/20/solid'

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

type PropsSendData = {
  onSendData: (data: Experience) => void;
}

const experience: Experience[] = [
    {
        "id": 1,
        "name": "Tutor Kodland",
        "image": ["/assets/companies/kodland.webp", "/assets/companies/yo2.webp", "/assets/companies/kodland2.webp"],
        "company": "Kodland",
        "skills": ["Python", "Effective communication"],
        "description": "Tutor for kids on python and web design",
        "start": "19-12-2024",
        "end": false
    }
]



const SelectorCompanyComponent = ({onSendData}: PropsSendData) => {

  const [selected, setSelected] = useState<Experience>(experience[0])

  const changeAndSendDataParent = () => {
    onSendData(selected)
  }

  useEffect(() => {
    changeAndSendDataParent()
  }, [selected]) 

  return (
    <Listbox value={selected} onChange={setSelected} >
      <div className="relative mt-2 w-full m-auto font-semibold">
        <ListboxButton className="grid grid-cols-2 grid-rows-1 items-center place-items-start w-full cursor-default 
        rounded-md bg-white py-5 pr-2 pl-3 text-left text-gray-700 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <span className="flex justify-around items-center gap-3">
            <span className='flex items-center gap-2'>
                <img alt="" src={selected.image[0]} className="size-12 shrink-0 rounded-full" />
                <p className="text-xl">{selected.company}</p>
            </span>
          </span>
          
          <ChevronUpDownIcon
            aria-hidden="true"
            className="size-10 col-start-4 col-end-4 text-gray-700 "
          />
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        >
          {experience.map((job) => (
            <ListboxOption
              key={job.id}
              value={job}
              className="group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-600 data-focus:text-white data-focus:outline-hidden"
            >
              <div className="flex items-center">
                <img alt="" src={job.image[0]} className="size-5 shrink-0 rounded-full" />
                <span className="ml-3 block truncate font-normal group-data-selected:font-semibold">{job.name}</span>
              </div>
              <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-not-data-selected:hidden group-data-focus:text-white">
                <CheckIcon aria-hidden="true" className="size-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  )
}

export default SelectorCompanyComponent