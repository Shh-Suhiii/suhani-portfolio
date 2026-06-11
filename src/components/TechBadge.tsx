export default function TechBadge({ children }: { children: string }) {
  return (
    <span className="inline-block rounded-full border px-3 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}