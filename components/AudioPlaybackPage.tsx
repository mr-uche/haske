"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { useState } from "react";

const recordings = [
  {
    id: 1,
    title: "Initial complaint",
    language: "Hausa",
    duration: "00:28",
  },
  {
    id: 2,
    title: "Follow-up symptoms",
    language: "Hausa",
    duration: "00:14",
  },
  {
    id: 3,
    title: "Medication history",
    language: "English",
    duration: "00:19",
  },
];

export default function AudioPlaybackPage() {
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(20);

  return (
    <main className="min-h-screen bg-white px-5 py-8">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <Link
            href="/mobile/gwarmai"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-green-950 text-white transition hover:bg-[#17243b]"
          >
            <ArrowLeft size={18} />
          </Link>

          <h1 className="text-3xl font-bold text-black">
            Audio Playback
          </h1>
        </div>

        {/* Audio List */}
        <div className="space-y-3">
          {recordings.map((audio, index) => {
            const active = selected === index;

            return (
              <button
                key={audio.id}
                onClick={() => setSelected(index)}
                className={`flex w-full items-center gap-4 rounded-2xl border p-4 transition ${
                  active
                    ? "border-slate-600 bg-green-950"
                    : "border-slate-700 bg-green-900"
                }`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    active
                      ? "bg-green-800 text-white"
                      : "bg-green-700 text-white"
                  }`}
                >
                  <Play size={18} fill="currentColor" />
                </div>

                <div className="text-left">
                  <h3 className="font-semibold text-white">
                    {audio.title}
                  </h3>

                  <p className="text-sm text-white">
                    {audio.language} · {audio.duration}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Player */}
        <div className="mt-6 rounded-2xl border border-slate-700 bg-green-950 p-5">
          <h3 className="mb-6 text-sm uppercase tracking-wide text-white">
            {recordings[selected].title}
          </h3>

          {/* Fake Waveform */}
          <div className="mb-8 flex h-16 items-center justify-center gap-1">
            {[18, 32, 22, 40, 28, 14, 36, 26, 20, 34, 18, 42, 30, 12].map(
              (height, index) => (
                <div
                  key={index}
                  className="w-[3px] rounded-full bg-white"
                  style={{ height }}
                />
              )
            )}
          </div>

          <div className="mb-6 flex justify-between text-sm font-mono text-white">
            <span>00:00</span>
            <span>{recordings[selected].duration}</span>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8">
            <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-green-900 text-white hover:bg-green-800">
              <SkipBack size={20} />
            </button>

            <button
              onClick={() => setPlaying(!playing)}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-green-900 text-white shadow-lg transition hover:bg-green-800"
            >
              {playing ? (
                <Pause size={28} fill="currentColor" />
              ) : (
                <Play size={28} fill="currentColor" />
              )}
            </button>

            <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-300 bg-green-900 text-slate-300 hover:bg-slate-700">
              <SkipForward size={20} />
            </button>
          </div>
        </div>

        {/* Volume */}
        <div className="mt-8 flex items-center gap-4">
          <Volume2 className="text-black" size={18} />

          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="h-2 w-full cursor-pointer accent-green-950"
          />
        </div>
      </div>
    </main>
  );
}