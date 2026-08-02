"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Check } from "lucide-react";
import { roles as defaultRoles, modules, RolePermissions } from "./rolesData";

export default function RolesPermissionsTab() {
  const [roles, setRoles] = useState<RolePermissions[]>(defaultRoles);

  function togglePermission(roleName: string, moduleName: (typeof modules)[number]) {
    setRoles((prev) =>
      prev.map((r) =>
        r.name === roleName
          ? {
              ...r,
              permissions: {
                ...r.permissions,
                [moduleName]: !r.permissions[moduleName],
              },
            }
          : r
      )
    );
  }

  return (
    <div className="rounded-2xl border border-surface-border bg-green-950 p-5">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">Roles & Permissions</h3>
          <p className="text-xs text-slate-500">
            Control what each role can access across the platform
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-surface hover:bg-brand-400">
          <Plus size={15} />
          Add Role
        </button>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-xs uppercase tracking-wide text-slate-500">
              <th className="whitespace-nowrap px-3 py-3 font-medium">Role</th>
              {modules.map((m) => (
                <th key={m} className="whitespace-nowrap px-3 py-3 text-center font-medium">
                  {m}
                </th>
              ))}
              <th className="whitespace-nowrap px-3 py-3 text-center font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.name} className="border-b border-surface-border/50 last:border-0">
                <td className="whitespace-nowrap px-3 py-4">
                  <span className={`rounded-md px-2.5 py-1 text-xs font-semibold ${role.color}`}>
                    {role.name}
                  </span>
                </td>
                {modules.map((m) => {
                  const granted = role.permissions[m];
                  return (
                    <td key={m} className="px-3 py-4 text-center">
                      <button
                        onClick={() => togglePermission(role.name, m)}
                        className={`mx-auto flex h-5 w-5 items-center justify-center rounded-full border transition ${
                          granted
                            ? "border-brand-500 bg-brand-500/15 text-brand-400"
                            : "border-white/15 text-transparent hover:border-white/30"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </button>
                    </td>
                  );
                })}
                <td className="px-3 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-slate-500 hover:text-slate-300">
                      <Pencil size={14} />
                    </button>
                    <button className="text-slate-500 hover:text-red-400">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}