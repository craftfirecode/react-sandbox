import {Link, Outlet, useLocation} from "react-router";
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar.tsx";
import {AppSidebar} from "@/components/app-sidebar.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb.tsx";
import React from "react";

export default function ProtectedLayout() {
    const location = useLocation();
    const pathname = location.pathname.split('/').filter((x) => x);

    const breadcrumbMap: Record<string, string> = {
        app: "Dashboard",
        dashboard: "Dashboard",
        ecoflow: "Eco Flow",
        crypto: "Crypto",
    };

    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header
                    className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1"/>
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {pathname.map((value, index) => {
                                    const last = index === pathname.length - 1;
                                    const to = `/${pathname.slice(0, index + 1).join('/')}`;
                                    const label = breadcrumbMap[value.toLowerCase()] || value;

                                    if (value.toLowerCase() === "app" && pathname[index + 1] === "dashboard") {
                                        return null;
                                    }

                                    return (
                                        <React.Fragment key={to}>
                                            <BreadcrumbItem className={index === 0 ? "hidden md:block" : ""}>
                                                {last ? (
                                                    <BreadcrumbPage>{label}</BreadcrumbPage>
                                                ) : (
                                                    <BreadcrumbLink render={<Link to={to} />}>
                                                        {label}
                                                    </BreadcrumbLink>
                                                )}
                                            </BreadcrumbItem>
                                            {!last && <BreadcrumbSeparator className="hidden md:block"/>}
                                        </React.Fragment>
                                    );
                                })}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
