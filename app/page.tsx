export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Landing page
          </span>
        </div>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 sm:py-28">
        <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            Bem-vindo
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            Estrutura inicial pronta para evoluir a sua landing
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Este projeto usa o App Router do Next.js com layout raiz e página
            inicial. Ajuste textos, seções e estilos conforme o produto.
          </p>
        </div>
      </main>
      <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © {new Date().getFullYear()} TestJiraTasks
      </footer>
    </div>
  );
}
