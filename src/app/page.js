import Banner from "@/components/Banner";
import { CallToAction } from "@/components/CallToAction";
import { HowItWorks } from "@/components/HowItWorks";
import WhyChooseAndStats from "@/components/WhyChooseAndStats";


export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseAndStats></WhyChooseAndStats>
      <HowItWorks></HowItWorks>
      <CallToAction></CallToAction>
    </div>
  );
}
