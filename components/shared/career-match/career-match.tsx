import React from "react";
import { Container } from "../container";
import { Title } from "../title";

export const CareerMatch = () => {
  const careerMatch = "Data Scientist";
  const careerDetail =
    "Abat’s strong grades in Data Analysis and Mathematics make him a great fit for a career as a Data Scientist.";
  const careerStrength = "Strong data analysis and mathematical abilities.";
  const careerRecommendation =
    "Continue excelling in these subjects and explore machine learning concepts.";

  return (
    <div className="w-full bg-[#F5F5F5]">
      <Container className="p-10 w-[1200px] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <Title
            text={"Best Career Match"}
            className="text-2xl text-[#212153] font-bold"
          />
          <p className="text-[#212153] text-lg font-medium">Based on Grades</p>
        </div>
        <div
          style={{
            backgroundImage: `url('/career-image.png')`,
            backgroundSize: "cover",
          }}
          className="w-[940px] h-[360px] flex flex-col rounded-[8px] p-14 gap-8"
        >
          <Title text={careerMatch} className="text-2xl text-white font-bold" />
          <p className="text-base font-semibold text-white">{careerDetail}</p>
          <ul className="flex flex-col gap-2 list-disc pl-5">
            <li className="text-base text-white">
              <span className="font-bold">Strengths: </span>
              {careerStrength}
            </li>
            <li className="text-base text-white">
              <span className="font-bold">Recommendation: </span>
              {careerRecommendation}
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-5">
          <Title
            text={"Recommendation"}
            className="text-2xl text-[#212153] font-bold"
          />
          <div className="flex gap-5">
            <div className="w-[200px] h-[200px] bg-[#212153] rounded-[12px] p-3">
              <p className="text-sm font-semibold text-white">Tips</p>
              <ul className="flex flex-col gap-2 list-disc pl-5">
                <li className="text-sm text-white">
                  Improve skills in network administration.
                </li>
                <li className="text-sm text-white">
                  Explore machine learning to deepen understanding in data
                  science.
                </li>
              </ul>
            </div>
            <div className="w-[200px] h-[200px] bg-[#212153] rounded-[12px] p-3">
              <p className="text-sm font-semibold text-white">
                Recommended Courses
              </p>
              <ul className="flex flex-col gap-2 list-disc pl-5">
                <li className="text-sm text-white">
                  Improve skills in network administration.
                </li>
                <li className="text-sm text-white">
                  Explore machine learning to deepen understanding in data
                  science.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
