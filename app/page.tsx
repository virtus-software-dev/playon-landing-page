"use client";

import { useState } from "react";
import Image from "next/image";

type Audience = "player" | "manager";

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
  { title: "API Reference", desc: "Documentação completa dos endpoints disponíveis." },
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
    sport: "Futsal · São Paulo",
  },
  {
    quote: "O racha automático mudou tudo. Sem mais confusão de cobrar cada um no Pix. Cada um paga a sua parte e pronto.",
    name: "Ana L.",
    sport: "Beach Tennis · Rio de Janeiro",
  },
  {
    quote: "Conheci mais jogadores em um mês de PlayOn do que em um ano na academia. A comunidade é incrível.",
    name: "Felipe R.",
    sport: "Padel · Belo Horizonte",
  },
];

export default function Home() {
  const [audience, setAudience] = useState<Audience>("player");
  const isPlayer = audience === "player";

  const accent = isPlayer ? "#5900F8" : "#FF6F00";
  const heroBg = isPlayer ? "#040018" : "#141414";
  const tintBg = isPlayer ? "#F2EBFE" : "#FFF6F0";
  const currentLogo = isPlayer
    ? "/logos/logo-principal-playon-app.svg"
    : "/logos/logo-principal-playon-web.svg";

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
                <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
                <a href="#esportes" className="hover:text-white transition-colors">Esportes</a>
                <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
              </>
            ) : (
              <>
                <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
                <a href="#precos" className="hover:text-white transition-colors">Preços</a>
                <a href="#documentacao" className="hover:text-white transition-colors">Documentação</a>
                <a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a>
              </>
            )}
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
          {/* THE single audience toggle */}
          <div
            className="inline-flex items-center rounded-full p-1 mb-12"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <button
              onClick={() => setAudience("player")}
              className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                backgroundColor: isPlayer ? "#5900F8" : "transparent",
                color: isPlayer ? "#FFFFFF" : "#AFAFAF",
              }}
            >
              Sou Jogador
            </button>
            <button
              onClick={() => setAudience("manager")}
              className="px-6 py-2 rounded-full text-sm font-semibold transition-all"
              style={{
                backgroundColor: !isPlayer ? "#FF6F00" : "transparent",
                color: !isPlayer ? "#FFFFFF" : "#AFAFAF",
              }}
            >
              Sou Gestor
            </button>
          </div>

          {isPlayer ? (
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                Encontre. Reserve.{" "}
                <span style={{ color: "#AB7EFB" }}>Jogue.</span>
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
                <span style={{ color: "#FBBC7E" }}>Cresça.</span>
              </h1>
              <p className="text-xl mb-10 max-w-xl mx-auto" style={{ color: "#AFAFAF" }}>
                A plataforma completa para gestores de quadras esportivas.
                Reservas, pagamentos e controle em um só lugar.
              </p>
              <a
                href="https://gestor.playon.app.br"
                className="inline-block font-semibold px-10 py-4 rounded-full text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF6F00", color: "#FFFFFF" }}
              >
                Começar grátis →
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#141414" }}>
                Como funciona
              </h2>
              <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                Do download à quadra em menos de 2 minutos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {howItWorks.map((s) => (
                  <div key={s.step} className="flex flex-col items-center text-center p-8 rounded-2xl" style={{ backgroundColor: "#F2EBFE" }}>
                    <span className="text-5xl font-extrabold mb-4" style={{ color: "#5900F8" }}>
                      {s.step}
                    </span>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#141414" }}>{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Esportes */}
          <section id="esportes" className="py-24" style={{ backgroundColor: "#040018" }}>
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                100+ esportes para encontrar no app
              </h2>
              <p className="text-lg mb-12" style={{ color: "#AFAFAF" }}>
                De beach tennis a futsal. Se tem quadra, tem no PlayOn.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {sports.map((sport) => (
                  <span
                    key={sport}
                    className="px-5 py-2 rounded-full text-sm font-medium"
                    style={{ backgroundColor: "rgba(89,0,248,0.2)", color: "#AB7EFB", border: "1px solid rgba(171,126,251,0.3)" }}
                  >
                    {sport}
                  </span>
                ))}
                <span
                  className="px-5 py-2 rounded-full text-sm font-medium"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)", color: "#737373", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  e muito mais...
                </span>
              </div>
            </div>
          </section>

          {/* Depoimentos */}
          <section id="depoimentos" className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#141414" }}>
                Quem joga, aprova
              </h2>
              <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                Jogadores de todo o Brasil já estão no PlayOn.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t) => (
                  <div
                    key={t.name}
                    className="p-8 rounded-2xl flex flex-col gap-4"
                    style={{ backgroundColor: "#F2EBFE" }}
                  >
                    <p className="text-sm leading-relaxed flex-1" style={{ color: "#4E4E4E" }}>
                      "{t.quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-sm" style={{ color: "#141414" }}>{t.name}</div>
                      <div className="text-xs" style={{ color: "#AB7EFB" }}>{t.sport}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Player Final CTA */}
          <section className="py-24 text-center" style={{ backgroundColor: "#040018" }}>
            <div className="max-w-2xl mx-auto px-6">
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
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "#FFFFFF", borderColor: "rgba(255,255,255,0.2)" }}
                >
                  Google Play
                </a>
              </div>
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
              <p className="text-center text-sm font-semibold uppercase tracking-widest mb-12" style={{ color: "#AFAFAF" }}>
                Quem adotou o PlayOn já sente a diferença
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-4xl font-extrabold" style={{ color: "#FF6F00" }}>{m.value}</div>
                    <div className="text-sm mt-2" style={{ color: "#737373" }}>{m.label}</div>
                  </div>
                ))}
              </div>
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
            </div>
          </section>

          {/* Features */}
          <section id="funcionalidades" className="py-24" style={{ backgroundColor: "#FFF6F0" }}>
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#FF6F00" }}>
                Tudo que você precisa para gerir
              </h2>
              <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                Tecnologia que trabalha por você enquanto você foca no que importa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {managerFeatures.map((f) => (
                  <div
                    key={f.title}
                    className="p-6 rounded-2xl bg-white border"
                    style={{ borderColor: "#FFF6F0" }}
                  >
                    <h3 className="font-semibold mb-2" style={{ color: "#141414" }}>{f.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#737373" }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="precos" className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#141414" }}>
                Preços e Planos
              </h2>
              <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                Transparente, simples e sem surpresas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">

                {/* Manager — Basic */}
                <div className="rounded-2xl p-8 flex flex-col" style={{ backgroundColor: "#FF6F00" }}>
                  <div className="text-xs font-semibold uppercase tracking-widest mb-4 text-white/70">
                    Gestor — Básico
                  </div>
                  <div className="text-5xl font-extrabold mb-1 text-white">R$150</div>
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

                {/* Manager — Avançado (coming soon) */}
                <div
                  className="rounded-2xl border p-8 flex flex-col items-center justify-center text-center"
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
              </div>
            </div>
          </section>

          {/* Documentation */}
          <section id="documentacao" className="py-24" style={{ backgroundColor: "#F6F6F6" }}>
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#141414" }}>
                Documentação
              </h2>
              <p className="text-center mb-16 text-lg" style={{ color: "#737373" }}>
                Tudo que você precisa para integrar e usar o PlayOn ao máximo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {docsCards.map((d) => (
                  <div
                    key={d.title}
                    className="bg-white rounded-2xl p-6 border relative overflow-hidden cursor-not-allowed"
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
                ))}
              </div>
            </div>
          </section>

          {/* Quem Somos */}
          <section id="quem-somos" className="bg-white py-24">
            <div className="max-w-3xl mx-auto px-6 text-center">
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
            </div>
          </section>

          {/* Manager Final CTA */}
          <section className="py-24 text-center" style={{ backgroundColor: "#141414" }}>
            <div className="max-w-2xl mx-auto px-6">
              <h2 className="text-4xl font-extrabold text-white mb-4">Comece hoje mesmo</h2>
              <p className="mb-8 text-lg" style={{ color: "#AFAFAF" }}>
                Crie sua conta gratuitamente e comece a receber reservas ainda hoje.
              </p>
              <a
                href="https://gestor.playon.app.br"
                className="inline-block font-semibold px-10 py-4 rounded-full text-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF6F00", color: "#FFFFFF" }}
              >
                Criar conta grátis →
              </a>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="border-t py-10" style={{ backgroundColor: "#141414", borderColor: "#4E4E4E" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <Image src={currentLogo} alt="PlayOn" width={120} height={32} />
            <div className="flex flex-wrap justify-center gap-6 text-sm" style={{ color: "#737373" }}>
              {isPlayer ? (
                <>
                  <a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a>
                  <a href="#esportes" className="hover:text-white transition-colors">Esportes</a>
                  <a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a>
                </>
              ) : (
                <>
                  <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
                  <a href="#precos" className="hover:text-white transition-colors">Preços</a>
                  <a href="#documentacao" className="hover:text-white transition-colors">Documentação</a>
                  <a href="#quem-somos" className="hover:text-white transition-colors">Quem Somos</a>
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
              <Image src="/logos/logo-principal-virtus.svg" alt="Virtus Software" width={80} height={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
