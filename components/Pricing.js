import { CheckIcon } from '@heroicons/react/20/solid'

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
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-500">Preço</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            O preço ideal para tua necessidade
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Descubra o melhor pacote de limpeza para sua casa ou edificio.
        </p>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'lg:z-10 lg:rounded-b-none' : 'lg:mt-8',
                tierIdx === 0 ? 'lg:rounded-r-none' : '',
                tierIdx === tiers.length - 1 ? 'lg:rounded-l-none' : '',
                'flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10'
              )}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular ? 'text-sky-500' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                  {tier.mostPopular ? (
                    <p className="rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-sky-500">
                      Most popular
                    </p>
                  ) : null}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.priceMonthly}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-sky-500" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-sky-500 text-white shadow-sm hover:bg-indigo-500'
                    : 'text-sky-500 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                  'mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500'
                )}
              >
                Verificar disponibilidade
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
