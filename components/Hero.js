import logo from '../assets/logo.svg'


import imageOne from '../assets/cleaningImgOne.jpg'
import imageTwo from '../assets/cleaningImgTwo.jpg'
import imageThree from '../assets/cleaningImgThree.jpg'
import imageFour from '../assets/cleaningImgFour.jpg'
import imageFive from '../assets/cleaningImgFive.jpg'
import imageSix from '../assets/cleaningImgSix.jpg'
import imageEight from '../assets/cleaningImgEight.jpg'

import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <img
            className="h-11"
            src={logo.src}
            alt="Mary Cleans"
          />
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Limpeza profissional feita para sua necessidade.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Somos uma equipe de profissionais de limpeza to-go. Você pede e nós entregamos.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://wa.me/351911872282?text=Ol%C3%A1,Gostaria%20de%20verificar%20disponibilidade%20de%20limpeza%20no%20sitio%20XXXX%20para%20o%20dia%20YY/YY/YYYY"
              className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              Verificar disponibilidade
            </a>
            <a href="#sobre" className="text-sm font-semibold leading-6 text-gray-900">
              Sobre nós<span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <img
                src={imageFour.src}
                alt="Limpeza Lisboa"
                width={1211}
                height={724}
                className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
