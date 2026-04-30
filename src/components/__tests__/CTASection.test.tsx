import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CTASection from "../CTASection";

describe("CTASection", () => {
  it("renders the section heading", () => {
    render(<CTASection />);
    expect(
      screen.getByRole("heading", { name: /pronto para transformar sua operação/i })
    ).toBeDefined();
  });

  it("renders all 3 CTA cards", () => {
    render(<CTASection />);
    const cards = screen.getAllByRole("heading", { level: 3 });
    expect(cards.length).toBe(3);
  });

  it("renders Automate seus processos CTA", () => {
    render(<CTASection />);
    expect(
      screen.getByRole("heading", { name: "Automatize seus processos" })
    ).toBeDefined();
    expect(
      screen.getByText(/Reduza tarefas manuais e ganhe eficiência/i)
    ).toBeDefined();
  });

  it("renders Integre seus sistemas CTA", () => {
    render(<CTASection />);
    expect(
      screen.getByRole("heading", { name: "Integre seus sistemas" })
    ).toBeDefined();
    expect(
      screen.getByText(/Conectamos todas as suas ferramentas/i)
    ).toBeDefined();
  });

  it("renders Escolha GHMS CTA", () => {
    render(<CTASection />);
    expect(
      screen.getByRole("heading", { name: "Escolha GHMS" })
    ).toBeDefined();
    expect(
      screen.getByText(/Expertise comprovada.*suporte dedicado/i)
    ).toBeDefined();
  });

  it("renders the CTA button with correct link", () => {
    render(<CTASection />);
    const button = screen.getByRole("link", { name: /agende uma conversa gratuita/i });
    expect(button).toBeDefined();
    expect(button.getAttribute("href")).toBe("#contato");
  });

  it("renders the description text", () => {
    render(<CTASection />);
    expect(
      screen.getByText(/Descubra como podemos ajudar sua empresa/i)
    ).toBeDefined();
  });

  it("renders decorative divider", () => {
    const { container } = render(<CTASection />);
    const divider = container.querySelector(".w-16.h-1");
    expect(divider).not.toBeNull();
  });
});
