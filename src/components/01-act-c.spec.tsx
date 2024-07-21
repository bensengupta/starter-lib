import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import Login from "./Login";

describe("Login", () => {
  it("should submit the form with a username and password", async () => {
    render(<Login />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "john" } });
    fireEvent.change(passwordInput, { target: { value: "secret-password" } });
    fireEvent.click(screen.getByText(/submit/i));

    // await waitFor(() => {
    //   expect(screen.queryByText(/saving/i)).not.toBeInTheDocument();
    // });
    await waitForElementToBeRemoved(() => screen.getByText(/saving/i));
  });
});
