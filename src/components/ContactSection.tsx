"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  const [state] = useFormState(submitContactForm, initialState);
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-semibold rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {pending ? (
        <>
          <svg
            className="animate-spin h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Enviando...
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
          {state.success ? "Mensagem Enviada!" : "Enviar Mensagem"}
        </>
      )}
    </button>
  );
}

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);

  return (
    <section id="contato" className="py-16 px-6 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-zinc-300 dark:bg-zinc-700 mx-auto" />
          <p className="text-zinc-600 dark:text-zinc-400 mt-4">
            Quer saber como podemos ajudar sua empresa? Preencha o formulário abaixo.
          </p>
        </div>

        <form action={formAction} className="space-y-6">
          {state.success && (
            <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="text-green-700 dark:text-green-400 text-center font-medium">
                {state.message}
              </p>
            </div>
          )}

          {!state.success && state.message && (
            <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-red-700 dark:text-red-400 text-center">
                {state.message}
              </p>
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400"
            />
            {state.errors?.name && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {state.errors.name[0]}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400"
            />
            {state.errors?.email && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {state.errors.email[0]}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 dark:focus:ring-zinc-400 resize-none"
            />
            {state.errors?.message && (
              <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                {state.errors.message[0]}
              </p>
            )}
          </div>

          {state.message && (
            <div
              className={`p-4 rounded-lg ${
                state.success
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400"
              }`}
            >
              {state.message}
            </div>
          )}

          <SubmitButton />
        </form>
      </div>
    </section>
  );
}
