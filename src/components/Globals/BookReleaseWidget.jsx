"use client"

import { useEffect } from 'react';

const BookReleaseWidget = () => {
  useEffect(() => {
    // Create and append script for widgets
    const widgetsScript = document.createElement("script");
    widgetsScript.type = "text/javascript";
    widgetsScript.async = true;
    widgetsScript.src = "https://widgets.in5.nopaperforms.com/emwgts.js";
    document.body.appendChild(widgetsScript);

    // Create and append tracking script
    const trackingScript = document.createElement("script");
    trackingScript.type = "text/javascript";
    trackingScript.async = true;
    trackingScript.src = "https://track.nopaperforms.com/js/track.js";
    document.body.appendChild(trackingScript);

    return () => {
      // Cleanup: remove the added scripts when component unmounts
      document.body.removeChild(widgetsScript);
      document.body.removeChild(trackingScript);
    };
  }, []);

  return (
    <div className="npf_wgts" data-height="600px" data-w="135f884902b93f3745b198105f33a948"></div>
  );
};

export default BookReleaseWidget;
