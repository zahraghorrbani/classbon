import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./button";

describe("Button Component", () => {
  test("renders a default button", () => {
    const { getByText } = render(<Button>click here</Button>);
    expect(getByText("click here")).toBeInTheDocument();
  });

  test("desableds the button when isDisabled prop is true", () => {
    render(<Button isDisabled={true}>click here</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  test("applies the correct css class for different button variants", () => {
    const { rerender } = render(<Button variant="primary">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-primary");

    rerender(<Button variant="info">click here</Button>);
    expect(screen.getByRole("button")).toHaveClass("btn-info");
  });

  test("show rendered button", () => {
    render(
      <Button variant="primary" isOutline={true} size="large" isDisabled={true}>
        click here
      </Button>
    );
    screen.debug();
  });
});

