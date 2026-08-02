"use client";

import { Globe, Upload, Eye, Download, RotateCcw, UploadCloud } from "lucide-react";
import { modelVersions, statusStyles } from "./modelData";

export default function ModelDeploymentTab() {
  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Gwarmal Model Versions</h3>
          <p className="text-xs text-slate-500">
            Manage and deploy AI models to Haske Hubs across all 247 PHCs
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-surface hover:bg-brand-400">
          <Upload size={15} />
          Upload New Model
        </button>
      </div>

      <div className="mt-5 space-y-3">
        {modelVersions.map((m) => (
          <div
            key={m.name}
            className="rounded-xl border border-surface-border bg-white/[0.02] p-4"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                  <Globe size={18} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-white">{m.name}</p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${statusStyles[m.status]}`}
                    >
                      {m.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    {m.type} · {m.languages} · {m.size} · Accuracy:{" "}
                    <span className="font-semibold text-brand-400">{m.accuracy}</span>
                  </p>
                  {m.deployedTo && (
                    <p className="mt-1 text-xs text-slate-500">
                      Deployed to <span className="text-slate-300">{m.deployedTo}</span> Haske
                      Hubs · {m.deployedDate}
                    </p>
                  )}
                  {m.note && (
                    <p className="mt-1 text-xs text-amber-400">{m.note}</p>
                  )}
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                {m.status === "active" && (
                  <button className="flex items-center gap-1.5 rounded-lg border border-surface-border px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/5">
                    <Eye size={13} />
                    View Metrics
                  </button>
                )}
                {m.status === "previous" && (
                  <button className="flex items-center gap-1.5 rounded-lg border border-surface-border px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/5">
                    <RotateCcw size={13} />
                    Rollback
                  </button>
                )}
                {m.status === "pending" && (
                  <button className="flex items-center gap-1.5 rounded-lg bg-brand-500 px-3 py-1.5 text-xs font-semibold text-surface hover:bg-brand-400">
                    <UploadCloud size={13} />
                    Deploy to All Hubs
                  </button>
                )}
                <button className="flex items-center gap-1.5 rounded-lg border border-surface-border px-3 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/5">
                  <Download size={13} />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}