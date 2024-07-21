interface MockedProviderProps {
  children: React.ReactNode;
  mocks: unknown[];
}

export function GetInvoicesResponseFactory() {
  return {};
}

export function MockedProvider({ children, mocks }: MockedProviderProps) {
  return <div>{children}</div>;
}
