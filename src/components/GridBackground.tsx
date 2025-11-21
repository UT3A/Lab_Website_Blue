export function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-15">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(20, 184, 166, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(20, 184, 166, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(255, 255, 255, 0.9) 100%)',
        }}
      />
    </div>
  );
}
