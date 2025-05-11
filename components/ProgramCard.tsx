import React from "react";

interface Program {
  id: string;
  title: string;
  school: string;
  region: string;
  deadline: string;
  link: string;
  description?: string;
}

export default function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
      <div className="text-gray-600 mb-1">学校：{program.school}</div>
      <div className="text-gray-600 mb-1">地区：{program.region}</div>
      <div className="text-gray-600 mb-1">截止日期：{program.deadline}</div>
      {program.description && (
        <div className="text-gray-500 mb-2 text-sm">{program.description}</div>
      )}
      <a href={program.link} target="_blank" rel="noopener" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        查看详情
      </a>
    </div>
  );
} 