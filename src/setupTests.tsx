// React testing library extensions to expect().
import "@testing-library/jest-dom";
import log from "loglevel";
import { vi } from 'vitest';


log.setLevel("info");

// Required to stop console errors about missing canvas
import 'vitest-canvas-mock'

// Plotly expects this function to exist but it doesn't
// when testing.
if (typeof window.URL.createObjectURL === "undefined") {
  Object.defineProperty(window.URL, "createObjectURL", { value: () => { } });
}

// Mock window.open
window.open = vi.fn();
