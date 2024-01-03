import SideNav from "@/app/ui/dashboard/sidenav";

type TChildren = {
    children: React.ReactNode
}

export default function Layout({ children } : TChildren) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow md:overflow-y-auto md:p-12 bg-black/10">{children}</div>
        </div>
    )
}