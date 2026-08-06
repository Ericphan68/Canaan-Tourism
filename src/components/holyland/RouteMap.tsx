interface Stop {
  place: string;
  meaning: string;
}

/**
 * Bản đồ tuyến hành trình — Route Line hiện thực hoá thành một cung đường
 * champagne nối các điểm dừng. Không dùng bản đồ địa lý thật (giữ nhẹ & on-brand).
 */
export function RouteMap({ stops }: { stops: Stop[] }) {
  const width = 1000;
  const height = 260;
  const padX = 90;
  const usable = width - padX * 2;
  const n = stops.length;

  const points = stops.map((stop, i) => {
    const x = n === 1 ? width / 2 : padX + (usable * i) / (n - 1);
    // Cung sóng nhẹ để đường trông như một hành trình.
    const y = height / 2 + Math.sin((i / Math.max(1, n - 1)) * Math.PI) * -46;
    return { ...stop, x, y };
  });

  const path = points
    .map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`))
    .join(' ');

  return (
    <div className="overflow-x-auto rounded-2xl bg-midnight p-4 sm:p-6">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full min-w-[36rem]" role="img" aria-label="Bản đồ tuyến hành trình">
        {/* đường nét đứt champagne */}
        <path d={path} fill="none" stroke="#C6A15B" strokeWidth={2} strokeDasharray="2 7" strokeLinecap="round" opacity={0.85} />
        {points.map((p, i) => (
          <g key={p.place}>
            <circle cx={p.x} cy={p.y} r={7} fill="#0A1E3C" stroke="#C6A15B" strokeWidth={2} />
            <circle cx={p.x} cy={p.y} r={2.5} fill="#C6A15B" />
            <text x={p.x} y={p.y - 18} textAnchor="middle" fill="#FAF7F0" fontSize={16} fontWeight={600}>
              {p.place}
            </text>
            <text x={p.x} y={p.y + 30} textAnchor="middle" fill="#C6A15B" fontSize={11}>
              {String(i + 1).padStart(2, '0')}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
