import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlayOn — Reserve sua quadra",
  description: "O app para quem ama esporte. Encontre e reserve quadras perto de você.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col">{children}</body>
    </html>
  );
}
