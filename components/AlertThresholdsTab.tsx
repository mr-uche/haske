"use client";

import { useState } from "react";
import { Save, Minus, Plus } from "lucide-react";
import { defaultThresholds, DiseaseThreshold } from "./thresholdData";

export default function AlertThresholdsTab() {
  const [thresholds, setThresholds] = useState<DiseaseThreshold[]>(defaultThresholds);
  const [saved, setSaved] = useState(true);

  function updateValue(name: string, value: number) {
    setThresholds((prev) =>
      prev.map((t) =>
        t.name === name
          ? { ...t, value: Math.min(t.max, Math.max(t.min, value)) }
          : t
      )
    );
    setSaved(false);
  }

  function handleSave() {
    // TODO: wire up to an API
    setSaved(true);
  }

  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Outbreak Alert Thresholds</h3>
          <p className="text-xs text-white">
            Set the case count that triggers an alert per disease
          </p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-xl bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-400"
        >
          <Save size={15} />
          {saved ? "Saved" : "Save Thresholds"}
        </button>
      </div>

      <div className="mt-6 space-y-7">
        {thresholds.map((t) => (
          <div key={t.name}>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                {t.name}
              </span>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-semibold text-white">
                  {t.value} cases
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => updateValue(t.name, t.value - 1)}
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20"
                  >
                    <Minus size={13} />
                  </button>
                  <button
                    onClick={() => updateValue(t.name, t.value + 1)}
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/20"
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>
            </div>

            <input
              type="range"
              min={t.min}
              max={t.max}
              value={t.value}
              onChange={(e) => updateValue(t.name, Number(e.target.value))}
              className="threshold-slider mt-3 w-full"
              style={{
                background: `linear-gradient(to right, #10b981 ${
                  ((t.value - t.min) / (t.max - t.min)) * 100
                }%, rgba(255,255,255,0.1) ${
                  ((t.value - t.min) / (t.max - t.min)) * 100
                }%)`,
              }}
            />
            <div className="mt-1 flex justify-between text-xs text-white">
              <span>{t.min}</span>
              <span>{t.max}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}