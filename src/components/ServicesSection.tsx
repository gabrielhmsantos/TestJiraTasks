const services = [
  {
    title: "Automação de Processos",
    description:
      "Simplificamos e automatizamos fluxos de trabalho repetitivos, permitindo que sua equipe concentre esforços em atividades estratégicas e de maior valor agregado.",
  },
  {
    title: "Integrações",
    description:
      "Conectamos seus sistemas e ferramentas de forma eficiente, garantindo fluxo contínuo de dados entre plataformas diferentes para otimizar operações.",
  },
  {
    title: "RPA (Robotic Process Automation)",
    description:
      "Implementamos robôs de automação que executam tarefas manuais com precisão e velocidade, reduzindo erros e aumentando a produtividade.",
  },
  {
    title: "n8n",
    description:
      "Desenvolvemos fluxos de automação personalizados utilizando n8n, uma plataforma poderosa e flexível para integração e automação de processos.",
  },
  {
    title: "Desenvolvimento Back-end com Python",
    description:
      "Criamos APIs e sistemas robustos em Python, utilizando frameworks modernos como FastAPI e Django para entregar soluções escaláveis e seguras.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Nossos Serviços
          </h2>
          <div className="w-16 h-1 bg-zinc-300 dark:bg-zinc-700 mx-auto" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
