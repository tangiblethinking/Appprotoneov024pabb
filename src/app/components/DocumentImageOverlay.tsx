import React, { useEffect } from 'react';

interface DocumentImageOverlayProps {
  url: string;
  onClose: () => void;
}

export function DocumentImageOverlay({ url, onClose }: DocumentImageOverlayProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className="document-image-overlay"
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
        overflowY: 'auto',
        animation: 'fadeIn 0.2s ease-out',
        // scroll-snap so mobile feels native
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <img
        src={url}
        alt="Document preview"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          // no max-width so it fills the overlay width-first and resizes with window
        }}
      />
    </div>
  );
}
