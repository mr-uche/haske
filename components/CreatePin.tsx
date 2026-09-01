"use client";

import { useState } from "react";
import { Activity, Delete } from "lucide-react";

const PIN_LENGTH = 4;

export default function CreatePin() {
  const [stage, setStage] = useState<"create" | "confirm">("create");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");

  const activePin = stage === "create" ? pin : confirmPin;

  function handleDigit(digit: string) {
    if (activePin.length >= PIN_LENGTH) return;

    const nextPin = activePin + digit;

    if (stage === "create") {
      setPin(nextPin);
      if (nextPin.length === PIN_LENGTH) {
        setTimeout(() => setStage("confirm"), 150);
      }
    } else {
      setConfirmPin(nextPin);
      if (nextPin.length === PIN_LENGTH) {
        if (nextPin === pin) {
          setError("");
          // TODO: submit PIN to backend / proceed to next screen
        } else {
          setError("PINs don't match. Try again.");
          setTimeout(() => {
            setPin("");
            setConfirmPin("");
            setStage("create");
            setError("");
          }, 900);
        }
      }
    }
  }

  function handleDelete() {
    if (stage === "create") {
      setPin((p) => p.slice(0, -1));
    } else {
      setConfirmPin((p) => p.slice(0, -1));
    }
  }

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-sm text-center">
        <div className="flex flex-col items-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-950 text-white">
            <Activity size={26} />
          </span>
          <h1 className="mt-4 text-2xl font-bold text-black">
            {stage === "create" ? "Create PIN" : "Confirm PIN"}
          </h1>
          <p className="mt-1 text-sm text-black">
            {stage === "create"
              ? "Set a 4-digit PIN to secure your account"
              : "Re-enter your PIN to confirm"}
          </p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {Array.from({ length: PIN_LENGTH }).map((_, i) => (
            <span
              key={i}
              className={`h-4 w-4 rounded-full border-2 transition ${
                i < activePin.length
                  ? "border-green-950 bg-green-900"
                  : "border-slate-600 bg-slate-200"
              }`}
            />
          ))}
        </div>

        {error && (
          <p className="mt-4 text-sm font-semibold text-red-400">{error}</p>
        )}

        <div className="mt-10 grid grid-cols-3 gap-4">
          {keys.map((k) => (
            <button
              key={k}
              onClick={() => handleDigit(k)}
              className="rounded-xl border border-surface-border bg-green-950 py-5 text-xl font-bold text-white hover:bg-green-900 active:bg-green-950"
            >
              {k}
            </button>
          ))}
          <div />
          <button
            onClick={() => handleDigit("0")}
            className="rounded-xl border border-surface-border bg-white/[0.03] py-5 text-xl font-bold text-white hover:bg-white/[0.06] active:bg-white/[0.1]"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center justify-center rounded-xl border border-surface-border bg-green-950 py-5 text-white hover:bg-green-950 active:bg-green-900"
          >
            <Delete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}