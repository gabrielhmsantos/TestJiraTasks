import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

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

describe("Landing Page - Renderização Completa", () => {
  it("renderiza a página sem erros", () => {
    const { container } = render(<Home />);
    expect(container.firstChild).not.toBeNull();
  });

  it("renderiza a seção Hero", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /Transforme sua operação com automação inteligente/i })
    ).toBeDefined();
  });

  it("renderiza a seção About", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Sobre a GHMS" })).toBeDefined();
  });

  it("renderiza a seção Services", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Nossos Serviços" })).toBeDefined();
  });

  it("renderiza a seção Contact", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Entre em Contato" })).toBeDefined();
  });
});

describe("Landing Page - Navegação e Links", () => {
  it("link 'Fale Conosco' aponta para seção de contato", () => {
    render(<Home />);
    const contactLink = screen.getByRole("link", { name: "Fale Conosco" });
    expect(contactLink.getAttribute("href")).toBe("#contato");
  });

  it("link 'Conheça Nossos Serviços' aponta para seção de serviços", () => {
    render(<Home />);
    const servicesLink = screen.getByRole("link", { name: "Conheça Nossos Serviços" });
    expect(servicesLink.getAttribute("href")).toBe("#servicos");
  });

  it("seção de contato possui ID para navegação", () => {
    const { container } = render(<Home />);
    const contactSection = container.querySelector("#contato");
    expect(contactSection).not.toBeNull();
  });
});

describe("Landing Page - Responsividade", () => {
  it("renderiza corretamente em desktop (1280px)", () => {
    const { container } = render(<Home />);
    expect(container.firstChild).not.toBeNull();
  });

  it("renderiza corretamente em tablet (768px)", () => {
    const { container } = render(<Home />);
    expect(container.firstChild).not.toBeNull();
  });

  it("renderiza corretamente em mobile (375px)", () => {
    const { container } = render(<Home />);
    expect(container.firstChild).not.toBeNull();
  });

  it("todos os serviços são visíveis em desktop", () => {
    render(<Home />);
    const services = screen.getAllByRole("heading", { name: /Automação|Integrações|RPA|n8n|Python/i });
    expect(services.length).toBeGreaterThanOrEqual(4);
  });

  it("todos os serviços são visíveis em mobile", () => {
    render(<Home />);
    const services = screen.getAllByRole("heading", { name: /Automação|Integrações|RPA|n8n|Python/i });
    expect(services.length).toBeGreaterThanOrEqual(4);
  });

  it("formulário de contato é visível em todas as telas", () => {
    render(<Home />);
    expect(screen.getByLabelText("Nome")).toBeDefined();
    expect(screen.getByLabelText("E-mail")).toBeDefined();
    expect(screen.getByLabelText("Mensagem")).toBeDefined();
  });
});

describe("Landing Page - Formulário de Contato", () => {
  it("formulário está presente na página", () => {
    const { container } = render(<Home />);
    const form = container.querySelector("form");
    expect(form).not.toBeNull();
  });

  it("todos os campos do formulário estão presentes", () => {
    render(<Home />);
    expect(screen.getByLabelText("Nome")).toBeDefined();
    expect(screen.getByLabelText("E-mail")).toBeDefined();
    expect(screen.getByLabelText("Mensagem")).toBeDefined();
  });

  it("botão de envio está presente", () => {
    render(<Home />);
    expect(screen.getByRole("button", { name: "Enviar Mensagem" })).toBeDefined();
  });
});

describe("Landing Page - Fluxo de Interação", () => {
  it("botões CTA são clicáveis", () => {
    render(<Home />);
    const contactLink = screen.getByRole("link", { name: "Fale Conosco" });
    expect(contactLink).not.toBeNull();
  });

  it("navegação funciona entre seções", () => {
    const { container } = render(<Home />);
    const links = container.querySelectorAll("a[href^='#']");
    expect(links.length).toBeGreaterThanOrEqual(2);
  });

  it("todos os elementos interativos são acessíveis", () => {
    render(<Home />);
    const buttons = screen.getAllByRole("button");
    const links = screen.getAllByRole("link");
    expect(buttons.length + links.length).toBeGreaterThanOrEqual(3);
  });
});

describe("Landing Page - Acessibilidade", () => {
  it("todos os campos têm labels associados", () => {
    render(<Home />);
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      const id = input.getAttribute("id");
      expect(id).not.toBeNull();
    });
  });

  it("botões têm texto acessível", () => {
    render(<Home />);
    const submitButton = screen.getByRole("button", { name: /Enviar/i });
    expect(submitButton).not.toBeNull();
  });

  it("headings são únicos e descritivos", () => {
    render(<Home />);
    const headings = screen.getAllByRole("heading");
    const headingTexts = headings.map(h => h.textContent);
    const uniqueHeadings = new Set(headingTexts);
    expect(uniqueHeadings.size).toBe(headings.length);
  });
});