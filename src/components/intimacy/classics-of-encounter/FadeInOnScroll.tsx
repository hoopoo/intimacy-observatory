"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "p" | "blockquote";
  delayMs?: number;
};

export function FadeInOnScroll({
  children,
  className,
  as: Tag = "div",
  delayMs = 0,
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      requestAnimationFrame(() => setVisible(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "transition-all duration-[900ms] ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        className,
      )}
      style={visible && delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

type StaggerGroupProps = {
  children: ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerMs?: number;
};

export function FadeInStaggerGroup({
  children,
  className,
  itemClassName,
  staggerMs = 80,
}: StaggerGroupProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <FadeInOnScroll
          key={index}
          className={itemClassName}
          delayMs={index * staggerMs}
        >
          {child}
        </FadeInOnScroll>
      ))}
    </div>
  );
}
