import { cn } from "@/lib/utils";

interface ScoreCircleProps {
  score: number;
  tierLabel: string;
  tierColor: string;
}

export function ScoreCircle({ score, tierLabel, tierColor }: ScoreCircleProps) {
  const radius = 74;
  const circumference = 2 * Math.PI * radius;
  const dash = (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 rounded-full bg-linen p-6 shadow-warm">
      <div className="relative flex h-44 w-44 items-center justify-center">
        <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 180 180">
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke="#E0D5C5"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="90"
            cy="90"
            r={radius}
            stroke={tierColor}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
            fill="none"
          />
        </svg>
        <div className="text-center">
          <div className="text-[54px] font-display leading-none" style={{ color: tierColor }}>
            {score}
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-root-500">Roots Score</div>
          <div className={cn("mt-1 text-xs font-semibold uppercase", "text-root-700")}>{tierLabel}</div>
        </div>
      </div>
    </div>
  );
}
