/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9nYPnw3ZYs1
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function Applications() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Disaster Report</h1>
        <p className="text-muted-foreground">
          View the latest disaster incidents and their details.
        </p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Country</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Magnitude</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Severe earthquake in San Francisco</TableCell>
              <TableCell>
                <Badge variant="destructive">Ongoing</Badge>
              </TableCell>
              <TableCell>San Francisco</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>
                <div>John Doe</div>
                <div>+1 (555) 123-4567</div>
                <div>john.doe@example.com</div>
              </TableCell>
              <TableCell>7.2</TableCell>
              <TableCell>37.7749° N, 122.4194° W</TableCell>
              <TableCell>2023-06-15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Severe flooding in Bangkok</TableCell>
              <TableCell>
                <Badge variant="warning">Ongoing</Badge>
              </TableCell>
              <TableCell>Bangkok</TableCell>
              <TableCell>Thailand</TableCell>
              <TableCell>
                <div>Jane Smith</div>
                <div>+66 (0) 2-123-4567</div>
                <div>jane.smith@example.com</div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>13.7563° N, 100.5018° E</TableCell>
              <TableCell>2023-07-10</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tornado in Oklahoma City</TableCell>
              <TableCell>
                <Badge variant={'success'}>Resolved</Badge>
              </TableCell>
              <TableCell>Oklahoma City</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>
                <div>Bob Johnson</div>
                <div>+1 (405) 555-1234</div>
                <div>bob.johnson@example.com</div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>35.4676° N, 97.5164° W</TableCell>
              <TableCell>2023-05-20</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Volcanic eruption in Bali</TableCell>
              <TableCell>
                <Badge variant="destructive">Ongoing</Badge>
              </TableCell>
              <TableCell>Bali</TableCell>
              <TableCell>Indonesia</TableCell>
              <TableCell>
                <div>Ava Lee</div>
                <div>+62 (0) 361-123-4567</div>
                <div>ava.lee@example.com</div>
              </TableCell>
              <TableCell>-</TableCell>
              <TableCell>8.3405° S, 115.0920° E</TableCell>
              <TableCell>2023-08-01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
