import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicesSection from "../ServicesSection";

const setViewport = (width: number, height: number = 800) => {
  window.resizeTo(width, height);
};

describe("ServicesSection - Renderização", () => {
  beforeEach(() => {
    setViewport(1280);
  });

  it("renderiza o título da seção", () => {
    render(<ServicesSection />);
    expect(screen.getByRole("heading", { name: "Nossos Serviços" })).toBeDefined();
  });

  it("renderiza todos os 5 cards de serviço", () => {
    render(<ServicesSection />);
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards.length).toBe(5);
  });

  it("renderiza o serviço de Automação de Processos", () => {
    render(<ServicesSection />);
    expect(screen.getByRole("heading", { name: "Automação de Processos" })).toBeDefined();
    expect(screen.getByText(/Simplificamos e automatizamos fluxos de trabalho/)).toBeDefined();
  });

  it("renderiza o serviço de Integrações", () => {
    render(<ServicesSection />);
    expect(screen.getByRole("heading", { name: "Integrações" })).toBeDefined();
    expect(screen.getByText(/Conectamos seus sistemas e ferramentas/)).toBeDefined();
  });

  it("renderiza o serviço de RPA", () => {
    render(<ServicesSection />);
    expect(screen.getByRole("heading", { name: "RPA (Robotic Process Automation)" })).toBeDefined();
    expect(screen.getByText(/Implementamos robôs de automação/)).toBeDefined();
  });

  it("renderiza o serviço de n8n", () => {
    render(<ServicesSection />);
    expect(screen.getByRole("heading", { name: "n8n" })).toBeDefined();
    expect(screen.getByText(/Desenvolvemos fluxos de automação personalizados/)).toBeDefined();
  });

  it("renderiza o serviço de Desenvolvimento Back-end com Python", () => {
    render(<ServicesSection />);
    expect(screen.getByRole("heading", { name: "Desenvolvimento Back-end com Python" })).toBeDefined();
    expect(screen.getByText(/Criamos APIs e sistemas robustos em Python/)).toBeDefined();
  });

  it("renderiza divisor decorativo", () => {
    const { container } = render(<ServicesSection />);
    const divider = container.querySelector(".w-16.h-1");
    expect(divider).not.toBeNull();
  });

  it("cards possuem estilo de sombra", () => {
    const { container } = render(<ServicesSection />);
    const cards = container.querySelectorAll(".shadow-sm");
    expect(cards.length).toBe(5);
  });

  it("cards possuem efeito hover", () => {
    const { container } = render(<ServicesSection />);
    const hoverCards = container.querySelectorAll(".hover\\:shadow-md");
    expect(hoverCards.length).toBe(5);
  });
});

describe("ServicesSection - Responsividade", () => {
  it("grid de serviços adapta em desktop (lg: 3 colunas)", () => {
    setViewport(1280);
    const { container } = render(<ServicesSection />);
    const grid = container.querySelector(".lg\\:grid-cols-3");
    expect(grid).not.toBeNull();
  });

  it("grid de serviços adapta em tablet (md: 2 colunas)", () => {
    setViewport(768);
    const { container } = render(<ServicesSection />);
    const grid = container.querySelector(".md\\:grid-cols-2");
    expect(grid).not.toBeNull();
  });

  it("grid de serviços adapta em mobile (1 coluna)", () => {
    setViewport(375);
    const { container } = render(<ServicesSection />);
    const grid = container.querySelector(".grid");
    expect(grid).not.toBeNull();
  });

  it("cards renderizam corretamente em desktop", () => {
    setViewport(1280);
    render(<ServicesSection />);
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards.length).toBe(5);
  });

  it("cards renderizam corretamente em tablet", () => {
    setViewport(768);
    render(<ServicesSection />);
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards.length).toBe(5);
  });

  it("cards renderizam corretamente em mobile", () => {
    setViewport(375);
    render(<ServicesSection />);
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards.length).toBe(5);
  });

  it("container centraliza conteúdo em todas as telas", () => {
    setViewport(1280);
    const { container } = render(<ServicesSection />);
    const centeredContainer = container.querySelector(".max-w-4xl.mx-auto");
    expect(centeredContainer).not.toBeNull();
  });

  it("padding é responsivo", () => {
    setViewport(375);
    const { container } = render(<ServicesSection />);
    const section = container.querySelector(".px-6");
    expect(section).not.toBeNull();
  });

  it("cards mantêm espaçamento em mobile", () => {
    setViewport(375);
    const { container } = render(<ServicesSection />);
    const grid = container.querySelector(".gap-6");
    expect(grid).not.toBeNull();
  });

  it("cards mantêm espaçamento em desktop", () => {
    setViewport(1280);
    const { container } = render(<ServicesSection />);
    const grid = container.querySelector(".gap-6");
    expect(grid).not.toBeNull();
  });
});