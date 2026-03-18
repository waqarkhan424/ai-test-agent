import { StartTestForm } from "@/components/start-test-form";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-neutral-900">
          <div className="mb-8">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Phase 1 Frontend
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              AI Test Agent
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              Enter a website URL and start a test run. For now, this is only the
              frontend flow. The next pages will show dummy logs and a dummy report.
            </p>
          </div>

          <StartTestForm />

          <div className="mt-8 rounded-2xl border border-dashed border-black/10 p-4 dark:border-white/10">
            <p className="text-sm font-semibold">What works right now</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <li>• Enter website URL</li>
              <li>• Click Start Test</li>
              <li>• Go to logs page</li>
              <li>• Open report page</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}