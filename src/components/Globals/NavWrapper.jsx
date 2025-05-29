"use client";
import { usePathname } from "next/navigation";
import { ComplexNavbar } from "@/components/Globals/Nav";

const HIDDEN_PATHS = [
  "/admission1",
  
];

export default function NavWrapper() {
  const pathname = usePathname();
  if (HIDDEN_PATHS.includes(pathname.replace(/\/$/, ""))) {
    return null;
  }
  return <ComplexNavbar />;
}