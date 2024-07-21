import { beforeEach, describe, expect, it, vi } from "vitest";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "./Login";

describe("Login", () => {
  let utils,
    handleSubmit,
    user,
    changeUsernameInput,
    changePasswordInput,
    clickSubmit;

  beforeEach(() => {
    handleSubmit = vi.fn();
    user = { username: "michelle", password: "smith" };
    utils = render(<Login onSubmit={handleSubmit} />);
    changeUsernameInput = (value: string) =>
      userEvent.type(utils.getByLabelText(/username/i), value);
    changePasswordInput = (value: string) =>
      userEvent.type(utils.getByLabelText(/password/i), value);
    clickSubmit = () => userEvent.click(utils.getByText(/submit/i));
  });

  describe("when username and password is provided", () => {
    beforeEach(() => {
      changeUsernameInput(user.username);
      changePasswordInput(user.password);
    });

    describe("when the submit button is clicked", () => {
      beforeEach(() => {
        clickSubmit();
      });

      it("should call onSubmit with the username and password", () => {
        expect(handleSubmit).toHaveBeenCalledTimes(1);
        expect(handleSubmit).toHaveBeenCalledWith(user);
      });
    });
  });

  describe("when the password is not provided", () => {
    beforeEach(() => {
      changeUsernameInput(user.username);
    });

    describe("when the submit button is clicked", () => {
      let errorMessage;
      beforeEach(() => {
        clickSubmit();
        errorMessage = utils.getByRole("alert");
      });

      it("should show an error message", () => {
        expect(errorMessage).toHaveTextContent(/password is required/i);
      });
    });
  });

  describe("when the username is not provided", () => {
    beforeEach(() => {
      changePasswordInput(user.password);
    });

    describe("when the submit button is clicked", () => {
      let errorMessage;
      beforeEach(() => {
        clickSubmit();
        errorMessage = utils.getByRole("alert");
      });

      it("should show an error message", () => {
        expect(errorMessage).toHaveTextContent(/username is required/i);
      });
    });
  });
});
