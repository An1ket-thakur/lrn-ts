import { cn } from "@/utils/cn";
import * as React from "react";

// Button

/**
 * Reusable Button Component
 */
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button ref={ref} className={cn("px-4 py-2 rounded", className)} {...props}>
      {children}
    </button>
  );
});
Button.displayName = "Button";

// Input



export default { Button };
