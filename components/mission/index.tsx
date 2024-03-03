import Card from "./Card";
import Image from "next/image";
import logoSolana from "@/images/logoSolana.png";
import logoPay from "@/images/logoPay.png";
import logoLido from "@/images/logoLido.png";
import logoLayerZero from "@/images/logoLayerZero.png";
import logoLinea from "@/images/logoLinea.png";
import Tag from "../content/Tag";

function Mission() {
  const cards = [
    {
      title: "AI INFRASTRUCTURE",
      description: "AI Infrastructure is one of our flagship products to support the Machine Learning industry and the Blockchain industry",
      footer: "01",
      color: "#FCA36E"
    },
    {
      title: "PRIVACY SERVICE",
      description: "AI Infrastructure is one of our flagship products to support the Machine Learning industry and the Blockchain industry",
      footer: "02",
      color: "#4DCAFF"
    },
    {
      title: "AI APP CHAIN",
      description: "AI Infrastructure is one of our flagship products to support the Machine Learning industry and the Blockchain industry",
      footer: "03",
      color: "#0DFC6C"
    },
    {
      title: "AI INFRASTRUCTURE",
      description: "AI Infrastructure is one of our flagship products to support the Machine Learning industry and the Blockchain industry",
      footer: "04",
      color: "#FCFF74"
    }
  ]

  return ( 
    <div style={{
      backgroundImage: "url('/images/missionBackground.png')",
      backgroundSize: "cover",
    }} className="px-12 flex justify-center">
      <div className="max-w-[1440px]">
        <div className="pb-11 flex justify-center gap-x-14 items-center z-10">
          <Image src={logoSolana} alt="Solana" className="w-fit"/>
          <Image src={logoPay} alt="Pay" />
          <Image src={logoLido} alt="Lido" />
          <Image src={logoLayerZero} alt="Layer Zero" />
          <Image src={logoLinea} alt="Linea" />
        </div>
        <div className="border-y-2 border-[#353539] flex justify-between py-8">
          <div className="space-y-4">
            <Tag text={`HubTensor`} />
            <div className="text-5xl font-segoe font-bold">
              Our <span style={{
                background: "var(--Gradient-Primary, linear-gradient(90deg,#C7B3F8 0%,#6C3BEF 50%,#4223A1 100%))",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>Infrastructure</span>
            </div>
          </div>
          <div className="max-w-[429px]">
            HubTensor <span className="text-[var(--Subtext,_#918DA4)] ">is an AI Infrastructure service provider that emphasizes ease of access and other additional features such as Privacy Service and App Chain which are our best products in blockchain and decentralized industry.</span>
          </div>
        </div>
        <div className="flex justify-center gap-x-9 py-28" style={{
        }}>
          {cards.map(({title, description, color, footer}, index) => (
            <Card title={title} key={index} description={description} footer={footer} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mission;