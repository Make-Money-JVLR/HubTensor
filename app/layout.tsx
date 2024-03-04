import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "HubTensor",
  description: "HubTensor stands out as an AI Infrastructure service provider, prioritizing accessibility alongside innovative features like Privacy Services and App Chains.",
  openGraph: {
    title: "HubTensor",
    description: `HubTensor stands out as an AI Infrastructure service provider, prioritizing accessibility alongside innovative features like Privacy Services and App Chains.`,
    siteName: "These flagship offerings epitomize our commitment to excellence within the blockchain and decentralized industry.",
    // url: new URL(`${process?.env?.REACT_APP_HOST}`),
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
