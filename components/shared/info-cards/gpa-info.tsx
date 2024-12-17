import React from "react";
import { Container } from "../container";
import { Title } from "../title";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Пример данных на основе графика
const data = [
  { year: "21/22 1", gpa: 3.5 },
  { year: "21/22 2", gpa: 3.5 },
  { year: "22/23 1", gpa: 2.8, fill: "#FF6B6B" }, // красный цвет
  { year: "22/23 2", gpa: 3.0 },
  { year: "23/24 1", gpa: 3.0 },
  { year: "23/24 2", gpa: 4.0, fill: "#00CFFF" }, // синий цвет
  { year: "24/25 1", gpa: 4.0, fill: "#00CFFF" },
  { year: "24/25 2", gpa: 4.0, fill: "#00CFFF" },
];
export const GpaInfo = () => {
  return (
    <div className="w-full bg-[#F5F5F5]">
      <Container className="p-10 w-[1200px] flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col items-center gap-2">
          <Title
            text={"GPA Comparison through all time"}
            className="text-2xl text-[#212153] font-bold"
          />
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="gpa" fill="#d3d3d3" />
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </div>
  );
};
