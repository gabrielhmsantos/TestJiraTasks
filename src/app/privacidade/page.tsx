import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Política de privacidade (conteúdo em definição).",
};

export default function PrivacidadePage() {
  return (
    <main className="mx-auto flex min-h-full max-w-3xl flex-col gap-6 px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Privacidade</h1>
      <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Esta página é um placeholder público para a política de privacidade da
        landing. O conteúdo legal será adicionado nas próximas iterações.
      </p>
    </main>
  );
}
