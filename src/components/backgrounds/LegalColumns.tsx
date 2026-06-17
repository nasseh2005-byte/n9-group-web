export function LegalColumns() {
  return (
    <svg className="pattern pattern-legal" viewBox="0 0 900 700" aria-hidden="true">
      <defs>
        <linearGradient id="legalGold" x1="0" x2="1">
          <stop offset="0%" stopColor="rgba(214,168,79,0)" />
          <stop offset="50%" stopColor="rgba(216,180,95,0.72)" />
          <stop offset="100%" stopColor="rgba(214,168,79,0)" />
        </linearGradient>
        <radialGradient id="legalGlow" cx="50%" cy="38%" r="58%">
          <stop offset="0%" stopColor="rgba(216,180,95,0.16)" />
          <stop offset="70%" stopColor="rgba(216,180,95,0)" />
        </radialGradient>
      </defs>
      <ellipse cx="450" cy="330" rx="360" ry="260" fill="url(#legalGlow)" />
      {[120, 260, 400, 540, 680].map((x) => (
        <g key={x}>
          <rect x={x} y="170" width="52" height="360" rx="26" fill="none" stroke="url(#legalGold)" />
          <path d={`M${x - 22} 150h96M${x - 22} 550h96`} stroke="rgba(214,168,79,0.42)" strokeWidth="2" />
        </g>
      ))}
      <path d="M160 120h520M190 590h460" stroke="rgba(245,245,247,0.12)" />
      <path d="M450 112v118" stroke="rgba(245,245,247,0.2)" />
      <path d="M352 212h196M352 212l-46 86h92l-46-86ZM548 212l-46 86h92l-46-86Z" stroke="rgba(245,245,247,0.28)" fill="none" />
      <path d="M450 106c30 0 54 12 54 27s-24 27-54 27-54-12-54-27 24-27 54-27Z" fill="none" stroke="rgba(216,180,95,0.3)" />
      <path d="M270 120c54 12 112 12 166 0M464 120c54 12 112 12 166 0" stroke="rgba(216,180,95,0.22)" fill="none" />
    </svg>
  );
}
