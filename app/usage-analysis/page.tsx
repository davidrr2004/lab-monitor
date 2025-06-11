"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClientCharts } from "@/components/client-charts"

export default function UsageAnalysisPage() {
  const [period, setPeriod] = useState<"daily" | "weekly" | "monthly">("daily")

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Usage Analysis</h1>
        <p className="text-muted-foreground">Analyze system usage patterns and resource consumption over time.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resource Usage</CardTitle>
          <CardDescription>View detailed usage statistics for all systems</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="daily" className="w-full" onValueChange={(value) => setPeriod(value as any)}>
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <div className="mt-6">
              <ClientCharts period={period} />
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
