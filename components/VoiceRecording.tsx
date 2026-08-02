"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Mic, Square } from "lucide-react";

export default function VoiceRecording() {
  const router = useRouter();
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRecording]);

  function toggleRecording() {
    if (isRecording) {
      // Stopped — TODO: process/save recording, then navigate onward
      setIsRecording(false);
    } else {
      setSeconds(0);
      setIsRecording(true);
    }
  }

  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");

  // Simple static waveform placeholder — replace with real audio-level visualization if available
  const bars = Array.from({ length: 40 }, (_, i) => {
    const base = 4;
    const variance = isRecording ? Math.sin(i * 0.7) * 10 + 10 : 2;
    return Math.max(base, base + variance);
  });

  return (
    <div className="mx-auto flex w-full max-w-md flex-col px-5 pb-6 pt-8">
      <div className="flex items-center gap-3">
        <button
          onClick={() => router.back()}
          className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-slate-300 hover:bg-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-bold text-white">Voice Recording</h1>
      </div>

      <div className="mt-24 flex items-end justify-center gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className={`w-1 rounded-full transition-all duration-150 ${
              isRecording ? "bg-brand-400" : "bg-slate-700"
            }`}
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="font-mono text-4xl font-bold tabular-nums text-white">
          {mins}:{secs}
        </p>
        <p className="mt-2 text-sm text-brand-400">
          {isRecording ? "Recording..." : "Tap to start recording"}
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <button
          onClick={toggleRecording}
          className={`flex h-16 w-16 items-center justify-center rounded-full transition ${
            isRecording ? "bg-red-500 hover:bg-red-400" : "bg-brand-500 hover:bg-brand-400"
          }`}
        >
          {isRecording ? (
            <Square size={24} className="fill-white text-white" />
          ) : (
            <Mic size={26} className="text-surface" />
          )}
        </button>
      </div>
    </div>
  );
}