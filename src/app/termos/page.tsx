import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Termos de uso (conteúdo em definição).",
};

export default function TermosPage() {
  return (
    <main className="mx-auto flex min-h-full max-w-3xl flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Termos de uso</h1>
      <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Esta página é um placeholder público para os termos de uso da landing.
        O texto definitivo será publicado nas próximas iterações.
      </p>
    </main>
  );
}
