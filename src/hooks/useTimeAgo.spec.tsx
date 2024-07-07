import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../test-utils/utils";
import { useTimeAgo } from "./useTimeAgo";
import { sub } from "date-fns";

function TestComponent({ date }: { date: string }) {
  const timeAgo = useTimeAgo(date);

  return <p>{timeAgo}</p>;
}

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.restoreAllMocks();
});

it('should show "less than a minute ago"', () => {
  const dateStr = new Date().toISOString();
  renderWithProviders(<TestComponent date={dateStr} />);

  expect(screen.getByText("less than a minute ago")).toBeInTheDocument();
});

it('should show "1 minute ago"', () => {
  const dateStr = sub(new Date(), { seconds: 30 }).toISOString();
  renderWithProviders(<TestComponent date={dateStr} />);

  expect(screen.getByText("1 minute ago")).toBeInTheDocument();
});

it("should update timestamp after 1 second", async () => {
  const dateStr = sub(new Date(), { seconds: 29 }).toISOString();
  renderWithProviders(<TestComponent date={dateStr} />);

  expect(screen.getByText("less than a minute ago")).toBeInTheDocument();

  await vi.advanceTimersByTimeAsync(1000);

  expect(screen.getByText("1 minute ago")).toBeInTheDocument();
});

it("should clear timers on unmount", async () => {
  const timers = vi.getTimerCount();

  // sanity check
  expect(timers).toBe(0);

  const dateStr = new Date().toISOString();
  const { unmount } = renderWithProviders(<TestComponent date={dateStr} />);

  unmount();

  expect(timers).toBe(0);
});
