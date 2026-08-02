"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  UserPlus,
  CheckCircle2,
  Clock,
  Lock,
  MoreHorizontal,
} from "lucide-react";
import { users, roleStyles, Role, Status } from "./userData";

export default function UserManagement() {
  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<Role | "all">("all");
  const [statusFilter, setStatusFilter] = useState<Status | "all">("all");

  const total = users.length;
  const active = users.filter((u) => u.status === "active").length;
  const inactive = users.filter((u) => u.status === "inactive").length;
  const locked = users.filter((u) => u.status === "locked").length;

  const filtered = users
    .filter((u) => (roleFilter === "all" ? true : u.role === roleFilter))
    .filter((u) => (statusFilter === "all" ? true : u.status === statusFilter))
    .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()));

  const roles: Role[] = ["Admin", "Nurse", "CHEW", "Epidemiologist"];

  return (
    <>
      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-4">
        <div className="rounded-2xl border border-surface-border bg-green-50 p-5">
          <p className="text-3xl font-bold text-white">{total}</p>
          <p className="mt-1 text-sm text-slate-400">Total Users</p>
        </div>
        <div className="rounded-2xl border border-brand-500/20 bg-brand-700 p-5">
          <p className="text-3xl font-bold text-white">{active}</p>
          <p className="mt-1 text-sm text-slate-300">Active</p>
        </div>
        <div className="rounded-2xl border border-surface-border bg-surface-card p-5">
          <p className="text-3xl font-bold text-white">{inactive}</p>
          <p className="mt-1 text-sm text-slate-400">Inactive</p>
        </div>
        <div className="rounded-2xl border border-red-500/20 bg-red-600 p-5">
          <p className="text-3xl font-bold text-red-400">{locked}</p>
          <p className="mt-1 text-sm text-slate-300">Locked</p>
        </div>
      </div>
                           
      {/* Search + filters + add user */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-4 py-2.5">
          <Search size={16} className="text-slate-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
            placeholder="Search users..."
          />
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-surface-border bg-green-950 px-3 py-2.5">
          <Filter size={14} className="text-white" />
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value as Role | "all")}
            className="bg-transparent text-sm text-slate-300 focus:outline-none"
          >
            <option value="all" className="bg-surface-card">All Roles</option>
            {roles.map((r) => (
              <option key={r} value={r} className="bg-surface-card">
                {r}
              </option>
            ))}
          </select>
        </div>

        <div className="rounded-xl border border-surface-border bg-green-950 px-3 py-2.5">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as Status | "all")}
            className="bg-transparent text-sm text-white focus:outline-none"
          >
            <option value="all" className="bg-surface-card">All Status</option>
            <option value="active" className="bg-surface-card">Active</option>
            <option value="inactive" className="bg-surface-card">Inactive</option>
            <option value="locked" className="bg-surface-card">Locked</option>
          </select>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-surface hover:bg-brand-400">
          <UserPlus size={16} />
          Add User
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl border border-surface-border bg-green-950">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-xs uppercase tracking-wide text-slate-500">
              <th className="px-5 py-3 font-medium">User</th>
              <th className="px-5 py-3 font-medium">Role</th>
              <th className="px-5 py-3 font-medium">Facility / LGA</th>
              <th className="px-5 py-3 font-medium">Last Active</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-b border-surface-border/50 last:border-0">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-slate-200">
                      {u.initials}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{u.name}</p>
                      <p className="text-xs text-slate-500">ID: {u.id}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className={`rounded-md px-2.5 py-1 text-xs font-semibold ${roleStyles[u.role]}`}>
                    {u.role}
                  </span>
                </td>
                <td className="px-5 py-4">
                  {u.facility ? (
                    <>
                      <p className="text-slate-300">{u.facility}</p>
                      <p className="text-xs text-slate-500">{u.lga}</p>
                    </>
                  ) : (
                    <>
                      <p className="text-slate-500">—</p>
                      <p className="text-xs text-slate-500">{u.lga}</p>
                    </>
                  )}
                </td>
                <td className="px-5 py-4 text-slate-400">{u.lastActive}</td>
                <td className="px-5 py-4">
                  <StatusBadge status={u.status} />
                </td>
                <td className="px-5 py-4">
                  <button className="text-slate-500 hover:text-slate-300">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function StatusBadge({ status }: { status: Status }) {
  const config = {
    active: { icon: CheckCircle2, text: "text-brand-400", label: "Active" },
    inactive: { icon: Clock, text: "text-slate-400", label: "Inactive" },
    locked: { icon: Lock, text: "text-red-400", label: "Locked" },
  }[status];

  const Icon = config.icon;

  return (
    <span className={`flex items-center gap-1.5 text-xs font-semibold ${config.text}`}>
      <Icon size={13} />
      {config.label}
    </span>
  );
}