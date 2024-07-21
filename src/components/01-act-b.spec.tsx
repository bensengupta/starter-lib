import { fireEvent, render, screen } from "@testing-library/react";

import Login from "./Login";
import { makeLoginApiRequest } from "../utils";

describe("Login", () => {
  it("should submit the form with a username and password", async () => {
    render(<Login />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "john" } });
    fireEvent.change(passwordInput, { target: { value: "secret-password" } });
    fireEvent.click(screen.getByText(/submit/i));
  });
});
