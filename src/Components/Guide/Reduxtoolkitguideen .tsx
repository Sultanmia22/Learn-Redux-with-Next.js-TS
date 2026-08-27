"use client"
import { useState } from "react";

type Phase = "SETUP" | "USE";

interface Step {
  id: string;
  phase: Phase;
  title: string;
  file: string;
  desc: string;
  code: string;
  lang: string;
}

const steps: Step[] = [
  {
    id: "install",
    phase: "SETUP",
    title: "Install packages",
    file: "terminal",
    desc: "You need both — RTK handles the logic, React-Redux connects it to your components.",
    code: `npm install @reduxjs/toolkit react-redux`,
    lang: "bash",
  },
  {
    id: "slice",
    phase: "SETUP",
    title: "Create a slice",
    file: "store/features/counterSlice.ts",
    desc: "State, reducers, and actions all live together here. createSlice uses Immer internally, so mutating state directly (state.value += 1) is safe.",
    code: `import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;`,
    lang: "typescript",
  },
  {
    id: "store",
    phase: "SETUP",
    title: "Create the store",
    file: "store/store.ts",
    desc: "All slices get combined here. RootState and AppDispatch types are derived directly from this store.",
    code: `import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`,
    lang: "typescript",
  },
  {
    id: "provider",
    phase: "SETUP",
    title: "Provider component",
    file: "store/StoreProvider.tsx",
    desc: 'Needs "use client" — the store only lives on the client. useRef makes sure a new store isn\'t created on every re-render.',
    code: `"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<typeof store>(null);

  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}`,
    lang: "typescript",
  },
  {
    id: "hooks",
    phase: "SETUP",
    title: "Typed hooks",
    file: "store/hooks.ts",
    desc: "Wrapping useSelector and useDispatch with types once means you never repeat the generic types across the app.",
    code: `import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();`,
    lang: "typescript",
  },
  {
    id: "layout",
    phase: "SETUP",
    title: "Wrap the root layout",
    file: "app/layout.tsx",
    desc: "Wrap the whole app in StoreProvider, and the store becomes accessible from any client component.",
    code: `import StoreProvider from "@/store/StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}`,
    lang: "typescript",
  },
  {
    id: "read",
    phase: "USE",
    title: "Read state",
    file: "app/components/Counter.tsx",
    desc: "Pull out just the piece of state you need with useAppSelector. The component re-renders automatically whenever that slice changes.",
    code: `"use client";

import { useAppSelector } from "@/store/hooks";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);

  return <h2>Count: {count}</h2>;
}`,
    lang: "typescript",
  },
  {
    id: "write",
    phase: "USE",
    title: "Dispatch an action",
    file: "app/components/Counter.tsx",
    desc: "Get the dispatch function with useAppDispatch, then call the action creator exported from your slice.",
    code: `"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/store/features/counterSlice";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}`,
    lang: "typescript",
  },
];

const phaseColors: Record<Phase, { text: string; bg: string; border: string }> = {
  SETUP: { text: "text-cyan-600 dark:text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30 dark:border-cyan-400/40" },
  USE: { text: "text-orange-600 dark:text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30 dark:border-orange-400/40" },
};

interface CodeBlockProps {
  code: string;
}

function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/50 transition-colors font-mono bg-white/80 dark:bg-neutral-900/80"
      >
        {copied ? "copied" : "copy"}
      </button>
      <pre className="bg-neutral-100 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-lg p-4 overflow-x-auto text-[13px] leading-relaxed">
        <code className="font-mono text-neutral-800 dark:text-neutral-200 whitespace-pre">{code}</code>
      </pre>
    </div>
  );
}

export default function Reduxtoolkitguideen() {
  const [active, setActive] = useState<string>(steps[0].id);
  const activeStep = steps.find((s) => s.id === active) as Step;
  const activeIndex = steps.findIndex((s) => s.id === active);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-sans transition-colors duration-200">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 px-6 md:px-10 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Redux Toolkit
            <span className="text-neutral-400 dark:text-neutral-500 font-normal"> — Setup to Use</span>
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 mt-2 text-sm md:text-base max-w-2xl">
            The whole flow splits into two parts: first, 6 steps lay the
            foundation (SETUP), then you actually read and update state from
            a component (USE).
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 grid md:grid-cols-[220px_1fr] gap-8">
        {/* Sidebar / stepper */}
        <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          {(["SETUP", "USE"] as Phase[]).map((phase) => (
            <div key={phase} className="md:mb-4 flex md:flex-col gap-1 shrink-0">
              <p className={`text-[11px] font-mono tracking-widest mb-1 hidden md:block ${phaseColors[phase].text}`}>
                {phase}
              </p>
              {steps
                .filter((s) => s.phase === phase)
                .map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActive(s.id)}
                    className={`text-left px-3 py-2 rounded-md text-sm whitespace-nowrap md:whitespace-normal transition-colors border ${
                      active === s.id
                        ? `${phaseColors[phase].bg} ${phaseColors[phase].border} text-neutral-900 dark:text-white font-medium`
                        : "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                    }`}
                  >
                    <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 mr-2">
                      {String(steps.indexOf(s) + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </button>
                ))}
            </div>
          ))}
        </nav>

        {/* Main content */}
        <main>
          {/* progress dots */}
          <div className="flex items-center gap-1.5 mb-6">
            {steps.map((s, i) => (
              <div
                key={s.id}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i <= activeIndex
                    ? s.phase === "SETUP" ? "bg-cyan-500" : "bg-orange-500"
                    : "bg-neutral-200 dark:bg-neutral-800"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 mb-1">
            <span
              className={`text-[11px] font-mono px-2 py-0.5 rounded border ${phaseColors[activeStep.phase].border} ${phaseColors[activeStep.phase].text}`}
            >
              {activeStep.phase}
            </span>
            <span className="text-neutral-500 dark:text-neutral-600 text-xs font-mono">
              {activeStep.file}
            </span>
          </div>

          <h2 className="text-2xl font-bold mb-2">{activeStep.title}</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 leading-relaxed">
            {activeStep.desc}
          </p>

          <CodeBlock code={activeStep.code} />

          {/* nav buttons */}
          <div className="flex justify-between mt-6">
            <button
              disabled={activeIndex === 0}
              onClick={() => setActive(steps[activeIndex - 1].id)}
              className="text-sm px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 disabled:opacity-30 disabled:cursor-not-allowed hover:border-neutral-500 dark:hover:border-neutral-600 transition-colors"
            >
              ← Previous
            </button>
            <button
              disabled={activeIndex === steps.length - 1}
              onClick={() => setActive(steps[activeIndex + 1].id)}
              className="text-sm px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-neutral-950 text-white font-medium disabled:opacity-30 disabled:cursor-not-allowed dark:hover:bg-cyan-400 transition-colors"
            >
              Next →
            </button>
          </div>
        </main>
      </div>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 px-6 md:px-10 py-6 mt-8">
        <p className="max-w-5xl mx-auto text-xs text-neutral-500 dark:text-neutral-600 font-mono">
          Next up: createAsyncThunk for API calls, then RTK Query — to apply
          on your products/cart.
        </p>
      </footer>
    </div>
  );
}