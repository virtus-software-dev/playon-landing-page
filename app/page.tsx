"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Audience = "player" | "manager";

/* ── Fade-in wrapper ── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ── Data ── */
const managerFeatures = [
  {
    title: "Assistente com IA",
    desc: "Deixe a inteligência artificial cuidar do operacional para você focar no que realmente importa.",
  },
  {
    title: "Métricas que vendem mais",
    desc: "Entenda seus horários mais lucrativos, taxa de ocupação e o que está travando seu crescimento.",
  },
  {
    title: "Controle total das reservas",
    desc: "Visualize, confirme e gerencie todas as reservas em um único painel, sem complicação.",
  },
  {
    title: "Dinheiro direto na sua conta",
    desc: "Os pagamentos caem diretamente no seu banco. Sem intermediários, sem dor de cabeça.",
  },
];

const metrics = [
  { value: "500+", label: "Quadras cadastradas" },
  { value: "20k+", label: "Jogadores ativos" },
  { value: "100k+", label: "Reservas realizadas" },
  { value: "+35%", label: "Aumento médio de faturamento" },
];

const docsCards = [
  { title: "Primeiros Passos", desc: "Configure sua conta e faça sua primeira reserva em minutos." },
  { title: "Integrações", desc: "Conecte o PlayOn com as ferramentas que você já usa." },
  { title: "FAQ", desc: "Respostas para as perguntas mais frequentes." },
];

const howItWorks = [
  {
    step: "01",
    title: "Baixe o app",
    desc: "Disponível para iOS e Android. Grátis, sem cadastro complicado.",
  },
  {
    step: "02",
    title: "Encontre uma quadra",
    desc: "Veja disponibilidade em tempo real perto de você ou em qualquer cidade do Brasil.",
  },
  {
    step: "03",
    title: "Reserve e jogue",
    desc: "Confirme o horário, pague só a sua parte e apareça para jogar.",
  },
];

const sports = [
  "Futsal", "Beach Tennis", "Padel", "Vôlei", "Basquete",
  "Tênis", "Natação", "Handebol", "Society", "Futebol de Campo",
  "Beach Vôlei", "Squash",
];

const testimonials = [
  {
    quote: "Não acredito como é fácil encontrar uma pelada perto de casa. Baixei numa segunda e na terça já estava jogando!",
    name: "Carlos M.",
    handle: "@carlosm_fut",
    initials: "CM",
    color: "#5900F8",
  },
  {
    quote: "O racha automático mudou tudo. Sem mais confusão de cobrar cada um no Pix. Cada um paga a sua parte e pronto.",
    name: "Ana L.",
    handle: "@ana_beach",
    initials: "AL",
    color: "#FF6F00",
  },
  {
    quote: "Conheci mais jogadores em um mês de PlayOn do que em um ano na academia. A comunidade é incrível.",
    name: "Felipe R.",
    handle: "@feliper_padel",
    initials: "FR",
    color: "#16A249",
  },
  {
    quote: "Reservei uma quadra em 30 segundos enquanto estava no trabalho. Chegou a hora do jogo e estava tudo certo.",
    name: "Mariana S.",
    handle: "@mari_volei",
    initials: "MS",
    color: "#DF3644",
  },
  {
    quote: "Melhor app de esporte que já usei. Simples, rápido e funciona de verdade. Recomendo pra todo mundo.",
    name: "Rafael O.",
    handle: "@rafael_bsb",
    initials: "RO",
    color: "#E6C81C",
  },
  {
    quote: "Viajei pra São Paulo e em 5 minutos já tinha uma quadra de beach tennis reservada perto do hotel. Incrível.",
    name: "Juliana P.",
    handle: "@ju_tennis",
    initials: "JP",
    color: "#AB7EFB",
  },
];

/* ── Page ── */
export default function Home() {
  const [audience, setAudience] = useState<Audience>("player");
  const isPlayer = audience === "player";

  // Persist and restore audience selection
  useEffect(() => {
    const stored = localStorage.getItem("playon-audience") as Audience | null;
    if (stored === "player" || stored === "manager") setAudience(stored);
  }, []);
  useEffect(() => {
    localStorage.setItem("playon-audience", audience);
  }, [audience]);

  const accent = isPlayer ? "#5900F8" : "#FF6F00";
  const heroBg = isPlayer ? "#040018" : "#141414";
  const tintBg = isPlayer ? "#F2EBFE" : "#FFF6F0";
  const currentLogo = isPlayer
    ? "/logos/logo-principal-playon-app.svg"
    : "/logos/logo-principal-playon-web.svg";
  const footerLogo = isPlayer
    ? "/logos/logo-playon-simplificada-app.svg"
    : "/logos/logo-playon-simplificada-web.svg";

  useEffect(() => {
    document.querySelectorAll("link[rel~='icon']").forEach((el) => el.remove());
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = isPlayer ? "/favicon-mobile.ico" : "/favicon-web.ico";
    document.head.appendChild(link);
  }, [isPlayer]);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10"
        style={{ backgroundColor: heroBg }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image src={currentLogo} alt="PlayOn" width={120} height={32} priority />

          <div className="hidden md:flex items-center gap-6 text-sm" style={{ color: "#AFAFAF" }}>
            {isPlayer ? (
              <>
                <button onClick={() => scrollTo("como-funciona")} className="hover:text-white transition-colors">Como Funciona</button>
                <button onClick={() => scrollTo("esportes")} className="hover:text-white transition-colors">Esportes</button>
                <button onClick={() => scrollTo("depoimentos")} className="hover:text-white transition-colors">Depoimentos</button>
              </>
            ) : (
              <>
                <button onClick={() => scrollTo("funcionalidades")} className="hover:text-white transition-colors">Funcionalidades</button>
                <button onClick={() => scrollTo("precos")} className="hover:text-white transition-colors">Preços</button>
                <div className="relative group">
                  <button className="hover:text-white transition-colors">Documentação</button>
                  {/* Invisible bridge + dropdown — pt-2 keeps hover area connected, no gap */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div
                      className="relative w-52 rounded-xl shadow-xl"
                      style={{ backgroundColor: "#1E1E1E", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {/* Caret */}
                      <div
                        className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45"
                        style={{ backgroundColor: "#1E1E1E", borderTop: "1px solid rgba(255,255,255,0.1)", borderLeft: "1px solid rgba(255,255,255,0.1)" }}
                      />
                      <div className="p-3 flex flex-col gap-1">
                        <button
                            onClick={() => scrollTo("documentacao")}
                            className="flex items-center gap-2 w-full text-sm text-white/80 hover:text-white transition-colors"
                        >
                          Qual documentação?
                        </button>
                        <a
                          href="/docs"
                          className="flex items-center gap-2 w-full text-sm text-white/80 hover:text-white transition-colors"
                        >
                          Docs
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-4.5L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <button onClick={() => scrollTo("quem-somos")} className="hover:text-white transition-colors">Quem Somos</button>
              </>
            )}
            <a href="/blog" className={isPlayer ? "shimmer-purple" : "shimmer-orange"}>Blog</a>
          </div>

          <div className="flex items-center">
            {isPlayer ? (
              <a
                href="#"
                className="text-sm font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#5900F8", color: "#FFFFFF" }}
              >
                Baixar o App
              </a>
            ) : (
              <a
                href="https://gestor.playon.app.br"
                className="text-sm font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF6F00", color: "#FFFFFF" }}
              >
                Área do Gestor
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center"
        style={{ backgroundColor: heroBg }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 text-center w-full">

          {/* Sliding toggle */}
          <div
            className="relative inline-flex rounded-full p-1 mb-12"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            {/* sliding pill */}
            <span
              className="absolute inset-y-1 rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: "calc(50% - 4px)",
                left: isPlayer ? "4px" : "calc(50%)",
                backgroundColor: isPlayer ? "#5900F8" : "#FF6F00",
              }}
            />
            <button
              onClick={() => setAudience("player")}
              className="relative z-10 w-28 py-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: isPlayer ? "#FFFFFF" : "#AFAFAF" }}
            >
              Sou Jogador
            </button>
            <button
              onClick={() => setAudience("manager")}
              className="relative z-10 w-28 py-2 text-sm font-semibold transition-colors duration-200"
              style={{ color: !isPlayer ? "#FFFFFF" : "#AFAFAF" }}
            >
              Sou Gestor
            </button>
          </div>

          {isPlayer ? (
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Encontre. Reserve.{" "}
                <span className="shimmer-purple">Jogue.</span>
              </h1>
              <p className="text-xl mb-10 max-w-xl mx-auto" style={{ color: "#AFAFAF" }}>
                O app para quem ama esporte. Ache quadras perto de você,
                reserve em segundos e pague tudo pelo celular.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="font-semibold px-8 py-4 rounded-full text-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#5900F8", color: "#FFFFFF" }}
                >
                  Baixar para iOS
                </a>
                <a
                  href="#"
                  className="font-semibold px-8 py-4 rounded-full text-lg border transition-colors"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "#FFFFFF",
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                >
                  Baixar para Android
                </a>
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Gerencie. Automatize.{" "}
                <span className="shimmer-orange">Cresça.</span>
              </h1>
              <p className="text-xl mb-10 max-w-xl mx-auto" style={{ color: "#AFAFAF" }}>
                A plataforma completa para gestores de quadras esportivas.
                Reservas, pagamentos e controle em um só lugar.
              </p>
              <a
                href="https://gestor.playon.app.br"
                className="inline-block font-semibold px-10 py-4 rounded-full text-lg btn-liquid-orange"
              >
                <span>Começar grátis →</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* ── PLAYER SECTIONS ── */}
      {isPlayer && (
        <>
          {/* Como Funciona */}
          <section id="como-funciona" className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#141414" }}>
                  Como funciona
                </h2>
                <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                  Do download à quadra em menos de 2 minutos.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howItWorks.map((s, i) => (
                  <FadeIn key={s.step} delay={i * 120}>
                    <div
                      className="flex flex-col items-center text-center p-8 rounded-2xl h-full"
                      style={{ backgroundColor: "#F2EBFE" }}
                    >
                      <span className="text-5xl font-extrabold mb-4" style={{ color: "#5900F8" }}>
                        {s.step}
                      </span>
                      <h3 className="text-xl font-bold mb-2" style={{ color: "#141414" }}>{s.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>{s.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Esportes */}
          <section id="esportes" className="py-24" style={{ backgroundColor: "#040018" }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  100+ esportes para encontrar no app
                </h2>
                <p className="text-lg mb-12" style={{ color: "#AFAFAF" }}>
                  De beach tennis a futsal. Se tem quadra, tem no PlayOn.
                </p>
              </FadeIn>
              <FadeIn delay={150}>
                <div className="flex flex-wrap justify-center gap-3">
                  {sports.map((sport) => (
                    <span
                      key={sport}
                      className="px-5 py-2 rounded-full text-sm font-medium"
                      style={{
                        backgroundColor: "rgba(89,0,248,0.2)",
                        color: "#AB7EFB",
                        border: "1px solid rgba(171,126,251,0.3)",
                      }}
                    >
                      {sport}
                    </span>
                  ))}
                  <span
                    className="px-5 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "#737373",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    e muito mais...
                  </span>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Depoimentos */}
          <section id="depoimentos" className="bg-white py-24 overflow-hidden">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#141414" }}>
                Quem joga, aprova
              </h2>
              <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                Jogadores de todo o Brasil já estão no PlayOn.
              </p>
            </FadeIn>
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-marquee" style={{ width: "max-content" }}>
                {[...testimonials, ...testimonials].map((t, i) => (
                  <div
                    key={i}
                    className="w-72 flex-shrink-0 p-6 rounded-2xl flex flex-col gap-4 border"
                    style={{ backgroundColor: "#FFFFFF", borderColor: "#F2EBFE" }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                          style={{ backgroundColor: t.color }}
                        >
                          {t.initials}
                        </div>
                        <div>
                          <div className="font-semibold text-sm" style={{ color: "#141414" }}>{t.name}</div>
                          <div className="text-xs" style={{ color: "#AFAFAF" }}>{t.handle}</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "#4E4E4E" }}>
                      "{t.quote}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Player Final CTA */}
          <section className="py-24 text-center" style={{ backgroundColor: "#040018" }}>
            <div className="max-w-2xl mx-auto px-6">
              <FadeIn>
                <h2 className="text-4xl font-extrabold text-white mb-4">Pronto para jogar?</h2>
                <p className="mb-8 text-lg" style={{ color: "#AFAFAF" }}>
                  Baixe o app e faça sua primeira reserva grátis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#"
                    className="font-semibold px-8 py-4 rounded-full text-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#5900F8", color: "#FFFFFF" }}
                  >
                    App Store
                  </a>
                  <a
                    href="#"
                    className="font-semibold px-8 py-4 rounded-full text-lg border transition-colors"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.08)",
                      color: "#FFFFFF",
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                  >
                    Google Play
                  </a>
                </div>
              </FadeIn>
            </div>
          </section>
        </>
      )}

      {/* ── MANAGER SECTIONS ── */}
      {!isPlayer && (
        <>
          {/* Social Proof */}
          <section className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6">
              <FadeIn>
                <p className="text-center text-sm font-semibold uppercase tracking-widest mb-12" style={{ color: "#AFAFAF" }}>
                  Quem adotou o PlayOn já sente a diferença
                </p>
              </FadeIn>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {metrics.map((m, i) => (
                  <FadeIn key={m.label} delay={i * 100}>
                    <div className="text-center">
                      <div className="text-4xl font-extrabold" style={{ color: "#FF6F00" }}>{m.value}</div>
                      <div className="text-sm mt-2" style={{ color: "#737373" }}>{m.label}</div>
                    </div>
                  </FadeIn>
                ))}
              </div>
              <FadeIn delay={200}>
                <div
                  className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                  style={{ backgroundColor: "#FFF6F0" }}
                >
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: "#141414" }}>
                      Suporte que não te deixa na mão
                    </h3>
                    <p style={{ color: "#737373" }}>
                      Time disponível para ajudar você a crescer. Do onboarding ao dia a dia.
                    </p>
                  </div>
                  <a
                    href="mailto:suporte@playon.app.br"
                    className="whitespace-nowrap font-semibold px-6 py-3 rounded-full transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#FF6F00", color: "#FFFFFF" }}
                  >
                    Falar com suporte
                  </a>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Features */}
          <section id="funcionalidades" className="py-24" style={{ backgroundColor: "#FFF6F0" }}>
            <div className="max-w-6xl mx-auto px-6">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#FF6F00" }}>
                  Tudo que você precisa para gerir
                </h2>
                <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                  Tecnologia que trabalha por você enquanto você foca no que importa.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {managerFeatures.map((f, i) => (
                  <FadeIn key={f.title} delay={i * 100}>
                    <div
                      className="p-6 rounded-2xl bg-white border h-full"
                      style={{ borderColor: "#FFF6F0" }}
                    >
                      <h3 className="font-semibold mb-2" style={{ color: "#141414" }}>{f.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>{f.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="precos" className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#141414" }}>
                  Preços e Planos
                </h2>
                <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                  Transparente, simples e sem surpresas.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <FadeIn delay={100}>
                  <div className="rounded-2xl p-8 flex flex-col h-full" style={{ backgroundColor: "#FF6F00" }}>
                    <div className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/70">
                      Gestor — Básico
                    </div>
                    <div className="text-5xl font-extrabold mb-1 text-white">R$149,90</div>
                    <p className="text-sm mb-1 text-white/70">por mês</p>
                    <p className="text-sm mb-8 text-white/70">ou R$1.500/ano — 2 meses grátis</p>
                    <ul className="flex flex-col gap-3 mb-8 flex-1 text-sm text-white/90">
                      <li>✓ Gestão completa de reservas</li>
                      <li>✓ Pagamentos online</li>
                      <li>✓ Assistente com IA</li>
                      <li>✓ Métricas e relatórios</li>
                      <li>✓ Suporte prioritário</li>
                    </ul>
                    <a
                      href="https://gestor.playon.app.br"
                      className="text-center font-semibold px-6 py-3 rounded-full bg-white transition-opacity hover:opacity-90"
                      style={{ color: "#FF6F00" }}
                    >
                      Começar grátis
                    </a>
                  </div>
                </FadeIn>
                <FadeIn delay={200}>
                  <div
                    className="rounded-2xl border p-8 flex flex-col items-center justify-center text-center h-full"
                    style={{ borderColor: "#E0E0E0", borderStyle: "dashed", opacity: 0.65 }}
                  >
                    <div
                      className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
                      style={{ backgroundColor: "#FFF6F0", color: "#FF6F00" }}
                    >
                      Em breve
                    </div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: "#141414" }}>Gestor — Avançado</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>
                      Muito mais, por menos!
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Documentation */}
          <section id="documentacao" className="py-24" style={{ backgroundColor: "#F6F6F6" }}>
            <div className="max-w-6xl mx-auto px-6">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#141414" }}>
                  Documentação
                </h2>
                <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                  Tudo que você precisa para integrar e usar o PlayOn ao máximo.
                </p>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {docsCards.map((d, i) => (
                  <FadeIn key={d.title} delay={i * 100}>
                    <div
                      className="bg-white rounded-2xl p-6 border relative overflow-hidden cursor-not-allowed h-full"
                      style={{ borderColor: "#E0E0E0" }}
                    >
                      <span
                        className="absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: "#F6F6F6", color: "#AFAFAF" }}
                      >
                        Em breve
                      </span>
                      <h3 className="font-semibold mb-2" style={{ color: "#141414" }}>{d.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>{d.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Quem Somos */}
          <section id="quem-somos" className="bg-white py-24">
            <div className="max-w-3xl mx-auto px-6 text-center">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#141414" }}>
                  Quem somos
                </h2>
                <p className="text-lg leading-relaxed mb-10" style={{ color: "#737373" }}>
                  Somos a <strong style={{ color: "#141414" }}>Virtus Software</strong>, uma empresa
                  apaixonada por tecnologia e esporte. O PlayOn nasceu da vontade de conectar jogadores
                  e simplificar a gestão de quadras esportivas no Brasil. Acreditamos que tecnologia
                  bem feita transforma negócios — e a experiência de quem joga.
                </p>
                <a
                  href="https://virtus.dev.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-semibold px-8 py-4 rounded-full text-lg transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#141414", color: "#FFFFFF" }}
                >
                  Conheça a Virtus →
                </a>
              </FadeIn>
            </div>
          </section>

          {/* Manager Final CTA */}
          <section className="py-20 overflow-hidden" style={{ backgroundColor: "#FBBC7E" }}>
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
              <FadeIn className="flex-1">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4" style={{ color: "#141414" }}>
                  Você chegou no<br />fim da página.
                </h2>
                <p className="text-lg mb-8" style={{ color: "#3D1A00" }}>
                  Se chegou até aqui, é porque tá interessado.<br />
                  Então vai lá, cria logo a sua conta.
                </p>
                <a
                  href="https://gestor.playon.app.br"
                  className="inline-flex font-semibold px-8 py-4 rounded-full text-base btn-liquid-dark"
                >
                  <span>Vai, clica nesse botão →</span>
                </a>
              </FadeIn>
              <div className="flex-1 flex justify-center items-end">
                <Image src="/image-CTA.png" alt="" width={540} height={500} className="object-contain" />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="border-t py-10" style={{ backgroundColor: "#141414", borderColor: "#4E4E4E" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <Image src={footerLogo} alt="PlayOn" width={80} height={32} />
            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#737373" }}>
              {isPlayer ? (
                <>
                  <button onClick={() => scrollTo("como-funciona")} className="hover:text-white transition-colors">Como Funciona</button>
                  <button onClick={() => scrollTo("esportes")} className="hover:text-white transition-colors">Esportes</button>
                  <button onClick={() => scrollTo("depoimentos")} className="hover:text-white transition-colors">Depoimentos</button>
                </>
              ) : (
                <>
                  <button onClick={() => scrollTo("funcionalidades")} className="hover:text-white transition-colors">Funcionalidades</button>
                  <button onClick={() => scrollTo("precos")} className="hover:text-white transition-colors">Preços</button>
                  <button onClick={() => scrollTo("documentacao")} className="hover:text-white transition-colors">Documentação</button>
                  <button onClick={() => scrollTo("quem-somos")} className="hover:text-white transition-colors">Quem Somos</button>
                </>
              )}
            </div>
            <div className="flex gap-6 text-sm" style={{ color: "#737373" }}>
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
          <div
            className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderColor: "#4E4E4E" }}
          >
            <p className="text-sm" style={{ color: "#737373" }}>
              © {new Date().getFullYear()} PlayOn. Todos os direitos reservados.
            </p>
            <a
              href="https://virtus.dev.br"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-opacity hover:opacity-80"
            >
              <span className="text-sm" style={{ color: "#737373" }}>by</span>
              <Image src="/logos/logo-virtus-simplificada.svg" alt="Virtus Software" width={40} height={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
