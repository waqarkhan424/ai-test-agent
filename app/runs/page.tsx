import Link from "next/link";

type RunsPageProps = {
  searchParams: Promise<{
    url?: string;
  }>;
};

const demoLogs = [
  {
    step: 1,
    action: "Open website",
    status: "success",
    detail: "Homepage loaded successfully",
  },
  {
    step: 2,
    action: "Scan visible links",
    status: "success",
    detail: "Found login, pricing, contact links",
  },
  {
    step: 3,
    action: "Click login button",
    status: "success",
    detail: "Navigated to login page",
  },
  {
    step: 4,
    action: "Check login form",
    status: "success",
    detail: "Email and password fields detected",
  },
  {
    step: 5,
    action: "Submit empty form",
    status: "warning",
    detail: "Validation message appeared",
  },
];

export default async function RunsPage({ searchParams }: RunsPageProps) {
  const params = await searchParams;
  const url = params.url ?? "No URL provided";

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Test Run Logs
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Current Run</h1>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              Target URL: <span className="font-medium">{url}</span>
            </p>
          </div>

          <Link
            href={`/reports?url=${encodeURIComponent(url)}`}
            className="inline-flex items-center rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-black"
          >
            View Report
          </Link>
        </div>

        <div className="space-y-4">
          {demoLogs.map((log) => (
            <div
              key={log.step}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold">Step {log.step}</p>
                  <h2 className="text-lg font-semibold">{log.action}</h2>
                </div>

                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${
                    log.status === "success"
                      ? "bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-300"
                  }`}
                >
                  {log.status}
                </span>
              </div>

              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                {log.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}