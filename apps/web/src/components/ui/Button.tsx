import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-neutral-950 text-white hover:bg-neutral-800"
      : "border border-neutral-300 bg-transparent text-neutral-950 hover:bg-neutral-100";

  return (
    <button
      {...props}
      className={`min-h-12 rounded-full px-6 text-sm font-medium transition-all duration-300 active:scale-[0.98] ${styles} ${className}`}
    >
      {children}
    </button>
  );
}