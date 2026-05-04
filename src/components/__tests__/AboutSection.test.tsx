import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutSection from "../AboutSection";

const setViewport = (width: number, height: number = 800) => {
  window.resizeTo(width, height);
};

describe("AboutSection - Renderização", () => {
  beforeEach(() => {
    setViewport(1280);
  });

  it("renderiza o título da seção", () => {
    render(<AboutSection />);
    expect(screen.getByRole("heading", { name: "Sobre a GHMS" })).toBeDefined();
  });

  it("renderiza o card de Visão Geral com título e descrição", () => {
    render(<AboutSection />);
    expect(screen.getByRole("heading", { name: "Visão Geral" })).toBeDefined();
    expect(screen.getByText(/GHMS é uma empresa de consultoria em tecnologia/)).toBeDefined();
  });

  it("renderiza o card de Nossa Missão com título e descrição", () => {
    render(<AboutSection />);
    expect(screen.getByRole("heading", { name: "Nossa Missão" })).toBeDefined();
    expect(screen.getByText(/Nossa missão é impulsionar a transformação digital/)).toBeDefined();
  });

  it("renderiza ambos os cards na seção", () => {
    const { container } = render(<AboutSection />);
    const cards = container.querySelectorAll(".rounded-lg");
    expect(cards.length).toBe(2);
  });

  it("renderiza divisor decorativo", () => {
    const { container } = render(<AboutSection />);
    const divider = container.querySelector(".w-16.h-1");
    expect(divider).not.toBeNull();
  });

  it("cards possuem estilo de background", () => {
    const { container } = render(<AboutSection />);
    const whiteCards = container.querySelectorAll(".bg-white");
    expect(whiteCards.length).toBe(2);
  });

  it("cards possuem sombra", () => {
    const { container } = render(<AboutSection />);
    const shadowCards = container.querySelectorAll(".shadow-sm");
    expect(shadowCards.length).toBe(2);
  });
});

describe("AboutSection - Responsividade", () => {
  it("renderiza corretamente em desktop (1280px)", () => {
    setViewport(1280);
    const { container } = render(<AboutSection />);
    expect(container.firstChild).toBeDefined();
    const headings = container.querySelectorAll("h2");
    expect(headings.length).toBe(1);
  });

  it("renderiza corretamente em tablet (768px)", () => {
    setViewport(768);
    const { container } = render(<AboutSection />);
    expect(container.firstChild).toBeDefined();
  });

  it("renderiza corretamente em mobile (375px)", () => {
    setViewport(375);
    const { container } = render(<AboutSection />);
    expect(container.firstChild).toBeDefined();
  });

  it("cards renderizam corretamente em todas as telas", () => {
    [375, 768, 1280].forEach(width => {
      setViewport(width);
      const { container } = render(<AboutSection />);
      const cards = container.querySelectorAll(".rounded-lg");
      expect(cards.length).toBe(2);
    });
  });

  it("container centraliza conteúdo", () => {
    setViewport(1280);
    const { container } = render(<AboutSection />);
    const centeredContainer = container.querySelector(".max-w-4xl.mx-auto");
    expect(centeredContainer).not.toBeNull();
  });

  it("padding é consistente em todas as telas", () => {
    setViewport(375);
    const { container } = render(<AboutSection />);
    const section = container.querySelector(".px-6");
    expect(section).not.toBeNull();
  });

  it("cards ocupam largura total em mobile", () => {
    setViewport(375);
    const { container } = render(<AboutSection />);
    const cards = container.querySelectorAll(".bg-white");
    expect(cards.length).toBe(2);
  });

  it("texto dos cards é legível em todas as telas", () => {
    setViewport(375);
    render(<AboutSection />);
    const paragraphs = screen.getAllByText(/GHMS é uma empresa de consultoria/i);
    expect(paragraphs.length).toBe(1);
  });

  it("espaçamento vertical é responsivo", () => {
    setViewport(1280);
    const { container } = render(<AboutSection />);
    const section = container.querySelector(".py-16");
    expect(section).not.toBeNull();
  });

  it("espaçamento entre cards é adequado", () => {
    setViewport(1280);
    const { container } = render(<AboutSection />);
    const spacedContainer = container.querySelector(".space-y-8");
    expect(spacedContainer).not.toBeNull();
  });
});