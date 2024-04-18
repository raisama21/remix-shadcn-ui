import { LoaderFunctionArgs } from "@remix-run/node";
import { Badge } from "~/components/ui/badge";
import { json } from "@remix-run/node";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "~/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";
import { useLoaderData } from "@remix-run/react";

export function loader({ params }: LoaderFunctionArgs) {
    const transactions = [
        {
            id: "27b9bce2-72c3-4f71-9db2-8eeeb8a0b5f1",
            name: "Liam Johnson",
            email: "liam@example.com",
            method: "digital wallet",
            status: "Paid",
            date: "2023-06-23",
            amount: 2500,
        },
        {
            id: "9c39b446-ff9f-4d3d-8e14-3d5e0d5c7c8b",
            name: "Emma Davis",
            email: "emma.davis@example.com",
            method: "digital wallet",
            status: "Paid",
            date: "2024-03-15",
            amount: 1800,
        },
        {
            id: "3af0f5b1-961b-4f15-b0d5-df5f189b18e2",
            name: "Sophia Smith",
            email: "sophia.smith@example.com",
            method: "digital wallet",
            status: "Paid",
            date: "2024-02-10",
            amount: 2200,
        },
        {
            id: "af0c3767-93f5-4378-bb0b-5227e4d7c5f1",
            name: "Noah Brown",
            email: "noah.brown@example.com",
            method: "digital wallet",
            status: "Paid",
            date: "2024-04-02",
            amount: 1500,
        },
        {
            id: "d135c1b2-9fa6-4341-90a7-bec6f489a49f",
            name: "Olivia Wilson",
            email: "olivia.wilson@example.com",
            method: "digital wallet",
            status: "Pending",
            date: "2024-03-25",
            amount: 3000,
        },
        {
            id: "d8450349-1f2b-4d9d-9db3-0244982c5e2b",
            name: "William Taylor",
            email: "william.taylor@example.com",
            method: "digital wallet",
            status: "Pending",
            date: "2024-04-05",
            amount: 2700,
        },
        {
            id: "82b4c3bb-0725-4430-bbfb-73dfda75a504",
            name: "Ava Martinez",
            email: "ava.martinez@example.com",
            method: "digital wallet",
            status: "Cancelled",
            date: "2024-01-20",
            amount: 1900,
        },
        {
            id: "02a929e2-d84e-45b6-b1d8-72537941dca1",
            name: "James Anderson",
            email: "james.anderson@example.com",
            method: "digital wallet",
            status: "Cancelled",
            date: "2024-03-08",
            amount: 3500,
        },
    ];

    return json({ transactions });
}

export default function Transactions() {
    const { transactions } = useLoaderData<typeof loader>();

    return (
        <main className="p-8">
            <Card>
                <CardHeader>
                    <CardTitle>Transactions</CardTitle>
                    <CardDescription>
                        recent transaction from your hotel
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Amount</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {transactions.map((transaction) => {
                                return (
                                    <TableRow key={transaction.id}>
                                        <TableCell>
                                            <div className="font-medium">
                                                {transaction.name}
                                            </div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                {transaction.email}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {transaction.method}
                                        </TableCell>
                                        <TableCell>
                                            <Badge
                                                className="text-xs"
                                                variant="outline"
                                            >
                                                {transaction.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            {transaction.date}
                                        </TableCell>
                                        <TableCell className="text-left">
                                            ₹{transaction.amount}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    );
}
