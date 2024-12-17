import { Button, Container } from "@/components/index";
import { GpaInfo } from "@/components/shared/info-cards/gpa-info";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Statistics() {
  return (
    <>
      <Container className=" w-[1200px] h-full bg-[#F5F5F5] flex flex-col gap-1">
        <Link href="/">
          <Button className="bg-transparent text-[#212153] shadow-none rounded-[5px] hover:bg-[#212153] hover:text-white text-center">
            <ChevronLeft /> Back
          </Button>
        </Link>
        <Container className=" bg-[#F5F5F5]">
          <GpaInfo />
        </Container>
      </Container>
    </>
  );
}
