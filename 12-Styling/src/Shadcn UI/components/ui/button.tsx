import * as React from "react";

// Simple class merge helper
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    
    const baseStyles =
      "px-4 py-2 rounded-md font-medium transition";

    const variants = {
      default: "bg-black text-white hover:bg-gray-800",
      outline: "border border-black text-black hover:bg-black hover:text-white",
    };
  de
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className || "")}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";