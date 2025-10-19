export default function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-primary" />
              <line x1="50" y1="50" x2="75" y2="25" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <line x1="50" y1="50" x2="25" y2="75" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto text-center space-y-4">
        <p className="text-lg font-semibold text-foreground">Built for the Future | Project MARCOS</p>
        <p className="text-sm text-muted-foreground">© 2025 MARCOS Systems. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
