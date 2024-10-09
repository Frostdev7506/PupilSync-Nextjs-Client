"use client";

import { Provider } from "react-redux";
import { store } from "./store"; // Adjust the path accordingly

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
