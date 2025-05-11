import React from "react";
import ProgramCard from "../../components/ProgramCard";
import programs from "../data/programs.json";

export default function ProgramsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">暑研/暑校项目列表</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((item: any) => (
          <div key={item.id}>
            <ProgramCard program={item} />
          </div>
        ))}
      </div>
    </div>
  );
} 