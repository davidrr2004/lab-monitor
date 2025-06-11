import { AlertCard } from "@/components/alert-card"
import { SystemStatusCard } from "@/components/system-status-card"
import { SystemsOverview } from "@/components/systems-overview"
import { UsageSummaryChart } from "@/components/usage-summary-chart"
import { Cpu, Network, Power, Wifi } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Monitor and manage your lab systems from a central dashboard.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <SystemStatusCard title="CPU Usage" value="42%" status="normal" icon={<Cpu className="h-4 w-4" />} />
        <SystemStatusCard
          title="Network Traffic"
          value="1.2 GB/s"
          status="high"
          icon={<Network className="h-4 w-4" />}
        />
        <SystemStatusCard
          title="Power Consumption"
          value="3.8 kW"
          status="warning"
          icon={<Power className="h-4 w-4" />}
        />
        <SystemStatusCard title="Internet Status" value="Online" status="online" icon={<Wifi className="h-4 w-4" />} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="mb-4 text-lg font-medium">Usage Summary</h3>
            <UsageSummaryChart />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Recent Alerts</h3>
            <div className="grid gap-4">
              <AlertCard
                title="High CPU Usage on LAB-PC-04"
                description="CPU usage has exceeded 90% for more than 10 minutes"
                timestamp="10 minutes ago"
                severity="high"
              />
              <AlertCard
                title="System Offline"
                description="LAB-PC-03 has gone offline unexpectedly"
                timestamp="2 hours ago"
                severity="critical"
              />
              <AlertCard
                title="Software Update Available"
                description="New security updates are available for all systems"
                timestamp="1 day ago"
                severity="low"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-medium">Systems Overview</h3>
          <SystemsOverview />
        </div>
      </div>
    </div>
  )
}
