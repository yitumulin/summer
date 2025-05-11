import Link from "next/link";

export default function ProgramCard({ id, title, school, region, deadline, link }: any) {
  return (
    <div className="bg-white rounded shadow p-4 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-600 mb-1">学校：{school}</div>
      <div className="text-gray-600 mb-1">地区：{region}</div>
      <div className="text-gray-600 mb-3">截止日期：{deadline}</div>
      <a href={link} target="_blank" rel="noopener" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        查看详情
      </a>
    </div>
  );
} 