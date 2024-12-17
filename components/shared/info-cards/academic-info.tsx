import React, { useState } from "react";
import { Container } from "../container";
import { Title } from "../title";
import { Table, Select } from "antd";

const { Option } = Select;

const semesterData = {
  "2021 - 2022.1": [
    {
      key: "1",
      courseCode: "CSS 105",
      courseTitle: "Fundamentals of Programming",
      grade: 91,
      letter: "A-",
      point: 3.67,
      traditional: "Excellent",
    },
    {
      key: "2",
      courseCode: "MAT 151",
      courseTitle: "Linear Algebra",
      grade: 100,
      letter: "A",
      point: 4,
      traditional: "Excellent",
    },
    {
      key: "3",
      courseCode: "MAT 153",
      courseTitle: "Mathematics for Computer Science 1",
      grade: 85,
      letter: "B+",
      point: 3.33,
      traditional: "Good",
    },
    {
      key: "4",
      courseCode: "MDE 131",
      courseTitle: "Turkish Language 1",
      grade: 100,
      letter: "A",
      point: 4,
      traditional: "Excellent",
    },
    {
      key: "5",
      courseCode: "MDE 141",
      courseTitle: "Physical Education 1",
      grade: 100,
      letter: "A",
      point: 4,
      traditional: "Excellent",
    },
    {
      key: "6",
      courseCode: "MDE 171",
      courseTitle: "Modern History of Kazakhstan",
      grade: 79,
      letter: "B-",
      point: 2.67,
      traditional: "Good",
    },
    {
      key: "7",
      courseCode: "MDE 190",
      courseTitle: "English for Specific Purposes",
      grade: 85,
      letter: "B+",
      point: 3.33,
      traditional: "Good",
    },
  ],
  "2022 - 2023.1": [
    {
      key: "1",
      courseCode: "CSS 205",
      courseTitle: "Advanced Programming",
      grade: 88,
      letter: "B+",
      point: 3.33,
      traditional: "Good",
    },
    {
      key: "2",
      courseCode: "MAT 251",
      courseTitle: "Discrete Mathematics",
      grade: 95,
      letter: "A",
      point: 4,
      traditional: "Excellent",
    },
  ],
};

const columns = [
  { title: "Course Code", dataIndex: "courseCode", key: "courseCode" },
  { title: "Course Title", dataIndex: "courseTitle", key: "courseTitle" },
  { title: "Grade", dataIndex: "grade", key: "grade" },
  { title: "Letter Grade", dataIndex: "letter", key: "letter" },
  { title: "Point", dataIndex: "point", key: "point" },
  { title: "Traditional", dataIndex: "traditional", key: "traditional" },
];

export const AcademicInfo = () => {
  const [selectedSemester, setSelectedSemester] = useState("2021 - 2022.1");
  return (
    <div className="w-full h-full bg-[#F5F5F5]">
      <Container className=" flex flex-col items-center gap-6">
        <div className="w-full flex justify-center">
          <Select
            defaultValue={selectedSemester}
            className=""
            onChange={(value) => setSelectedSemester(value)}
          >
            {Object.keys(semesterData).map((semester) => (
              <Option key={semester} value={semester}>
                {semester}
              </Option>
            ))}
          </Select>
        </div>

        {/* Горизонтальный скролл для таблицы */}
        <Table
          columns={columns}
          dataSource={semesterData[selectedSemester]}
          pagination={false}
        />
      </Container>
    </div>
  );
};
