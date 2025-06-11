import { AdminControlPanel } from "@/components/admin-control-panel"

export default function AdminControlPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Admin Control</h1>
        <p className="text-muted-foreground">Manage and control lab systems with administrative privileges.</p>
      </div>

      <AdminControlPanel />
    </div>
  )
}
