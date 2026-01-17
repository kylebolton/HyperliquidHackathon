import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-950 relative overflow-x-hidden">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top gradient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
        
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(74, 222, 128, 0.5) 1px, transparent 0)`,
            backgroundSize: '48px 48px',
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
