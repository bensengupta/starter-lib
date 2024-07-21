import { render, waitFor, screen } from "@testing-library/react";
import * as navUtils from "../utils";

import Login from "./Login";
import {
  GetInvoicesResponseFactory,
  MockedProvider,
} from "../test-utils/MockedProvider";

const defaultProps = {
  onSubmit: () => Promise.resolve({}),
};
const defaultGraphqlMocks = [GetInvoicesResponseFactory()];

function setup(ui: React.ReactElement, { mocks = defaultGraphqlMocks } = {}) {
  function wrapper({ children }: React.PropsWithChildren) {
    return <MockedProvider mocks={mocks}>{children}</MockedProvider>;
  }
  const navigateSpy = vi.spyOn(navUtils, "navigate");
  render(ui, { wrapper });
  return { navigateSpy };
}

afterEach(() => {
  vi.restoreAllMocks();
});

test("calls onSubmit with the username and password", async () => {
  const handleSubmit = vi.fn(() => Promise.resolve({}));
  const utils = setup(<Login {...defaultProps} onSubmit={handleSubmit} />);

  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(utils.navigateSpy).toHaveBeenCalled();
  });
});

test("calls onSubmit with the username and password", async () => {
  const handleSubmit = vi.fn(() => Promise.resolve({}));
  const utils = setup(<Login {...defaultProps} onSubmit={handleSubmit} />);

  expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(utils.navigateSpy).toHaveBeenCalled();
  });
});
