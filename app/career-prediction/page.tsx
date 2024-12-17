import { Footer, NavBar } from "@/components/index";
import { CareerMatch } from "@/components/shared/career-match/career-match";

export default function CareerPrediction() {
  return (
    <>
      <NavBar />
      <h1 className="text-[#212153] text-2xl font-bold pt-6 pl-20 bg-[#F5F5F5]">
        Prediction Tool
      </h1>
      <CareerMatch />
      <Footer />
    </>
  );
}
