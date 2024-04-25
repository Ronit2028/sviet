import { useEffect } from 'react';

const BookReleaseWidget = () => {
  useEffect(() => {
    let emwgtsScript;
    let trackScript;

    const loadScripts = async () => {
      try {
        // Load emwgts.js script
        emwgtsScript = document.createElement('script');
        emwgtsScript.src = 'https://widgets.in5.nopaperforms.com/emwgts.js';
        emwgtsScript.async = true;
        document.body.appendChild(emwgtsScript);

        // Load track.js script
        trackScript = document.createElement('script');
        trackScript.src = 'https://track.nopaperforms.com/js/track.js';
        trackScript.async = true;
        document.body.appendChild(trackScript);
      } catch (error) {
        console.error('Error loading scripts:', error);
      }
    };

    loadScripts();

    // Cleanup: remove the added scripts when component unmounts
    return () => {
      if (emwgtsScript) {
        document.body.removeChild(emwgtsScript);
      }
      if (trackScript) {
        document.body.removeChild(trackScript);
      }
    };
  }, []);

  return (
    <div className="npf_wgts" data-height="600px" data-w="135f884902b93f3745b198105f33a948"></div>
  );
};

export default BookReleaseWidget;
