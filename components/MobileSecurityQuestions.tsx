"use client";

import { ShieldCheck, ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  "What is the name of your first school?",
  "What is your mother's maiden name?",
  "What city were you born in?",
  "What was your first pet's name?",
  "What was the name of your childhood best friend?",
];

export default function MobileSecurityQuestions() {
  const [question1, setQuestion1] = useState(questions[0]);
  const [question2, setQuestion2] = useState(questions[1]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-black bg-green-950">
          <ShieldCheck className="h-10 w-10 text-white" />
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold text-black">
            Security Questions
          </h1>

          <p className="mt-3 text-sm leading-6 text-black">
            These will be used to verify your identity if you
            <br />
            forget your password or PIN.
          </p>
        </div>

        {/* Form */}
        <div className="mt-10 space-y-6">
          {/* Question 1 */}
          <div>
            <label className="mb-2 block text-sm font-medium text-black">
              Security Question 1
            </label>

            <div className="relative">
              <select
                value={question1}
                onChange={(e) => setQuestion1(e.target.value)}
                className="h-14 w-full appearance-none rounded-xl border border-slate-700 bg-green-950 px-4 text-white focus:border-green-900 focus:outline-none"
              >
                {questions.map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>

              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            <input
              type="text"
              placeholder="Enter your answer"
              className="mt-3 h-14 w-full rounded-xl border border-slate-700 bg-green-950 px-4 text-white placeholder:text-white focus:border-green-900 focus:outline-none"
            />
          </div>

          {/* Question 2 */}
          <div>
            <label className="mb-2 block text-sm font-medium text-black">
              Security Question 2
            </label>

            <div className="relative">
              <select
                value={question2}
                onChange={(e) => setQuestion2(e.target.value)}
                className="h-14 w-full appearance-none rounded-xl border border-slate-700 bg-green-950 px-4 text-white focus:border-green-900 focus:outline-none"
              >
                {questions.map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>

              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>

            <input
              type="text"
              placeholder="Enter your answer"
              className="mt-3 h-14 w-full rounded-xl border border-slate-700 bg-green-950 px-4 text-white placeholder:text-white focus:border-green-900 focus:outline-none"
            />
          </div>

          {/* Information Box */}
          <div className="rounded-xl border border-slate-700 bg-green-950 p-4">
            <p className="text-sm leading-6 text-white">
              Your answers are encrypted and stored securely. They will only be
              used to recover your account if you forget your credentials.
            </p>
          </div>

          {/* Button */}
          <button className="h-14 w-full rounded-xl bg-green-950 font-semibold text-white transition hover:bg-green-800">
            Save & Continue
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-black">
            Step 3 of 3
          </p>
        </div>
      </div>
    </div>
  );
}