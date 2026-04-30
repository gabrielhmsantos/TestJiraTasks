export default function HeroSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 leading-tight">
          Transforme sua operação com automação inteligente
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          A GHMS oferece soluções personalizadas de automação e integração para
          impulsionar a produtividade da sua empresa. Comece hoje mesmo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors duration-200"
          >
            Fale Conosco
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold rounded-lg border-2 border-zinc-900 dark:border-zinc-50 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors duration-200"
          >
            Conheça Nossos Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
