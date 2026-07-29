import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/serrurier/structured-data";

export function Breadcrumbs({ items }: { items: { name: string; url: string }[] }) {
	return (
		<>
			<BreadcrumbJsonLd items={items} />
			<nav aria-label="Fil d'Ariane" className="text-sm text-muted-foreground">
				<ol className="flex flex-wrap items-center gap-1.5">
					{items.map((item, i) => {
						const last = i === items.length - 1;
						return (
							<li key={item.url} className="flex items-center gap-1.5">
								{last ? (
									<span className="font-medium text-foreground" aria-current="page">
										{item.name}
									</span>
								) : (
									<Link href={item.url} className="transition-colors hover:text-primary">
										{item.name}
									</Link>
								)}
								{!last && <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />}
							</li>
						);
					})}
				</ol>
			</nav>
		</>
	);
}
