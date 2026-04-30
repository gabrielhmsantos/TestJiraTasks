"use server";

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const errors: ContactFormState["errors"] = {};

  if (!name || name.trim().length < 2) {
    errors.name = ["Nome é obrigatório e deve ter pelo menos 2 caracteres"];
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = ["E-mail inválido"];
  }

  if (!message || message.trim().length < 10) {
    errors.message = ["Mensagem é obrigatória e deve ter pelo menos 10 caracteres"];
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Por favor, corrija os erros no formulário",
      errors,
    };
  }

  console.log("Contact form submitted:", { name, email, message });

  return {
    success: true,
    message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
  };
}
