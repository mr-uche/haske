"use client";

import {
  MapPinned,
  Users,
  Activity,
  Building2,
  AlertTriangle,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { lgaData } from "@/lib/lgaData";

export default function LgaSidePanel({
  selected,
}: {
  selected: string | null;
}) {
  if (!selected) {
    return (
      <aside className="w-full rounded-3xl border border-green-200 bg-green-950 shadow-xl lg:w-[400px]">
        <div className="flex min-h-[760px] flex-col justify-center p-8">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-green-100">
            <MapPinned className="h-12 w-12 text-green-700" />
          </div>

          <h2 className="mt-8 text-center text-3xl font-bold text-green-950">
            Select an LGA
          </h2>

          <p className="mt-4 text-center leading-7 text-slate-600">
            Click any Local Government Area on the epidemic heat map to
            display its disease surveillance information, active cases,
            health facilities and outbreak intelligence.
          </p>

          <div className="my-8 border-t border-green-100 bg-green-950" />

          <div className="space-y-4">
            <InfoCard
              color="bg-red-500"
              text="Critical outbreak monitoring"
            />

            <InfoCard
              color="bg-orange-500"
              text="High risk surveillance"
            />

            <InfoCard
              color="bg-amber-400"
              text="Moderate disease activity"
            />

            <InfoCard
              color="bg-green-500"
              text="Healthy / Low risk"
            />
          </div>

          <div className="mt-10 rounded-2xl bg-green-50 p-5">
            <p className="text-sm font-semibold text-green-900">
              Waiting for selection...
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Choose an LGA from the heat map to load real-time
              surveillance analytics.
            </p>
          </div>
        </div>
      </aside>
    );
  }

  const lga = lgaData.find((l) => l.name === selected);

  if (!lga) return null;

  const riskColor = {
    healthy: "bg-green-100 text-green-700",
    moderate: "bg-yellow-100 text-yellow-700",
    high: "bg-orange-100 text-orange-700",
    critical: "bg-red-100 text-red-700",
  };

  return (
    <aside className="w-full rounded-3xl border border-green-200 bg-green-950 shadow-xl lg:w-[400px]">
      <div className="p-7">
        {/* Header */}

        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white">
              {lga.name}
            </h2>

            <p className="mt-2 text-sm text-white">
              Adamawa State
            </p>
          </div>

          <span
            className={`rounded-full px-4 py-2 text-xs font-bold capitalize ${
              riskColor[lga.risk]
            }`}
          >
            {lga.risk}
          </span>
        </div>

        {/* Statistics */}

        <div className="mt-8 grid grid-cols-2 gap-4">
          <StatCard
            icon={<Activity className="h-5 w-5 text-green-700" />}
            label="Active Cases"
            value={lga.activeCases}
          />

          <StatCard
            icon={<Users className="h-5 w-5 text-green-700" />}
            label="Population"
            value={`${lga.population}K`}
          />

          <StatCard
            icon={<Building2 className="h-5 w-5 text-green-700" />}
            label="PHC Facilities"
            value={lga.phcs}
          />

          <StatCard
            icon={<TrendingUp className="h-5 w-5 text-green-700" />}
            label="Cases / 10k"
            value={lga.per10k}
          />
        </div>

        {/* Disease Overview */}

        <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-5">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-green-700" />

            <h3 className="font-semibold text-green-950">
              Disease Surveillance
            </h3>
          </div>

          <div className="mt-5 space-y-4">
            <Progress
              title="Malaria"
              value={75}
            />

            <Progress
              title="Typhoid"
              value={52}
            />

            <Progress
              title="Cholera"
              value={18}
            />
          </div>
        </div>

        {/* Recent Alerts */}

        <div className="mt-8 rounded-2xl border border-green-100 bg-white p-5">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500" />

            <h3 className="font-semibold text-green-950">
              Recent Alerts
            </h3>
          </div>

          <div className="mt-5 space-y-3">
            <Alert
              level="Critical"
              color="bg-red-500"
              text="Increase in malaria cases reported today."
            />

            <Alert
              level="Moderate"
              color="bg-amber-500"
              text="Routine surveillance completed."
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-green-100 bg-green-50 p-4">
      <div className="flex items-center justify-between">
        {icon}

        <span className="text-2xl font-bold text-green-950">
          {value}
        </span>
      </div>

      <p className="mt-3 text-sm text-slate-600">
        {label}
      </p>
    </div>
  );
}

function Progress({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span className="text-sm font-medium text-slate-700">
          {title}
        </span>

        <span className="text-sm font-semibold text-green-700">
          {value}%
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-green-100">
        <div
          className="h-full rounded-full bg-green-600"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Alert({
  level,
  text,
  color,
}: {
  level: string;
  text: string;
  color: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
      <div className={`mt-1 h-3 w-3 rounded-full ${color}`} />

      <div>
        <p className="font-semibold text-green-950">
          {level}
        </p>

        <p className="mt-1 text-sm text-slate-600">
          {text}
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  color,
  text,
}: {
  color: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 p-4">
      <span className={`h-3 w-3 rounded-full ${color}`} />

      <span className="text-sm font-medium text-green-950">
        {text}
      </span>
    </div>
  );
}