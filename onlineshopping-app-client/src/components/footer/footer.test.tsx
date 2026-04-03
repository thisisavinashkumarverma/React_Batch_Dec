// Footer.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Footer from "./footer";

describe("Footer component", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  // it("renders all section headings", () => {
  //   render(<Footer />);
  //   const headings = screen.getAllByRole("heading", { level: 5 });
  //   expect(headings).toHaveLength(4);
  //   headings.forEach((heading) =>
  //     expect(heading).toHaveTextContent("Section")
  //   );
  // });

  it("renders navigation links correctly", () => {
    render(<Footer />);
    const navLinks = screen.getAllByRole("link", { name: /Home|Features|Pricing|FAQs|About/i });
    expect(navLinks.length).toBeGreaterThanOrEqual(15); // 5 links × 3 sections
  });

  it("renders newsletter subscription form", () => {
    render(<Footer />);
    expect(screen.getByText(/Subscribe to our newsletter/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Email address/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Subscribe/i })).toBeInTheDocument();
  });

  it("renders company copyright", () => {
    render(<Footer />);
    expect(screen.getByText(/© 2025 Company, Inc. All rights reserved./i)).toBeInTheDocument();
  });

  it("renders social media links", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: /Instagram/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Facebook/i })).toBeInTheDocument();
  });

  it("allows typing into the email input", async () => {
    render(<Footer />);
    const input = screen.getByPlaceholderText(/Email address/i);
    await userEvent.type(input, "test@example.com");
    expect(input).toHaveValue("test@example.com");
  });

  it("triggers subscribe button click", async () => {
    render(<Footer />);
    const button = screen.getByRole("button", { name: /Subscribe/i });
    await userEvent.click(button);
    // No handler defined in component, but we can assert it's clickable
    expect(button).toBeEnabled();
  });
});