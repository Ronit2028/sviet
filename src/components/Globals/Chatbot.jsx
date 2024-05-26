"use client"

import React, { useEffect } from 'react';

const NIAAChatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://chatbot.in5.nopaperforms.com/en-gb/backend/bots/niaachtbtscpt.js/515162010e4b28c09/bb2ed9cf9c63476491b68cab8a7528cf';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="npf_chatbots" data-w="bb2ed9cf9c63476491b68cab8a7528cf" style={{ display: 'none' }}></div>
  );
};

export default NIAAChatbot;
