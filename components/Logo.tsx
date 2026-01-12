export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon: Musical note with gradient */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Gradient background circle */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-accent to-primary/80 opacity-90" />

        {/* Musical note icon */}
        <svg
          className="relative w-6 h-6 text-white z-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3v13.5M12 16.5a3 3 0 11-3 3 3 3 0 013-3zm0 0V3l7 2v11m0 0a3 3 0 11-3 3 3 3 0 013-3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Sparkle effect */}
        <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full animate-pulse" />
      </div>

      {/* Text Logo */}
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold tracking-tight text-foreground">LyricGenerator</span>
        <span className="text-[10px] font-medium text-muted-foreground tracking-wider uppercase">.cc</span>
      </div>
    </div>
  )
}

// Compact version for mobile
export function LogoCompact({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-9 h-9 flex items-center justify-center">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary via-accent to-primary/80" />
        <svg
          className="relative w-5 h-5 text-white z-10"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 3v13.5M12 16.5a3 3 0 11-3 3 3 3 0 013-3zm0 0V3l7 2v11m0 0a3 3 0 11-3 3 3 3 0 013-3z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold text-foreground">LyricGen</span>
        <span className="text-[9px] font-medium text-muted-foreground tracking-wide">.cc</span>
      </div>
    </div>
  )
}
