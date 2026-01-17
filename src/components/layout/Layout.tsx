import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative">
      {/* Gradient overlays */}
      <div className="fixed inset-0 pointer-events-none z-[1]">
        {/* Top green gradient glow - larger and smoother */}
        <div 
          className="absolute inset-x-0 top-0 h-[600px]"
          style={{
            background: `
              radial-gradient(ellipse 100% 100% at 50% -30%, rgba(74, 222, 128, 0.15) 0%, rgba(34, 197, 94, 0.05) 40%, transparent 70%),
              radial-gradient(ellipse 80% 60% at 30% 20%, rgba(74, 222, 128, 0.08) 0%, transparent 50%),
              radial-gradient(ellipse 80% 60% at 70% 20%, rgba(34, 197, 94, 0.06) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Center ambient glow */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(74, 222, 128, 0.03) 0%, transparent 60%)',
          }}
        />
        
        {/* Bottom subtle gradient */}
        <div 
          className="absolute inset-x-0 bottom-0 h-[300px]"
          style={{
            background: 'linear-gradient(to top, rgba(3, 7, 18, 0.8) 0%, transparent 100%)',
          }}
        />
        
        {/* Subtle noise texture for depth */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Header />
      
      <main className="relative z-10 pt-24 sm:pt-28 pb-8 safe-bottom">
        {children}
      </main>
    </div>
  );
}
