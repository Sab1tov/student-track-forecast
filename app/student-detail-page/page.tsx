"use client";

import { Container, Footer, NavBar, TopBar } from "@/components/index";
import { useStore } from "../store/store";
import AcademicPerformance from "./academic-performance/academic-performance";
import Directions from "./directions/directions";
import Statistics from "./statistics/statistics";
import StudentInformation from "./student-information/student-information";
export default function StudentDetailPage() {
  const { activeTab } = useStore();

  const renderContent = () => {
    switch (activeTab) {
      case "Academic Performance":
        return <AcademicPerformance />;
      case "Directions":
        return <Directions />;
      case "Statistics":
        return <Statistics />;
      default:
        return <StudentInformation />;
    }
  };
  return (
    <>
      <div className="w-screen h-screen bg-[#F5F5F5]">
        <NavBar />
        <Container className="w-screen h-full flex  gap-10 bg-[#F5F5F5] flex-col">
          <div className="w-full flex sticky top-0 py-5 justify-center">
            <TopBar />
          </div>
          <div>{renderContent()}</div>
        </Container>
        <Footer />
      </div>
    </>
  );
}
