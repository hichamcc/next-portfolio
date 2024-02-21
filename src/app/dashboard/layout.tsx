import type { Metadata } from "next";
import { Sidebar } from "./components/sidebar";
import './globals.css'

export const metadata: Metadata = {
    title: "Dashboard ",
    description: "Portfolio Dashboard",
};

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {


    return (
        <>
            <div className="flex h-screen overflow-hidden bg-white text-black">
                <Sidebar />
                <main className="w-full p-8">{children}</main>
            </div>
        </>
    );
}