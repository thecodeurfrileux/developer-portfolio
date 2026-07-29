"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Faq } from "@/lib/content";

export function FaqAccordion({ items }: { items: Faq[] }) {
	const [open, setOpen] = useState<number | null>(0);

	return (
		<div className="divide-y divide-border rounded-xl border border-border bg-card">
			{items.map((item, i) => {
				const isOpen = open === i;
				return (
					<div key={item.question}>
						<h3>
							<button
								type="button"
								onClick={() => setOpen(isOpen ? null : i)}
								aria-expanded={isOpen}
								className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-semibold text-foreground sm:px-6"
							>
								{item.question}
								<ChevronDown
									className={cn(
										"size-5 shrink-0 text-accent transition-transform duration-200",
										isOpen && "rotate-180",
									)}
									aria-hidden="true"
								/>
							</button>
						</h3>
						<div
							className={cn(
								"grid transition-all duration-200",
								isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
							)}
						>
							<div className="overflow-hidden">
								<p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
									{item.answer}
								</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
