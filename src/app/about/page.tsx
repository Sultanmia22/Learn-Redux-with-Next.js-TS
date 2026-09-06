import Link from "next/link";

export const metadata = {
  title: "About — Learn Redux Toolkit",
  description: "About this Redux Toolkit learning project.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Redux Toolkit Learn
        </h1>
        <p className="text-muted-foreground mb-6">
          A step-by-step guide to Redux Toolkit — from store setup to reading
          and dispatching state, with practical Next.js App Router examples.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-cyan-600 px-4 py-2 text-sm font-medium text-white hover:bg-cyan-500 transition"
        >
          Back to Guide
        </Link>
      </div>
    </div>
  );
}
