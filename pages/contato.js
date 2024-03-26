import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

import Pricing from '../components/Pricing'
import NewHero from '../components/NewHero'
import Footer from '../components/Footer'

import imageTwo from '../assets/cleaningImgTwo.jpg'
import BotaoWhatsApp from '@/components/BotaoWhatsApp'


const navigation = [
  { name: 'Sobre Nós', href: '#' },
  { name: 'Serviços', href: '#' },
  { name: 'Depoimentos', href: '#' },
  { name: 'Contato', href: '#' },
]

const stats = [
  { label: 'Faxinas realizadas por dia', value: '500+' },
  { label: 'Clientes satisfeitos', value: '10,000+' },
  { label: 'Equipe de limpeza', value: '200 profissionais' },
]

const values = [
  {
    name: 'Excelência no Serviço',
    description:
      'Nos dedicamos a oferecer o melhor serviço de limpeza, com atenção aos detalhes e compromisso com a satisfação do cliente. Acreditamos que um ambiente limpo contribui para uma vida mais saudável e produtiva.',
  },
  {
    name: 'Confiança e Segurança',
    description:
      'Nossa equipe é rigorosamente selecionada e treinada para garantir a segurança e tranquilidade de nossos clientes. Respeitamos sua privacidade e seu espaço, trabalhando com discrição e eficiência.',
  },
  {
    name: 'Flexibilidade',
    description:
      'Entendemos as diferentes necessidades de nossos clientes e oferecemos serviços personalizados, disponíveis 24/7, para se adequar à sua rotina e preferências.',
  },
  {
    name: 'Compromisso Ambiental',
    description:
      'Utilizamos produtos de limpeza ecológicos e práticas sustentáveis para minimizar o impacto ambiental de nossos serviços, cuidando do seu espaço e do planeta.',
  },
  {
    name: 'Atendimento ao Cliente',
    description:
      'Nossa equipe de suporte está sempre pronta para ajudar, oferecendo um atendimento rápido e eficaz para resolver qualquer questão ou receber feedbacks, garantindo a melhor experiência possível.',
  },
]

const team = [
  {
    name: 'Maria Silva',
    role: 'Fundadora e CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  // Mais membros da equipe...
]

const blogPosts = [
  {
    id: 1,
    title: '5 Dicas para Manter sua Casa Limpa com Facilidade',
    href: '#',
    description:
      'Descubra como manter sua casa impecável com algumas dicas simples e eficazes que facilitarão sua rotina de limpeza.',
    imageUrl:
      'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
    date: '16 Mar, 2023',
    datetime: '2023-03-16',
    author: {
      name: 'Equipe MaryCleans',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // Mais posts...
]

const footerNavigation = {
  main: [
    { name: 'Sobre Nós', href: '#' },
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Serviço', href: '#' },
    { name: 'Contato', href: '#' },
  ],
  social: [
    // Ícones de redes sociais...
  ],
}


export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
    <NewHero/>
    <div className="bg-white">
      <main className="isolate">
        {/* Content section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mx-auto -mt-12 py-32 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8"
          id='sobre'
        >
        <div className="mx-auto -mt-12 py-32 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8" id='sobre'>
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simples, Confiável, Limpo.</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl leading-8 text-gray-600">
                Esqueça o incômodo de encontrar uma faxineira de confiança e deixe que a MaryCleans cuide de tudo para você. Nossa equipe de profissionais treinados está pronta para atender às suas necessidades com eficiência, qualidade e aquele toque pessoal que faz toda a diferença.
                </p>
                <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl py-4">Flexibilidade para Seu Estilo de Vida.</h2>
                  <p>
                  Compreendemos que sua vida é movimentada. Por isso, oferecemos flexibilidade total em nossos agendamentos, com disponibilidade 24 horas por dia, 7 dias por semana. Seja após uma festa ou antes de um evento importante, estamos aqui para garantir que seu local esteja no seu melhor estado.
                  </p>
                </div>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
        </motion.div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <motion.img
        src={imageTwo.src}
        alt="Limpeza disponivel"
        className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
        </div>
        <BotaoWhatsApp/>
        <Pricing/>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reserve Hoje e Descubra a Diferença MaryCleans.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Entre em contato conosco agora mesmo e marque sua próxima limpeza. Descanse enquanto transformamos seu espaço em um ambiente limpo e acolhedor onde você pode relaxar e viver o melhor da vida.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name}>
                <dt className="font-semibold text-gray-900">{value.name}</dt>
                <dd className="mt-1 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo cloud */}
        <div className="relative isolate -z-10 mt-32 sm:mt-48">
          <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg className="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width={200}
                  height={200}
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />
              </svg>
              <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Já confiam no nosso trabalho 
           </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
    {/* Footer */}
    <Footer/>
  </>
  )
}
