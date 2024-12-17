import { Button, Container } from "@/components/index";
import { AcademicInfo } from "@/components/shared/info-cards/academic-info";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AcademicPerformance() {
  return (
    <>
      <Container className=" w-[1200px] bg-[#F5F5F5] flex flex-col gap-1 mb-10">
        <Link href="/">
          <Button className="bg-transparent text-[#212153] shadow-none rounded-[5px] hover:bg-[#212153] hover:text-white text-center">
            <ChevronLeft /> Back
          </Button>
        </Link>
        <Container className=" bg-[#F5F5F5]">
          <AcademicInfo />
        </Container>
      </Container>
    </>
  );
}
