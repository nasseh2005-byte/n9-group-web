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
      <path
        d="M90 120L180 260L310 160L430 320L570 170L720 300L810 150"
        fill="none"
        stroke="rgba(10,132,255,0.34)"
      />
      {points.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="rgba(10,132,255,0.9)" />
      ))}
    </svg>
  );
}
