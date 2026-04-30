import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactSection from "../ContactSection";

vi.mock("react-dom", async () => {
  const actual = await vi.importActual("react-dom");
  return {
    ...actual,
    useFormState: vi.fn(() => [
      { success: false, message: "" },
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

describe("ContactSection", () => {
  it("renders the section heading", () => {
    render(<ContactSection />);
    expect(screen.getByRole("heading", { name: "Entre em Contato" })).toBeDefined();
  });

  it("renders all form fields", () => {
    render(<ContactSection />);
    expect(screen.getByLabelText("Nome")).toBeDefined();
    expect(screen.getByLabelText("E-mail")).toBeDefined();
    expect(screen.getByLabelText("Mensagem")).toBeDefined();
  });

  it("renders the submit button", () => {
    render(<ContactSection />);
    expect(screen.getByRole("button", { name: "Enviar Mensagem" })).toBeDefined();
  });

  it("renders the description text", () => {
    render(<ContactSection />);
    expect(
      screen.getByText(/quer saber como podemos ajudar sua empresa/i)
    ).toBeDefined();
  });

  it("renders the name input with required attribute", () => {
    render(<ContactSection />);
    const nameInput = screen.getByLabelText("Nome");
    expect(nameInput.required).toBeTruthy();
  });

  it("renders the email input with required attribute", () => {
    render(<ContactSection />);
    const emailInput = screen.getByLabelText("E-mail");
    expect(emailInput.required).toBeTruthy();
  });

  it("renders the message textarea with required attribute", () => {
    render(<ContactSection />);
    const messageTextarea = screen.getByLabelText("Mensagem");
    expect(messageTextarea.required).toBeTruthy();
  });

  it("renders all inputs with proper types", () => {
    render(<ContactSection />);
    const nameInput = screen.getByLabelText("Nome");
    const emailInput = screen.getByLabelText("E-mail");
    expect((nameInput as HTMLInputElement).type).toBe("text");
    expect((emailInput as HTMLInputElement).type).toBe("email");
  });
});
