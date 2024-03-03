import Card from "./Card";

function Achievements() {
  return (
    <div style={{
      backgroundImage: "url('/images/achievementsBackground.png')",
      backgroundSize: "cover",
    }} className="flex justify-center pb-16 pt-4 md:pt-0">
      <div className="md:flex md:items-center md:gap-x-4 space-y-8 md:space-y-4 md:p-24">
        <div className="space-y-8 md:space-y-4 md:w-96 w-80">
          <Card tag="Saving" title="Upto 30% cost redution with cloud migration" link="/" className="h-60 md:h-64" />
          <Card tag="Growth" title="Cloud market to surpass $1 trillion by 2026." link="/" className="h-60 md:h-96" />
        </div>
        <div className="space-y-8 md:space-y-4 md:w-96 w-80">
          <Card tag="Innovation" title="Constant evolution with new technologies" link="/" className="h-60 md:h-96" />
          <Card tag="Saving" title="Upto 30% cost redution with cloud migration" link="/" className="h-60 md:h-64" />
        </div>
      </div>
    </div>
  );
}

export default Achievements;