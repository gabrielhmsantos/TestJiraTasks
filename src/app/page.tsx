import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-zinc-50 font-sans dark:bg-black">
      <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Landing
          </span>
          <nav className="flex items-center gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            <Link className="hover:text-zinc-950 dark:hover:text-white" href="/privacidade">
              Privacidade
            </Link>
            <Link className="hover:text-zinc-950 dark:hover:text-white" href="/termos">
              Termos
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-8 px-6 py-20">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            TestJiraTasks
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Base Next.js para a landing page
          </h1>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Estrutura mínima com App Router, export estático e rotas públicas de
            apoio. Evolua o conteúdo incrementalmente a partir de{" "}
            <code className="rounded bg-zinc-200 px-1.5 py-0.5 text-sm dark:bg-zinc-800">
              src/app/page.tsx
            </code>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
