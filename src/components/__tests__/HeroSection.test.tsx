import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroSection from "../HeroSection";

describe("HeroSection", () => {
  it("renders the main heading", () => {
    render(<HeroSection />);
    expect(
      screen.getByRole("heading", { name: /Transforme sua operação com automação inteligente/i })
    ).toBeDefined();
  });

  it("renders the CTA buttons", () => {
    render(<HeroSection />);
    expect(screen.getByRole("link", { name: "Fale Conosco" })).toBeDefined();
    expect(screen.getByRole("link", { name: "Conheça Nossos Serviços" })).toBeDefined();
  });

  it("CTA buttons link to correct sections", () => {
    render(<HeroSection />);
    const contactLink = screen.getByRole("link", { name: "Fale Conosco" });
    const servicesLink = screen.getByRole("link", { name: "Conheça Nossos Serviços" });
    expect(contactLink.getAttribute("href")).toBe("#contato");
    expect(servicesLink.getAttribute("href")).toBe("#servicos");
  });

  it("renders the description paragraph", () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/GHMS oferece soluções personalizadas de automação/i)
    ).toBeDefined();
  });
});
