export default function AboutSection() {
  return (
    <section className="py-16 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Sobre a GHMS
          </h2>
          <div className="w-16 h-1 bg-zinc-300 dark:bg-zinc-700 mx-auto" />
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
              Visão Geral
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A GHMS é uma empresa de consultoria em tecnologia especializada em
              desenvolver soluções inovadoras para desafios complexos. Com expertise
              em diversas tecnologias modernas, entregamos projetos que transformam
              a maneira como empresas operam e se conectam com seus clientes.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
              Nossa Missão
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Nossa missão é impulsionar a transformação digital de empresas através
              de soluções tecnológicas de alto impacto, combinando inovação, qualidade
              e compromisso com resultados concretos para nossos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
