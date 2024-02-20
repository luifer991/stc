import "./globals.css";
import { NavBar } from "@/app/UI/NavBar";
import { bevan } from "./Components/fonts";
import Footer from "./UI/Footer";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "STC | Sistema Táctico de Combate",
  description: "STC es un sistema de defensa personal que se adapta a cada usuario",
  icons: {
    icon: '/goldenshield.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" >
      <head>
        <link rel="shortcut icon" href="/goldenshield.png" type="image/x-icon" />
      </head>
      <link rel="icon" href="src\app\favicon.ico" />
      <body className={bevan.className}>
      <NavBar />
        {children}
      <Footer />
      </body>
    </html>
  );
}
