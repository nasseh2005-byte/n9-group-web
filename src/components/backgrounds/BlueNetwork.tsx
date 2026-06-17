export function BlueNetwork() {
  const points = [
    [90, 120],
    [180, 260],
    [310, 160],
    [430, 320],
    [570, 170],
    [720, 300],
    [810, 150]
  ];

  return (
    <svg className="pattern pattern-network" viewBox="0 0 900 520" aria-hidden="true">
      <defs>
        <linearGradient id="networkBlueGold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="rgba(26,140,255,0.18)" />
          <stop offset="0.54" stopColor="rgba(26,140,255,0.68)" />
          <stop offset="1" stopColor="rgba(216,180,95,0.38)" />
        </linearGradient>
        <radialGradient id="networkPulse" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="rgba(26,140,255,0.72)" />
          <stop offset="1" stopColor="rgba(26,140,255,0)" />
        </radialGradient>
      </defs>
      <rect x="42" y="42" width="790" height="420" rx="28" fill="none" stroke="rgba(255,255,255,0.05)" />
      <path d="M60 76H250V126H360" fill="none" stroke="rgba(216,180,95,0.18)" strokeDasharray="8 12" />
      <path d="M538 78H782V214H842" fill="none" stroke="rgba(26,140,255,0.24)" strokeDasharray="10 10" />
      <path d="M128 392H288V338H470V418H760" fill="none" stroke="rgba(26,140,255,0.2)" />
      <path
        d="M90 120L180 260L310 160L430 320L570 170L720 300L810 150"
        fill="none"
        stroke="url(#networkBlueGold)"
        strokeWidth="2"
      />
      <path
        d="M180 260L300 386L430 320L552 430L720 300"
        fill="none"
        stroke="rgba(255,255,255,0.1)"
        strokeWidth="1"
      />
      <ellipse cx="492" cy="255" rx="260" ry="190" fill="url(#networkPulse)" opacity="0.18" />
      {points.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <circle cx={x} cy={y} r="17" fill="rgba(10,132,255,0.08)" />
          <circle cx={x} cy={y} r="7" fill="rgba(10,132,255,0.9)" />
        </g>
      ))}
      <circle cx="430" cy="320" r="11" fill="none" stroke="rgba(216,180,95,0.72)" />
      <circle cx="720" cy="300" r="11" fill="none" stroke="rgba(216,180,95,0.56)" />
    </svg>
  );
}
