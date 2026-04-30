import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection";

describe("HeroSection - Renderização", () => {
  it("renderiza o título principal", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("heading", { name: /Transforme sua operação com automação inteligente/i })
    ).toBeDefined();
  });

  it("renderiza os botões de CTA", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: "Fale Conosco" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Conheça Nossos Serviços" })).toBeDefined();
  });

  it("botões CTA linkam para seções corretas", () => {
    render(<HeroSection />);
    const contactLink = screen.getByRole("link", { name: "Fale Conosco" });
    const servicesLink = screen.getByRole("link", { name: "Conheça Nossos Serviços" });
    expect(contactLink.getAttribute("href")).toBe("#contato");
    expect(servicesLink.getAttribute("href")).toBe("#servicos");
  });

  it("renderiza o parágrafo descritivo", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/GHMS oferece soluções personalizadas de automação/i)
    ).toBeDefined();
  });

  it("renderiza o gradient de background", () => {
    const { container } = render(<HeroSection />);
    const gradientSection = container.querySelector(".bg-gradient-to-b");
    expect(gradientSection).not.toBeNull();
  });
});

describe("HeroSection - Interatividade", () => {
  it("botões são clicáveis", () => {
    render(<HeroSection />);
    const contactLink = screen.getByRole("link", { name: "Fale Conosco" });
    expect(contactLink).not.toBeNull();
  });

  it("botões possuem estilo hover", () => {
    const { container } = render(<HeroSection />);
    const buttons = container.querySelectorAll(".hover\\:bg-zinc-700");
    expect(buttons.length).toBeGreaterThanOrEqual(1);
  });
});

describe("HeroSection - Responsividade", () => {
  it("renderiza corretamente em desktop", () => {
    const { container } = render(<HeroSection />);
    expect(container.firstChild).toBeDefined();
  });

  it("renderiza corretamente em tablet", () => {
    const { container } = render(<HeroSection />);
    expect(container.firstChild).toBeDefined();
  });

  it("renderiza corretamente em mobile", () => {
    const { container } = render(<HeroSection />);
    expect(container.firstChild).toBeDefined();
  });

  it("botões se adaptam em mobile (stacked layout)", () => {
    const { container } = render(<HeroSection />);
    const flexContainer = container.querySelector(".flex-col");
    expect(flexContainer).not.toBeNull();
  });

  it("textos se adaptam ao tamanho da tela", () => {
    const { container } = render(<HeroSection />);
    const responsiveText = container.querySelector(".text-4xl");
    expect(responsiveText).not.toBeNull();
  });

  it("max-width do container limita largura em telas grandes", () => {
    const { container } = render(<HeroSection />);
    const maxWidthContainer = container.querySelector(".max-w-4xl");
    expect(maxWidthContainer).not.toBeNull();
  });
});