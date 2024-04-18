import CardWrapper from "~/components/dashboard/card";
import Transaction from "~/components/dashboard/transaction";
import RecentCustomers from "~/components/dashboard/recent-customers";

export default function Dashboard() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <CardWrapper />

            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Transaction />

                <RecentCustomers />
            </div>
        </main>
    );
}
