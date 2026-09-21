import type { PropsWithChildren } from "react";
import { Container } from "./Container";

interface SectionProps extends PropsWithChildren {
  id?: string;
  className?: string;
}

export function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 lg:py-28 ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}