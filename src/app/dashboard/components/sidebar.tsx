"use client"
import * as React from "react"
import {
    Box,
    ChevronRight,
    File,
    Inbox,
    LayoutDashboard,
    Presentation,
    UserRound,


} from "lucide-react"

import {
    useWindowWidth,
} from '@react-hook/window-size'

import { Nav } from "./ui/nav"
import { useState } from "react"
import { Button } from "@/components/ui/button"
type Props = {
}


export function Sidebar({ }: Props) {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 850;
    function toggleCollapsed() {
        setIsCollapsed(!isCollapsed)
    }


    return (
        <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
            {!mobileWidth && (
                <div className="absolute right-[-20px] top-[20px]">

                    <Button variant="secondary" className="rounded-full p-2" onClick={toggleCollapsed}>
                        <ChevronRight />
                    </Button>
                </div>

            )}

            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        label: "",
                        icon: LayoutDashboard,
                        variant: "default",
                        href: "/dashboard"
                    },
                    {
                        title: "Users",
                        label: "",
                        icon: UserRound,
                        variant: "ghost",
                        href: "/dashboard/users"
                    },
                    {
                        title: "Skills",
                        label: "",
                        icon: Box,
                        variant: "ghost",
                        href: "/dashboard/skills"
                    },
                    {
                        title: "Projects",
                        label: "",
                        icon: Presentation,
                        variant: "ghost",
                        href: "/dashboard/projects"
                    },

                ]}
            />
        </div>
    )
}