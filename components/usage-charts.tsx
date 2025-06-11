"use client"

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data
const dailyData = [
  { hour: "00:00", cpu: 20, network: 15, power: 30, internet: 25 },
  { hour: "03:00", cpu: 15, network: 10, power: 25, internet: 20 },
  { hour: "06:00", cpu: 25, network: 20, power: 35, internet: 30 },
  { hour: "09:00", cpu: 70, network: 60, power: 75, internet: 65 },
  { hour: "12:00", cpu: 85, network: 75, power: 80, internet: 70 },
  { hour: "15:00", cpu: 75, network: 65, power: 70, internet: 60 },
  { hour: "18:00", cpu: 60, network: 50, power: 65, internet: 55 },
  { hour: "21:00", cpu: 40, network: 35, power: 45, internet: 40 },
]

const weeklyData = [
  { day: "Mon", cpu: 45, network: 40, power: 50, internet: 45 },
  { day: "Tue", cpu: 55, network: 50, power: 60, internet: 55 },
  { day: "Wed", cpu: 65, network: 60, power: 70, internet: 65 },
  { day: "Thu", cpu: 60, network: 55, power: 65, internet: 60 },
  { day: "Fri", cpu: 70, network: 65, power: 75, internet: 70 },
  { day: "Sat", cpu: 40, network: 35, power: 45, internet: 40 },
  { day: "Sun", cpu: 30, network: 25, power: 35, internet: 30 },
]

const monthlyData = [
  { week: "Week 1", cpu: 50, network: 45, power: 55, internet: 50 },
  { week: "Week 2", cpu: 60, network: 55, power: 65, internet: 60 },
  { week: "Week 3", cpu: 55, network: 50, power: 60, internet: 55 },
  { week: "Week 4", cpu: 65, network: 60, power: 70, internet: 65 },
]

const pieData = [
  { name: "Web Browsing", value: 40 },
  { name: "Programming", value: 25 },
  { name: "Multimedia", value: 20 },
  { name: "Other", value: 15 },
]

const COLORS = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))", "hsl(var(--muted))"]

interface UsageChartsProps {
  period: "daily" | "weekly" | "monthly"
}

export function UsageCharts({ period }: UsageChartsProps) {
  const data = period === "daily" ? dailyData : period === "weekly" ? weeklyData : monthlyData

  const xKey = period === "daily" ? "hour" : period === "weekly" ? "day" : "week"

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>CPU Usage</CardTitle>
          <CardDescription>Average CPU utilization over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorCpu" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey={xKey} className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="cpu"
                  stroke="hsl(var(--primary))"
                  fillOpacity={1}
                  fill="url(#colorCpu)"
                  name="CPU Usage (%)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Network Usage</CardTitle>
          <CardDescription>Network traffic over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey={xKey} className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="network"
                  stroke="hsl(var(--secondary))"
                  activeDot={{ r: 8 }}
                  name="Network Usage (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Power Consumption</CardTitle>
          <CardDescription>Power usage over time</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey={xKey} className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                  }}
                />
                <Bar dataKey="power" fill="hsl(var(--accent))" name="Power Usage (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Internet Usage Distribution</CardTitle>
          <CardDescription>Breakdown of internet usage by category</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
