import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "~/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table";

export default function Customers() {
    return (
        <main className="p-8">
            <Card x-chunk="dashboard-01-chunk-5">
                <CardHeader>
                    <CardTitle>Customers Information</CardTitle>
                    <CardDescription>
                        recent customers from your hotel
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-8">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone Number</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <div className="flex items-center gap-4">
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage
                                                src="/avatars/01.png"
                                                alt="Avatar"
                                            />
                                            <AvatarFallback>OM</AvatarFallback>
                                        </Avatar>
                                        <div className="grid gap-1">
                                            <p className="text-sm font-medium leading-none">
                                                Olivia Martin
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <p className="text-sm text-muted-foreground">
                                        olivia.martin@email.com
                                    </p>
                                </TableCell>

                                <TableCell>982534123</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    );
}
