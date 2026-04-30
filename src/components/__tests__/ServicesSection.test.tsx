import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ServicesSection from "../ServicesSection";

describe("ServicesSection", () => {
  it("renders the section heading", () => {
    render(<ServicesSection />);
    expect(screen.getByRole("heading", { name: "Nossos Serviços" })).toBeDefined();
  });

  it("renders all 5 service cards", () => {
    render(<ServicesSection />);
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards.length).toBe(5);
  });

  it("renders Automação de Processos service", () => {
    render(<ServicesSection />);
    expect(
      screen.getByRole("heading", { name: "Automação de Processos" })
    ).toBeDefined();
    expect(
      screen.getByText(/Simplificamos e automatizamos fluxos de trabalho/)
    ).toBeDefined();
  });

  it("renders Integrações service", () => {
    render(<ServicesSection />);
    expect(
      screen.getByRole("heading", { name: "Integrações" })
    ).toBeDefined();
    expect(
      screen.getByText(/Conectamos seus sistemas e ferramentas/)
    ).toBeDefined();
  });

  it("renders RPA service", () => {
    render(<ServicesSection />);
    expect(
      screen.getByRole("heading", { name: "RPA (Robotic Process Automation)" })
    ).toBeDefined();
    expect(
      screen.getByText(/Implementamos robôs de automação/)
    ).toBeDefined();
  });

  it("renders n8n service", () => {
    render(<ServicesSection />);
    expect(screen.getByRole("heading", { name: "n8n" })).toBeDefined();
    expect(
      screen.getByText(/Desenvolvemos fluxos de automação personalizados/)
    ).toBeDefined();
  });

  it("renders Desenvolvimento Back-end com Python service", () => {
    render(<ServicesSection />);
    expect(
      screen.getByRole("heading", { name: "Desenvolvimento Back-end com Python" })
    ).toBeDefined();
    expect(
      screen.getByText(/Criamos APIs e sistemas robustos em Python/)
    ).toBeDefined();
  });

  it("renders decorative divider", () => {
    const { container } = render(<ServicesSection />);
    const divider = container.querySelector(".w-16.h-1");
    expect(divider).not.toBeNull();
  });

  it("renders service cards with proper styling", () => {
    const { container } = render(<ServicesSection />);
    const cards = container.querySelectorAll(".rounded-lg");
    expect(cards.length).toBe(5);
  });
});
