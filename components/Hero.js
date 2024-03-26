import imageOne from '../assets/cleaningImgOne.jpg'
import imageTwo from '../assets/cleaningImgTwo.jpg'
import imageThree from '../assets/cleaningImgThree.jpg'
import imageFour from '../assets/cleaningImgFour.jpg'
import imageFive from '../assets/cleaningImgFive.jpg'
import imageSix from '../assets/cleaningImgSix.jpg'
import imageEight from '../assets/cleaningImgEight.jpg'

import React from 'react';
import { useSpring, animated, useTrail } from 'react-spring';

import logo from '../assets/logo.svg';


export default function Example() {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slide = useSpring({
    from: { transform: 'translate3d(0,-40px,0)' },
    to: { transform: 'translate3d(0,0px,0)' },
    config: { tension: 220, friction: 120 },
  });

  const links = [
    { name: 'Verificar disponibilidade', href: '#' },
    { name: 'Sobre nós', href: '#sobre' },
  ];

  const trail = useTrail(links.length, {
    from: { opacity: 0, transform: 'translate3d(0,20px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
  });

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            {/* Omitido SVG para foco nas animações */}
            <div className="relative px-6 sm:py-40 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <animated.img
                  style={fade}
                  className="h-56"
                  src={logo.src}
                  alt="Mary Cleans"
                />
                <animated.h1 style={slide} className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Limpeza profissional feita para sua necessidade.
                </animated.h1>
                <animated.p style={fade} className="mt-6 text-lg leading-8 text-gray-600">
                  Somos uma equipe de profissionais de limpeza to-go. Você pede e nós entregamos.
                </animated.p>
                <div className="mt-10 flex items-center gap-x-6">
                  {trail.map((props, index) => (
                    <animated.a
                      key={links[index].name}
                      style={props}
                      href={links[index].href}
                      className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
                    >
                      {links[index].name}
                    </animated.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <animated.img
            style={fade}
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full my-16"
            src={imageFour.src}
            alt="Imagem de limpeza em Lisboa"
          />
        </div>
      </div>
    </div>
  );
}
