import { Suspense, type ReactElement } from "react";

interface SuspenseProp {
  children: ReactElement;
}
export default function SuspenseWrapper({ children }: SuspenseProp) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
