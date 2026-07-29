import { REASSURANCE } from "@/lib/content";
import { Icon } from "@/components/serrurier/icon";

export function ReassuranceBar() {
	return (
		<section aria-label="Nos engagements" className="border-b border-border bg-secondary/60">
			<div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 py-6 sm:gap-6 lg:grid-cols-4">
				{REASSURANCE.map((item) => (
					<div key={item.title} className="flex items-center gap-3 px-1 py-2">
						<span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
							<Icon name={item.icon} className="size-5" />
						</span>
						<span className="text-sm font-medium leading-tight text-foreground">
							{item.title}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
