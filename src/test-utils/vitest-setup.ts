import "@testing-library/jest-dom/vitest";

import { afterAll, afterEach, beforeAll } from "vitest";
import { cleanup } from "@testing-library/react";
import util from "node:util";

console.error = (...args: unknown[]) => {
  throw new Error(util.format(...args));
};

beforeAll(() => {
  global.IS_REACT_ACT_ENVIRONMENT = true;
});

afterAll(() => {
  global.IS_REACT_ACT_ENVIRONMENT = false;
});

afterEach(() => {
  cleanup();
});
