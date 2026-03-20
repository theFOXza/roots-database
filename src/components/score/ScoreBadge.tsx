interface ScoreBadgeProps {
  score: number;
  label: string;
  color: string;
}

export function ScoreBadge({ score, label, color }: ScoreBadgeProps) {
  const normalized = label.toLowerCase();
  const tierMap: Record<string, { bg: string; text: string; border: string }> = {
    "gold root": { bg: "var(--color-tier-gold)", text: "var(--color-ancient-bark)", border: "var(--color-ancestral-gold)" },
    "strong root": { bg: "var(--color-tier-silver)", text: "var(--color-ancient-bark)", border: "var(--color-root-200)" },
    "growing root": { bg: "var(--color-tier-bronze)", text: "var(--color-ancient-bark)", border: "var(--color-root-200)" },
    seedling: { bg: "var(--color-tier-seedling)", text: "var(--color-ancient-bark)", border: "var(--color-root-200)" },
    unverified: { bg: "var(--color-tier-unverified)", text: "var(--color-ancient-bark)", border: "var(--color-root-200)" }
  };
  const tierStyle = tierMap[normalized] ?? {
    bg: "var(--color-linen)",
    text: "var(--color-root-700)",
    border: "var(--color-root-200)"
  };
  const scoreColor = tierMap[normalized] ? tierStyle.text : color;

  return (
    <span
      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase"
      style={{ background: tierStyle.bg, color: tierStyle.text, borderColor: tierStyle.border }}
    >
      <span className="text-sm" style={{ color: scoreColor }}>
        {score}
      </span>
      <span>{label}</span>
    </span>
  );
}
