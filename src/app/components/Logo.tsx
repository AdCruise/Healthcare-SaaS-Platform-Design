export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer hexagon shape */}
          <path
            d="M20 2L36.6603 11V29L20 38L3.33975 29V11L20 2Z"
            className="stroke-accent"
            strokeWidth="2"
            fill="none"
          />
          {/* Inner connection symbol */}
          <circle cx="14" cy="20" r="3" className="fill-accent" />
          <circle cx="26" cy="20" r="3" className="fill-accent" />
          <line
            x1="17"
            y1="20"
            x2="23"
            y2="20"
            className="stroke-accent"
            strokeWidth="2"
          />
          {/* Medical cross element */}
          <path
            d="M20 12V16M20 24V28M16 20H24"
            className="stroke-foreground"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col -space-y-1">
        <span className="text-xl font-semibold tracking-tight">MediSync</span>
        <span className="text-[10px] tracking-widest text-muted-foreground uppercase">
          Healthcare Bridge
        </span>
      </div>
    </div>
  );
}
