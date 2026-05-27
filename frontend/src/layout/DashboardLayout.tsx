import { AppSidebar } from "@/components/app-sidebar"
import { Preview } from "@/components/dashboard/Preview"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 w-full h-full ">
          <div className="grid gap-4 md:grid-cols-[3fr_1fr] grow">
            <div className="min-h-20 rounded-xl bg-muted/50 md:order-1 order-2 p-4" >
              <Outlet />
            </div>
            <div className="h-full min-h-120 flex-center rounded-xl bg-muted/50 md:order-2 order-1">
              <Preview />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
