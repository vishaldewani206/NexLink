import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Command, GalleryVerticalEndIcon, LayoutTemplate, Palette, PanelBottom, Type, UserRound, Wallpaper } from "lucide-react"
import { Button } from "./ui/button"

const data = {
  navMain: [
    {
      title: "Theme",
      url: "/dashboard/theme",
      icon: <LayoutTemplate />,
    },
    {
      title: "Header",
      url: "/dashboard/header",
      icon: <UserRound />,
    },
    {
      title: "Wallpaper",
      url: "/dashboard/wallpaper",
      icon: <Wallpaper />,
    
    },
    {
      title: "Text",
      url:"/dashboard/text",
      icon: <Type />
    },
    {
      title: "Buttons",
      url: "/dashboard/buttons",
      icon: <Command />
    },
    {
      title: "Colors",
      url: "/dashboard/colors",
      icon: <Palette />
    },
    {
      title: "Footer",
      url: "/dashboard/footer",
      icon: <PanelBottom />
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEndIcon className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Linkist</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
        <div className="py-4 px-2">
          <Button className="w-full" variant={'destructive'}>Logout</Button>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
