import fs from "fs";
import path from "path";
import ProgramCard from "@/components/ProgramCard";
import { useState } from "react";

export default function ProgramsPage() {
  const filePath = path.join(process.cwd(), "app/data/programs.json");
  const programs = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const [search, setSearch] = useState("");
  const filtered = programs.filter(
    (p: any) =>
      p.title.includes(search) || p.school.includes(search)
  );

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">暑研/暑校项目列表</h1>
      <input
        className="w-full mb-6 p-2 border rounded"
        placeholder="搜索项目或学校"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((item: any) => (
          <ProgramCard key={item.id} program={item} />
        ))}
      </div>
    </div>
  );
} 