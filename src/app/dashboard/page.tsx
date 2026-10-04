"use client";

import dynamic from "next/dynamic";
import { AppShell } from "@/components/app-shell";

const Dashboard = dynamic(
  () => import("@/components/dashboard").then((mod) => mod.Dashboard),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-3">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-xs text-muted-foreground font-mono">Loading Command Center...</p>
        </div>
      </div>
    ),
  }
);

export default function DashboardPage() {
  return (
    <AppShell>
      <Dashboard />
    </AppShell>
  );
}
