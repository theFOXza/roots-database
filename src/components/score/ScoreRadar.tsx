interface ScoreRadarProps {
  values: number[];
  labels: string[];
  tierColor: string;
}

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (Math.PI / 180) * angle;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad)
  };
}

export function ScoreRadar({ values, labels, tierColor }: ScoreRadarProps) {
  const size = 280;
  const center = size / 2;
  const maxRadius = 110;
  const angles = [-90, -18, 54, 126, 198];
  const gridLevels = [20, 40, 60, 80, 100];

  const points = values.map((value, index) => {
    const radius = (value / 100) * maxRadius;
    const point = polarToCartesian(center, center, radius, angles[index]);
    return `${point.x},${point.y}`;
  });

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {gridLevels.map((level) => {
          const radius = (level / 100) * maxRadius;
          const gridPoints = angles.map((angle) => {
            const point = polarToCartesian(center, center, radius, angle);
            return `${point.x},${point.y}`;
          });

          return (
            <polygon
              key={level}
              points={gridPoints.join(" ")}
              fill="none"
              stroke="#E0D5C5"
              strokeWidth="1"
            />
          );
        })}
        <polygon
          points={points.join(" ")}
          fill={tierColor}
          fillOpacity="0.35"
          stroke={tierColor}
          strokeWidth="2"
        />
        {points.map((point, index) => (
          <circle key={labels[index]} cx={point.split(",")[0]} cy={point.split(",")[1]} r="4" fill={tierColor} />
        ))}
      </svg>
      <div className="grid w-full grid-cols-1 gap-1 text-xs text-root-600">
        {labels.map((label, index) => (
          <div key={label} className="flex items-center justify-between">
            <span>{label}</span>
            <span className="font-semibold text-root-700">{values[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
