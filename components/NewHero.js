import { useState } from 'react'

import logo from '../assets/logo.svg'


import imageOne from '../assets/cleaningImgOne.jpg'
import imageTwo from '../assets/cleaningImgTwo.jpg'
import imageThree from '../assets/cleaningImgThree.jpg'
import imageFour from '../assets/cleaningImgFour.jpg'
import imageFive from '../assets/cleaningImgFive.jpg'
import imageSix from '../assets/cleaningImgSix.jpg'
import imageEight from '../assets/cleaningImgEight.jpg'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="bg-white">

      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                        <img
                        className="h-56"
                        src={logo.src}
                        alt="Mary Cleans"
                    />
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Muito obrigado pelo seu interesse. Entraremos em contato em breve.
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
Muito obrigado pelo seu interesse.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                  >
              Verificar disponibilidade
                  </a>
                  <a href="#sobre" className="text-sm font-semibold leading-6 text-gray-900">
              Sobre nós<span aria-hidden="true">→</span>
            </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={imageFour.src}
            alt="Imagem de limpeza em Lisboa"
          />
        </div>
      </div>
    </div>
  )
}
