import { act, fireEvent, render, screen } from "@testing-library/react";

import Login from "./Login";

describe("Login", () => {
  it("should submit the form with a username and password", async () => {
    const promise = Promise.resolve({});
    const onSubmit = vi.fn(() => promise);

    render(<Login onSubmit={onSubmit} />);

    const usernameInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "john" } });
    fireEvent.change(passwordInput, { target: { value: "secret-password" } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    await act(async () => {
      await promise;
    });
  });
});
