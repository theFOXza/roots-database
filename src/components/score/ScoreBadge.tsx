interface ScoreBadgeProps {
  score: number;
  label: string;
  color: string;
}

export function ScoreBadge({ score, label, color }: ScoreBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-root-200 bg-linen px-3 py-1 text-xs font-semibold uppercase text-root-700">
      <span className="text-sm" style={{ color }}>
        {score}
      </span>
      <span>{label}</span>
    </span>
  );
}
