import Layout from "@/app/template";
import Card from "./Card";
import { fadeIn } from "@/lib/motion";

function Achievements() {
  return (
    <Layout variant={
      fadeIn('up', 'spring', 0.5, 1)
    }>
    <div style={{
      backgroundImage: "url('/images/achievementsBackground.png')",
      backgroundSize: "cover",
    }} className="flex justify-center pb-16 pt-4 md:pt-0">
      <div className="md:flex md:items-center md:gap-x-4 space-y-8 md:space-y-4 md:p-24">
        <div className="space-y-8 md:space-y-4 md:w-96 w-80">
          <Card tag="Optimization" title="Achieved 30% cost reduction through cloud migration." link="/" className="h-60 md:h-64" />
          <Card tag="Migration" title="Achieved significant cost savings (up to 30%) via cloud migration." link="/" className="h-60 md:h-96" />
        </div>
        <div className="space-y-8 md:space-y-4 md:w-96 w-80">
          <Card tag="Efficiency" title="Reduced costs by 30% through successful cloud migration." link="/" className="h-60 md:h-96" />
          <Card tag="Savings" title="Realized up to 30% cost reduction with cloud migration." link="/" className="h-60 md:h-64" />
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default Achievements;