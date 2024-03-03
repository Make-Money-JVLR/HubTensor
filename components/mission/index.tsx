import Card from "./Card";
import Tag from "../Tag";

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
        <div className="border-y-2 border-[#353539] md:flex md:justify-between py-8 space-y-4">
          <div className="space-y-4">
            <div className="flex justify-center flex-col items-center gap-y-2 md:items-start">
              <Tag text={`HubTensor`} />
              <div className="text-3xl md:text-4xl lg:text-5xl font-segoe font-bold">
                Our <span style={{
                  background: "var(--Gradient-Primary, linear-gradient(90deg,#C7B3F8 0%,#6C3BEF 50%,#4223A1 100%))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}>Infrastructure</span>
              </div>
            </div>
          </div>
          <div className="max-w-[429px] mx-auto md:mx-0">
            HubTensor <span className="text-[var(--Subtext,_#918DA4)] ">is an AI Infrastructure service provider that emphasizes ease of access and other additional features such as Privacy Service and App Chain which are our best products in blockchain and decentralized industry.</span>
          </div>
        </div>
        <div className="lg:flex lg:justify-center md:gap-x-9 md:grid md:grid-cols-2 lg:py-28 pb-8 space-y-8" style={{
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