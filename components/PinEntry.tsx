"use client";

import { useState } from "react";
import { Activity, Delete } from "lucide-react";

const PIN_LENGTH = 4;
const CORRECT_PIN = "1234"; // placeholder — replace with real validation against backend/session
const userName = "CHEW Musa Adamu"; // placeholder — relace with actual logged-in user

export default function PinEntry() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  function handleDigit(digit: string) {
    if (pin.length >= PIN_LENGTH) return;
    setError("");

    const nextPin = pin + digit;
    setPin(nextPin);

    if (nextPin.length === PIN_LENGTH) {
      setTimeout(() => {
        if (nextPin === CORRECT_PIN) {
          // TODO: navigate to authenticated home screen
        } else {
          setError("Incorrect PIN. Try again.");
          setShake(true);
          setTimeout(() => {
            setPin("");
            setShake(false);
          }, 500);
        }
      }, 150);
    }
  }

  function handleDelete() {
    setPin((p) => p.slice(0, -1));
  }

  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-sm text-center">
        <div className="flex flex-col items-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-950 text-white">
            <Activity size={26} />
          </span>
          <h1 className="mt-4 text-2xl font-bold text-black">Enter PIN</h1>
          <p className="mt-1 text-sm text-black">Welcome back, {userName}</p>
        </div>

        <div
          className={`mt-8 flex justify-center gap-4 ${shake ? "animate-pulse" : ""}`}
        >
          {Array.from({ length: PIN_LENGTH }).map((_, i) => (
            <span
              key={i}
              className={`h-4 w-4 rounded-full border-2 transition ${
                i < pin.length
                  ? error
                    ? "border-red-500 bg-red-500"
                    : "border-green-950 bg-brand-400"
                  : "border-green-900 bg-slate-300"
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
              className="rounded-xl border border-surface-border bg-green-950 py-5 text-xl font-bold text-white hover:bg-green-800 active:bg-green-900"
            >
              {k}
            </button>
          ))}
          <div />
          <button
            onClick={() => handleDigit("0")}
            className="rounded-xl border border-surface-border bg-green-950 py-5 text-xl font-bold text-white hover:bg-green-900 active:bg-green-900"
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

        <button className="mt-6 text-sm font-semibold text-black hover:text-slate-800">
          Use Staff ID & Password instead
        </button>
      </div>
    </div>
  );
}