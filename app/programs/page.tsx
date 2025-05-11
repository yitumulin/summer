import fs from "fs";
import path from "path";
import ProgramCard from "@/components/ProgramCard";

export default function ProgramsPage() {
  const filePath = path.join(process.cwd(), "app/data/programs.json");
  const programs = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">暑研/暑校项目列表</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {programs.map((item: any) => (
          <ProgramCard key={item.id} program={item} />
        ))}
      </div>
    </div>
  );
} 