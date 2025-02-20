import { TopMenuDashboard } from "@/components";

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen">
            <TopMenuDashboard />
            {children}
        </main>
    );
}