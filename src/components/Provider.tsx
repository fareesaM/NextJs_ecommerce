"use client"; // ✅ This ensures Redux is only used in Client Components

import { Provider } from "react-redux";
import { store } from "@/lib/store";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
