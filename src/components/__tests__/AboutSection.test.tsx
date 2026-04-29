import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AboutSection from "../AboutSection";

describe("AboutSection", () => {
  it("renders the section heading", () => {
    render(<AboutSection />);
    expect(screen.getByRole("heading", { name: "Sobre a GHMS" })).toBeDefined();
  });

  it("renders the Visão Geral card with title and description", () => {
    render(<AboutSection />);
    expect(screen.getByRole("heading", { name: "Visão Geral" })).toBeDefined();
    expect(
      screen.getByText(/GHMS é uma empresa de consultoria em tecnologia/)
    ).toBeDefined();
  });

  it("renders the Nossa Missão card with title and description", () => {
    render(<AboutSection />);
    expect(screen.getByRole("heading", { name: "Nossa Missão" })).toBeDefined();
    expect(
      screen.getByText(/Nossa missão é impulsionar a transformação digital/)
    ).toBeDefined();
  });

  it("renders both cards in the section", () => {
    const { container } = render(<AboutSection />);
    const cards = container.querySelectorAll(".rounded-lg");
    expect(cards.length).toBe(2);
  });

  it("renders decorative divider", () => {
    const { container } = render(<AboutSection />);
    const divider = container.querySelector(".w-16.h-1");
    expect(divider).not.toBeNull();
  });
});
