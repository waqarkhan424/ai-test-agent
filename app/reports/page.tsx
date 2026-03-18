import Link from "next/link";

type ReportsPageProps = {
  searchParams: Promise<{
    url?: string;
  }>;
};

const visitedPages = ["Homepage", "Login Page", "Pricing Page", "Contact Page"];
const actionsPerformed = [
  "Opened website",
  "Scanned visible links",
  "Clicked login button",
  "Checked login form",
  "Submitted empty form",
];
const issuesFound = [
  "Validation error shown on empty login submit",
  "No serious crash detected in this demo run",
];

export default async function ReportsPage({ searchParams }: ReportsPageProps) {
  const params = await searchParams;
  const url = params.url ?? "No URL provided";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Final Report
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Run Summary</h1>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Target URL: <span className="font-medium">{url}</span>
            </p>
          </div>

          <Link
            href={`/runs?url=${encodeURIComponent(url)}`}
            className="inline-flex items-center rounded-2xl border border-black/10 px-5 py-3 text-sm font-medium transition hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
          >
            Back to Logs
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-lg font-semibold">Run Info</h2>
            <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              <p><span className="font-medium text-foreground">Run ID:</span> run-001</p>
              <p><span className="font-medium text-foreground">Status:</span> Completed</p>
              <p><span className="font-medium text-foreground">Total Steps:</span> 5</p>
              <p><span className="font-medium text-foreground">Success:</span> 4</p>
              <p><span className="font-medium text-foreground">Warnings:</span> 1</p>
            </div>
          </section>

          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-lg font-semibold">Final Conclusion</h2>
            <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">
              Basic navigation works. Login page was reached successfully. Form
              validation also responded. This is still a demo frontend report and
              will later be replaced with real Playwright + AI results.
            </p>
          </section>

          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-lg font-semibold">Pages Visited</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              {visitedPages.map((page) => (
                <li key={page}>• {page}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900">
            <h2 className="text-lg font-semibold">Actions Performed</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              {actionsPerformed.map((action) => (
                <li key={action}>• {action}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-neutral-900 md:col-span-2">
            <h2 className="text-lg font-semibold">Issues Found</h2>
            <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
              {issuesFound.map((issue) => (
                <li key={issue}>• {issue}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}