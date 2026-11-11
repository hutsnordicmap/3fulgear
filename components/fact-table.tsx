import Link from "next/link";
import type { GuideTable } from "@/lib/guides";

export function FactTable({ table }: { table: GuideTable }) {
  return (
    <div className="mt-8 overflow-x-auto border border-[#e7e7e7] bg-white">
      <table className="w-full min-w-[40rem] text-left text-sm">
        <thead className="border-b border-[#eee] text-[11px] tracking-[0.12em] text-[#777] uppercase">
          <tr>
            {table.headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.cells.join("-")} className="border-b border-[#f2f2f2] last:border-b-0">
              {row.cells.map((cell, index) => (
                <td key={`${cell}-${index}`} className="px-4 py-3 text-[#222]">
                  {index === 0 && row.href ? (
                    <Link href={row.href} className="font-semibold hover:text-[#e36159]">
                      {cell}
                    </Link>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
