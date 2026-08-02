"use client";

import { useState } from "react";
import ActiveCasesByLGA from "./ActiveCasesByLGA";
import LGAComparisonRadar from "./LGAComparisonRadar";
import LGAFullTable from "./LGAFullTable";

export default function LGAPerformance() {
  const [selected, setSelected] = useState<string[]>(["Hong", "Michika", "Mubi North"]);

  function toggleLGA(name: string) {
    setSelected((prev) => {
      if (prev.includes(name)) return prev.filter((n) => n !== name);
      if (prev.length >= 5) return prev; // cap at 5
      return [...prev, name];
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <ActiveCasesByLGA />
        <LGAComparisonRadar selected={selected} onRemove={toggleLGA} />
      </div>
      <LGAFullTable selected={selected} onToggle={toggleLGA} />
    </>
  );
}