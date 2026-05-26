import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: React.ReactNode
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  const { isMobile } = useSidebar()

  const naviate = useNavigate()

  return (
    <SidebarGroup >
      <SidebarMenu>
        {items.map((item) => (
          <DropdownMenu  key={item.title}>
            <SidebarMenuItem>
              <DropdownMenuTrigger  asChild>
                <SidebarMenuButton onClick={()=> naviate(item.url) } className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                  {item?.icon}{item.title}
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </SidebarMenuItem>
          </DropdownMenu>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
