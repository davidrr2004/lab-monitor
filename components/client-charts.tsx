"use client"

import { UsageCharts } from "@/components/usage-charts"

export function ClientCharts({ period }: { period: "daily" | "weekly" | "monthly" }) {
  return <UsageCharts period={period} />
}
