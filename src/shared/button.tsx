import { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "contained";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  IconEsquerda?: ReactNode;
  IconDireita?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 hover:bg-blue-700",
  outline: "border border-zinc-700 hover:bg-zinc-900",
  contained: "border border-white bg-white text-black",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  IconEsquerda,
  IconDireita,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {IconEsquerda && <span className="flex-shrink-0">{IconEsquerda}</span>}
      {children}
      {IconDireita && <span className="flex-shrink-0">{IconDireita}</span>}
    </a>
  );
}
