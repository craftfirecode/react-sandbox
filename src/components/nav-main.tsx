import { useState } from "react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { ChevronRightIcon } from "lucide-react"
import { Link, useLocation } from "react-router"

interface NavItem {
  title: string
  url: string
  icon?: React.ReactNode
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

export function NavMain({ items }: { items: NavItem[] }) {
  const { isMobile, setOpenMobile } = useSidebar()
  const { pathname } = useLocation()

  return (
      <SidebarGroup>
        <SidebarGroupLabel>Platform</SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) => (
              <NavGroupItem
                  key={item.title}
                  item={item}
                  pathname={pathname}
                  isMobile={isMobile}
                  setOpenMobile={setOpenMobile}
              />
          ))}
        </SidebarMenu>
      </SidebarGroup>
  )
}

function NavGroupItem({
                        item,
                        pathname,
                        isMobile,
                        setOpenMobile,
                      }: {
  item: NavItem
  pathname: string
  isMobile: boolean
  setOpenMobile: (open: boolean) => void
}) {
  const hasActiveChild =
      item.items?.some((subItem) => pathname === subItem.url) || pathname === item.url

  const [userClickedOpen, setUserClickedOpen] = useState<boolean | null>(null)

  const [prevPathname, setPrevPathname] = useState(pathname)
  if (pathname !== prevPathname) {
    setPrevPathname(pathname)
    setUserClickedOpen(null)
  }

  const isOpen = userClickedOpen !== null ? userClickedOpen : hasActiveChild

  return (
      <Collapsible
          open={isOpen}
          onOpenChange={(open) => setUserClickedOpen(open)}
          className="group/collapsible"
          render={<SidebarMenuItem />}
      >
        <CollapsibleTrigger
            render={<SidebarMenuButton tooltip={item.title} />}
        >
          {item.icon}
          <span>{item.title}</span>
          <ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => {
              const isSubItemActive = pathname === subItem.url
              return (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton
                        render={<Link to={subItem.url} />}
                        isActive={isSubItemActive}
                        onClick={() => {
                          if (isMobile) {
                            setOpenMobile(false)
                          }
                        }}
                    >
                      <span>{subItem.title}</span>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
              )
            })}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
  )
}