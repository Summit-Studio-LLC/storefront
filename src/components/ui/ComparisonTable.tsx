interface ComparisonRow {
  feature: string;
  competitor: string;
  summit: string;
}

interface ComparisonTableProps {
  competitorName: string;
  rows: ComparisonRow[];
}

export default function ComparisonTable({
  competitorName,
  rows,
}: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 border-[#2D5F3E] p-4 text-left text-sm font-semibold text-[#4A4A4A]">
              {/* Empty header for feature column */}
            </th>
            <th className="border-b-2 border-[#4A4A4A]/20 p-4 text-left text-sm font-semibold text-[#4A4A4A]">
              {competitorName}
            </th>
            <th className="border-b-2 border-[#2D5F3E] bg-[#2D5F3E]/5 p-4 text-left text-sm font-semibold text-[#2D5F3E]">
              Summit Studio
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-[#4A4A4A]/10">
              <td className="p-4 text-sm font-medium text-[#4A4A4A]">
                {row.feature}
              </td>
              <td className="p-4 text-sm text-[#4A4A4A]">{row.competitor}</td>
              <td className="bg-[#2D5F3E]/5 p-4 text-sm text-[#2D5F3E]">
                {row.summit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
