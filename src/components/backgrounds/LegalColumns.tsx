export function LegalColumns() {
  return (
    <svg className="pattern pattern-legal" viewBox="0 0 900 700" aria-hidden="true">
      <defs>
        <linearGradient id="legalGold" x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(214,168,79,0)" />
          <stop offset="50%" stopColor="rgba(214,168,79,0.58)" />
          <stop offset="100%" stopColor="rgba(214,168,79,0)" />
        </linearGradient>
      </defs>
      {[120, 260, 400, 540, 680].map((x) => (
        <g key={x}>
          <rect x={x} y="170" width="52" height="360" rx="26" fill="none" stroke="url(#legalGold)" />
          <path d={`M${x - 22} 150h96M${x - 22} 550h96`} stroke="rgba(214,168,79,0.42)" strokeWidth="2" />
        </g>
      ))}
      <path d="M160 120h520M190 590h460" stroke="rgba(245,245,247,0.12)" />
      <path d="M450 112v118" stroke="rgba(245,245,247,0.2)" />
      <path d="M352 212h196M352 212l-46 86h92l-46-86ZM548 212l-46 86h92l-46-86Z" stroke="rgba(245,245,247,0.28)" fill="none" />
    </svg>
  );
}
