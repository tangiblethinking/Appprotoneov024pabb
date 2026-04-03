import React, { useEffect } from 'react';

interface PrototypeOverlayProps {
  url: string;
  onClose: () => void;
}

export function PrototypeOverlay({ url, onClose }: PrototypeOverlayProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className="prototype-overlay"
      style={{
        position: 'absolute',
        // sits flush below the 64px modal header, filling everything else
        top: 64,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
        zIndex: 50,
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.2s ease-out',
      }}
    >
      <iframe
        src={url}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Prototype Preview"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
