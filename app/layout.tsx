import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Head from "next/head";



export const metadata: Metadata = {
  title: "HubTensor",
  description: "HubTensor stands out as an AI Infrastructure service provider, prioritizing accessibility alongside innovative features like Privacy Services and App Chains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>HubTensor</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
