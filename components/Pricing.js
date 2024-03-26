import { CheckIcon } from '@heroicons/react/20/solid'
import { useSpring, animated, useTrail } from 'react-spring';

const tiers = [
    {
      name: 'Basic ',
      id: 'tier-basic',
      href: 'https://api.whatsapp.com/send/?phone=351911872282&text=Ol%C3%A1%2CGostaria+de+verificar+disponibilidade+de+limpeza+no+sitio+XXXX+para+o+dia+YY%2FYY%2FYYYY&type=phone_number&app_absent=0',
      priceMonthly: '€89',
      description: 'Ideal para manutenção regular da sua casa ou pequeno escritório.',
      features: [
        '1 limpeza por mês',
        'Até 100m² de área limpa',
        'Produtos de limpeza inclusos',
        'Suporte via e-mail',
      ],
      discount: 'Desconto de 5% para assinatura trimestral',
      mostPopular: false,
    },
    {
      name: 'Standard',
      id: 'tier-standard',
      href: 'https://api.whatsapp.com/send/?phone=351911872282&text=Ol%C3%A1%2CGostaria+de+verificar+disponibilidade+de+limpeza+no+sitio+XXXX+para+o+dia+YY%2FYY%2FYYYY&type=phone_number&app_absent=0',
      priceMonthly: '€159',
      description: 'Perfeito para quem precisa de limpeza frequente e detalhada.',
      features: [
        '1 limpeza por semana',
        'Até 150m² de área limpa',
        'Produtos de limpeza ecológicos',
        'Suporte prioritário via chat',
      ],
      discount: 'Desconto de 10% para assinatura semestral',
      mostPopular: true,
    },
    {
      name: 'Premium',
      id: 'tier-premium',
      href: 'https://api.whatsapp.com/send/?phone=351911872282&text=Ol%C3%A1%2CGostaria+de+verificar+disponibilidade+de+limpeza+no+sitio+XXXX+para+o+dia+YY%2FYY%2FYYYY&type=phone_number&app_absent=0',
      priceMonthly: '€289',
      description: 'Cobertura completa e atenção exclusiva para a sua propriedade.',
      features: [
        '2 limpezas por semana',
        'Área limpa ilimitada',
        'Produtos de alta qualidade',
        'Suporte dedicado 24/7',
        'Serviços adicionais inclusos (limpeza de janelas, etc.)',
      ],
      discount: 'Desconto de 15% para assinatura anual',
      mostPopular: false,
    },
  ]
  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
      });
    
      const trail = useTrail(tiers.length, {
        from: { opacity: 0, transform: 'translate3d(0,-20px,0)' },
        to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
        config: { mass: 5, tension: 2000, friction: 200 },
      });

  return (
    <animated.div style={fade} className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base font-semibold leading-7 text-sky-500">Preço</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            O preço ideal para tua necessidade
        </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
        Descubra o melhor pacote de limpeza para sua casa ou edifício.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {trail.map((animation, index) => (
            <animated.div key={tiers[index].id} style={animation} className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10">
            <div>
                <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{tiers[index].name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tiers[index].description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">{tiers[index].priceMonthly}</span>
                <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {tiers[index].features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-sky-500" aria-hidden="true" />
                    {feature}
                    </li>
                ))}
                </ul>
            </div>
            <a
                href={tiers[index].href}
                className="mt-8 block rounded-md bg-sky-500 px-3 py-2 text-center text-sm font-semibold leading-6 text-white"
            >
                Verificar disponibilidade
            </a>
            </animated.div>
        ))}
        </div>
    </div>
    </animated.div>
  )
}
