const ctaItems = [
  {
    title: "Automatize seus processos",
    description:
      "Reduza tarefas manuais e ganhe eficiência com nossas soluções de automação personalizadas.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.135-1.76-.398-2.547l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: "Integre seus sistemas",
    description:
      "Conectamos todas as suas ferramentas em um fluxo unificado, eliminando retrabalho e erros.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Escolha GHMS",
    description:
      "Expertise comprovada, entrega敏捷 e suporte dedicado para impulsionar seu negócio.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.182 3.42 3.42 0 00-.63 1.335 3.42 3.42 0 01-.857 1.346 3.42 3.42 0 00-.63 1.335 3.42 3.42 0 01-1.335.638 3.42 3.42 0 00-1.335.638 3.42 3.42 0 01-1.346.857 3.42 3.42 0 00-1.335.63 3.42 3.42 0 01-1.346.857 3.42 3.42 0 00-.638 1.335 3.42 3.42 0 01-.857 1.346 3.42 3.42 0 00-.63 1.335 3.42 3.42 0 01-1.335.638 3.42 3.42 0 00-1.335.638 3.42 3.42 0 01-1.346.857 3.42 3.42 0 00-1.335.63 3.42 3.42 0 01-1.346.857 3.42 3.42 0 00-.638 1.335 3.42 3.42 0 01-.857 1.346L4.5 21.5m13.5-3.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
        />
      </svg>
    ),
  },
];

export default function CTASection() {
  return (
    <section className="py-16 px-6 bg-zinc-100 dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Pronto para transformar sua operação?
          </h2>
          <div className="w-16 h-1 bg-zinc-300 dark:bg-zinc-700 mx-auto mb-4" />
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Descubra como podemos ajudar sua empresa a alcançar novos patamares de
            produtividade com automação inteligente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {ctaItems.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-100 dark:bg-zinc-700 rounded-full mb-4 text-zinc-700 dark:text-zinc-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
                {item.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Agende uma conversa gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
