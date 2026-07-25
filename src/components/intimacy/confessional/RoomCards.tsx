"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { ConfessionalRoom } from "@/data/confessional-intimacy";
import { FadeInOnScroll } from "@/components/intimacy/classics-of-encounter/FadeInOnScroll";

export function RoomCards({ rooms }: { rooms: ConfessionalRoom[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {rooms.map((room) => {
        const isOpen = openId === room.id;

        return (
          <FadeInOnScroll key={room.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : room.id)}
              aria-expanded={isOpen}
              className={cn(
                "w-full rounded-sm border px-4 py-4 text-left transition-colors duration-500",
                isOpen
                  ? "border-[var(--accent-violet)]/40 bg-[var(--accent-violet-bg)]/50"
                  : "border-[var(--border)] bg-[var(--paper-raised)] hover:border-[var(--ink-faint)]",
              )}
            >
              <p className="annotation text-[var(--ink-faint)]">{room.title}</p>
              <p className="mt-1 text-sm font-semibold text-[var(--ink)]">
                {room.titleJa}
              </p>
              <div
                className={cn(
                  "grid transition-all duration-500 ease-out motion-reduce:transition-none",
                  isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                )}
              >
                <div className="overflow-hidden">
                  <p className="prose-ja text-sm leading-relaxed text-[var(--ink-muted)]">
                    {room.description}
                  </p>
                </div>
              </div>
            </button>
          </FadeInOnScroll>
        );
      })}
    </div>
  );
}
