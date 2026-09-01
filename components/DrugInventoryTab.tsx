"use client";

import { PackagePlus } from "lucide-react";
import { drugInventory, stockStatusStyles } from "./drugData";

export default function DrugInventoryTab() {
  const needsRestock = drugInventory.filter((d) => d.status !== "adequate").length;

  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Drug & Supply Inventory</h3>
          <p className="text-xs text-white">
            {needsRestock} item{needsRestock === 1 ? "" : "s"} need restocking
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-900">
          <PackagePlus size={15} />
          Request Restock
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-xs uppercase tracking-wide text-white">
              <th className="px-3 py-3 font-medium">Drug / Supply</th>
              <th className="px-3 py-3 font-medium">Category</th>
              <th className="px-3 py-3 font-medium">Stock Level</th>
              <th className="px-3 py-3 font-medium">Visual</th>
              <th className="px-3 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {drugInventory.map((d) => {
              const style = stockStatusStyles[d.status];
              const fillPercent = Math.min(100, (d.stock / d.max) * 100);
              return (
                <tr key={d.name} className="border-b border-surface-border/50 last:border-0">
                  <td className="px-3 py-4">
                    <p className="font-semibold text-white">{d.name}</p>
                    <p className="text-xs text-white">{d.minLabel}</p>
                  </td>
                  <td className="px-3 py-4">
                    <span className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-semibold text-blue-300">
                      {d.category}
                    </span>
                  </td>
                  <td className="px-3 py-4">
                    <span className={`font-mono font-semibold ${style.text}`}>
                      {d.stock}
                    </span>{" "}
                    <span className="text-slate-500">{d.unit}</span>
                  </td>
                  <td className="px-3 py-4">
                    <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${style.bar}`}
                        style={{ width: `${fillPercent}%` }}
                      />
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                      {d.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}