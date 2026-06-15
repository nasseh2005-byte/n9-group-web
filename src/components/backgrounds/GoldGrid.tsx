export function GoldGrid() {
  return (
    <svg className="pattern pattern-grid" viewBox="0 0 800 500" aria-hidden="true">
      <defs>
        <pattern id="goldGrid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="rgba(214,168,79,0.15)" />
        </pattern>
      </defs>
      <rect width="800" height="500" fill="url(#goldGrid)" />
    </svg>
  );
}
