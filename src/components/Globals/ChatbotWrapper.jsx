// components/Globals/NIAAChatbotWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import Chatbot from "./Chatbot";

const ChatbotWrapper = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const excludedPaths = [
      "/admission-bihar",
      "/admission-bihar1",
      "/admission-bihar2",
      "/admission-bihar3",
      "/admission-bihar4",
      "/admission-bihar5",
      "/admission-bihar6",
      "/admission-bihar7",
      "/admission-bihar8",
      "/admission-bihar9",
      "/admission-bihar10",
      "/admission1"
    ];

    if (!excludedPaths.includes(currentPath)) {
      setShowChatbot(true);
    }
  }, []);

  return showChatbot ? <Chatbot /> : null;
};

export default ChatbotWrapper;
