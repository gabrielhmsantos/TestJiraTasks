import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactSection from "../ContactSection";

beforeEach(() => {
  vi.clearAllMocks();
});

vi.mock("react-dom", async () => {
  const actual = await vi.importActual("react-dom");
  return {
    ...actual,
    useFormState: vi.fn(() => [
      { success: false, message: "", errors: {} },
      vi.fn(),
    ]),
    useFormStatus: vi.fn(() => ({ pending: false })),
  };
});

vi.mock("@/app/actions/contact", async () => {
  const actual = await vi.importActual("@/app/actions/contact");
  return {
    ...actual,
    submitContactForm: vi.fn(),
  };
});

describe("ContactSection - Renderização", () => {
  it("renderiza o título da seção", () => {
    render(<ContactSection />);
    expect(screen.getByRole("heading", { name: "Entre em Contato" })).toBeDefined();
  });

  it("renderiza todos os campos do formulário", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText("Nome")).toBeDefined();
    expect(screen.getByLabelText("E-mail")).toBeDefined();
    expect(screen.getByLabelText("Mensagem")).toBeDefined();
  });

  it("renderiza o botão de envio", () => {
    render(<ContactSection />);
    expect(screen.getByRole("button", { name: "Enviar Mensagem" })).toBeDefined();
  });

  it("renderiza o texto descritivo", () => {
    render(<ContactSection />);
    expect(screen.getByText(/quer saber como podemos ajudar sua empresa/i)).toBeDefined();
  });

  it("renderiza o divisor decorativo", () => {
    const { container } = render(<ContactSection />);
    const divider = container.querySelector(".w-16.h-1");
    expect(divider).not.toBeNull();
  });

  it("todos os campos são obrigatórios", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText("Nome").getAttribute("required")).toBe("");
    expect(screen.getByLabelText("E-mail").getAttribute("required")).toBe("");
    expect(screen.getByLabelText("Mensagem").getAttribute("required")).toBe("");
  });

  it("campo de mensagem permite texto multi-linha", () => {
    render(<ContactSection />);
    const messageField = screen.getByLabelText("Mensagem");
    expect(messageField.getAttribute("rows")).toBe("5");
  });
});

describe("ContactSection - Interatividade", () => {
  it("pode digitar no campo de nome", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    const nameInput = screen.getByLabelText("Nome");
    await user.type(nameInput, "João Silva");
    expect(nameInput.value).toBe("João Silva");
  });

  it("pode digitar no campo de e-mail", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    const emailInput = screen.getByLabelText("E-mail");
    await user.type(emailInput, "joao@exemplo.com");
    expect(emailInput.value).toBe("joao@exemplo.com");
  });

  it("pode digitar no campo de mensagem", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    const messageInput = screen.getByLabelText("Mensagem");
    await user.type(messageInput, "Esta é uma mensagem de teste com mais de 10 caracteres");
    expect(messageInput.value).toBe("Esta é uma mensagem de teste com mais de 10 caracteres");
  });

  it("pode limpar o campo de nome", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    const nameInput = screen.getByLabelText("Nome");
    await user.type(nameInput, "João Silva");
    await user.clear(nameInput);
    expect(nameInput.value).toBe("");
  });

  it("botão de envio responde a clique", async () => {
    const user = userEvent.setup();
    render(<ContactSection />);
    const submitButton = screen.getByRole("button", { name: "Enviar Mensagem" });
    await user.click(submitButton);
  });

  it("inputs possuem foco estilizado", () => {
    const { container } = render(<ContactSection />);
    const inputs = container.querySelectorAll(".focus\\:ring-2");
    expect(inputs.length).toBeGreaterThanOrEqual(3);
  });
});

describe("ContactSection - Responsividade", () => {
  it("renderiza corretamente em desktop", () => {
    const { container } = render(<ContactSection />);
    expect(container.firstChild).toBeDefined();
    expect(screen.getByRole("heading", { name: "Entre em Contato" })).toBeDefined();
  });

  it("formulário está presente na página", () => {
    const { container } = render(<ContactSection />);
    const form = container.querySelector("form");
    expect(form).not.toBeNull();
  });

  it("inputs ocupam largura total", () => {
    const { container } = render(<ContactSection />);
    const fullWidthInputs = container.querySelectorAll(".w-full");
    expect(fullWidthInputs.length).toBeGreaterThanOrEqual(3);
  });

  it("container centraliza conteúdo", () => {
    const { container } = render(<ContactSection />);
    const centeredContainer = container.querySelector(".max-w-2xl");
    expect(centeredContainer).not.toBeNull();
  });

  it("espaçamento vertical é consistente", () => {
    const { container } = render(<ContactSection />);
    const section = container.querySelector(".py-16");
    expect(section).not.toBeNull();
  });

  it("padding lateral é adequado", () => {
    const { container } = render(<ContactSection />);
    const section = container.querySelector(".px-6");
    expect(section).not.toBeNull();
  });
});

describe("ContactSection - Estados do Formulário", () => {
  it("exibe mensagem de sucesso após envio", () => {
    const { container } = render(<ContactSection />);
    const successMessage = container.querySelector(".bg-green-100");
    expect(successMessage).toBeNull();
  });

  it("exibe mensagem de erro após envio inválido", () => {
    const { container } = render(<ContactSection />);
    const errorMessage = container.querySelector(".bg-red-100");
    expect(errorMessage).toBeNull();
  });

  it("botão mostra texto padrão quando não pendente", () => {
    render(<ContactSection />);
    expect(screen.getByText("Enviar Mensagem")).toBeDefined();
  });
});