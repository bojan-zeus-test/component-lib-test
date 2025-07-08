import { useEffect } from 'react';

export const Vimeo = ({ videoId }: { videoId: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://player.vimeo.com/api/player.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      style={{
        paddingBottom: '56.25%',
        position: 'relative',
      }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title="Zeus Demo Webinar intro"
      ></iframe>
    </div>
  );
};
