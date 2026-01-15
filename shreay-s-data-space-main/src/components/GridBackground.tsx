const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(174 72% 56% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(174 72% 56% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Radial Fade */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, hsl(222 47% 6%) 70%)',
        }}
      />
      
      {/* Top Gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-40"
        style={{
          background: 'linear-gradient(to bottom, hsl(222 47% 6%), transparent)',
        }}
      />
    </div>
  );
};

export default GridBackground;
