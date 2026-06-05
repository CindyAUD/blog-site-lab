import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./components/Header";

test("Header displays data passed through props", () => {
  render(<Header name="Test User" />);

  expect(
    screen.getByText("Test User's Blog")
  ).toBeInTheDocument();
});

describe("Personal Blog App", () => {
  test("renders the blog title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /cindy audrey's blog/i,
      })
    ).toBeInTheDocument();
  });

  test("renders the about section", () => {
    render(<App />);

    expect(
      screen.getByText(/software engineering student/i)
    ).toBeInTheDocument();
  });

  test("renders article titles", () => {
    render(<App />);

    expect(
      screen.getByText(/why i started learning react/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/understanding props/i)
    ).toBeInTheDocument();
  });

  test("renders social links", () => {
    render(<App />);

    expect(
      screen.getByRole("link", { name: /github/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /linkedin/i })
    ).toBeInTheDocument();
  });
});