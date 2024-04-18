import { Outlet } from "@remix-run/react";

import Header from "~/components/dashboard/header";

export default function DashboardLayout() {
    return (
        <>
            <Header />

            <Outlet />
        </>
    );
}
