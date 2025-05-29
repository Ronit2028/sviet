"use client";

import { useEffect, useState } from "react";

const WhatsappIconWrapper = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname.replace(/\/$/, "");
    const excludedPaths = [
      "/",
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
      "admission1"
    ];
    if (!excludedPaths.includes(currentPath)) {
      setShowIcon(true);
    }
  }, []);

  if (!showIcon) return null;

  return (
    <a
      href="https://wa.me/7347411011"
      className="shadow-sm p-2 mr-8 mt-[-175px] bg-green-700 text-white h-13 w-13 text-5xl flex items-center justify-center rounded-full mb-3"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsappIconWrapper;
