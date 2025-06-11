import { ProfileForm } from "@/components/profile-form"

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your account information and security settings.</p>
      </div>

      <ProfileForm />
    </div>
  )
}
