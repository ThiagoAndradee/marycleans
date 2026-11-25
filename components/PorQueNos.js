const RAZOES = [
  {
    titulo: "É sempre a mesma equipa",
    texto:
      "Trabalhamos em dupla, e é a mesma dupla em todas as visitas. A equipa aprende a casa: onde ficam as chaves, como se fecha o estore, o que o cliente não quer que se mexa. Equipa que roda recomeça do zero em cada visita.",
  },
  {
    titulo: "A responsável vai",
    texto:
      "Quem responde pelo trabalho é quem o faz. Não há intermediário entre o cliente e a pessoa que limpou o imóvel.",
  },
  {
    titulo: "Contacto direto, sem central de atendimento",
    texto:
      "O cliente tem o número direto. Um problema no dia de uma virada resolve-se numa chamada, não num pedido de assistência.",
  },
  {
    titulo: "Relatório fotográfico em cada limpeza",
    texto:
      "As divisões limpas, a roupa de cama trocada, o que foi reposto, e o que encontrámos que precisa de atenção. Quem tem vários imóveis não os visita depois de cada hóspede, e o relatório substitui a visita.",
  },
  {
    titulo: "Preço fechado por imóvel, não por hora",
    texto:
      "O cliente sabe quanto custa cada limpeza antes de ela acontecer. O tempo que o serviço leva é risco nosso, não uma variável na fatura dele.",
  },
  {
    titulo: "Produtos e equipamento incluídos",
    texto:
      "Levamos o material. Não é preciso ter nada em casa nem repor stock de produto de limpeza.",
  },
];

export default function PorQueNos() {
  return (
    <section className="border-t border-tinta-200 bg-tinta-50">
      <div className="secao secao-espaco">
        <h2 className="etiqueta-secao">Porque nos escolhem</h2>
        <p className="mt-3 max-w-leitura text-titulo-2">
          Somos uma empresa pequena. É isso que faz a diferença.
        </p>
        <p className="prosa mt-4">
          <span>
            Uma rede nacional envia quem está disponível naquele dia. Nós não temos essa
            flexibilidade, e por isso oferecemos a única coisa que uma rede não consegue
            prometer: continuidade.
          </span>
        </p>

        <dl className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {RAZOES.map((r) => (
            <div key={r.titulo}>
              <dt className="text-titulo-3 text-tinta-900">{r.titulo}</dt>
              <dd className="mt-2 text-sm leading-6 text-tinta-600">{r.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
