"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Audience = "player" | "manager";

export default function Blog() {
  const [audience, setAudience] = useState<Audience>("player");

  useEffect(() => {
    const stored = localStorage.getItem("playon-audience") as Audience | null;
    if (stored === "player" || stored === "manager") setAudience(stored);
  }, []);

  const isPlayer = audience === "player";
  const accent = isPlayer ? "#5900F8" : "#FF6F00";
  const heroBg = isPlayer ? "#040018" : "#141414";
  const logo = isPlayer
    ? "/logos/logo-principal-playon-app.svg"
    : "/logos/logo-principal-playon-web.svg";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: heroBg }}>
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
        style={{ backgroundColor: heroBg }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/">
            <Image src={logo} alt="PlayOn" width={120} height={32} priority />
          </Link>
          <Link href="/" className="text-sm transition-colors" style={{ color: "#AFAFAF" }}>
            ← Voltar
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center justify-center pt-16 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: accent }}>
          Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Nenhum post ainda.
        </h1>
        <p className="text-lg max-w-md" style={{ color: "#AFAFAF" }}>
          Em breve traremos dicas, novidades e conteúdo sobre esporte e gestão de quadras.
        </p>
      </main>
    </div>
  );
}
