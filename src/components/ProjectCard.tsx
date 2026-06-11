import Link from "next/link";
import Image from "next/image";
import TechBadge from "./TechBadge";

export default function ProjectCard({
  slug,
  title,
  summary,
  tech,
  image,
}: {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  image: string;
}) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group rounded-2xl border overflow-hidden hover:shadow-lg transition"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-neutral-600 line-clamp-2">{summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {tech.map((t) => (
            <TechBadge key={t}>{t}</TechBadge>
          ))}
        </div>
      </div>
    </Link>
  );
}