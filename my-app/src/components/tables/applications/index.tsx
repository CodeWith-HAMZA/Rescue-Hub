import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Application from "@/interfaces/application";
import clsx from "clsx";

interface Props {
  readonly applications?: Application[];
}
export default function Applications({ applications }: Props) {
  console.log(applications);
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
              <TableHead>Flood Severity</TableHead>
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
            {applications?.map(
              ({
                city,
                contactEmail,
                contactName,
                contactPhone,
                country,
                created_at,
                description,
                id,
                status,
                updated_at,
                userId,
                earthquakeDate,
                earthquakeLocation,
                floodDate,
                floodLocation,
                floodSeverity,
                magnitude,
              }: Application): React.ReactNode => {
                return (
                  <>
                    <TableRow>
                      <TableCell>{floodSeverity}</TableCell>
                      {/* <TableCell>{description}</TableCell> */}

                      <TableCell>
                        <Badge
                          className={clsx({
                            "bg-yellow-700/40 pb-1 text-yellow-700":
                              status === "processing",
                            "bg-blue-700/40 pb-1 text-blue-700":
                              status === "pending",
                            "bg-green-700/40 pb-1 text-green-700":
                              status === "eligible",
                            "bg-red-700/40 pb-1 text-red-700":
                              status === "not_eligible",
                          })}
                        >
                          {status}
                        </Badge>
                      </TableCell>
                      <TableCell>{city}</TableCell>
                      <TableCell>{country}</TableCell>
                      <TableCell>
                        <div>{contactName}</div>
                        <div>{contactPhone}</div>
                        <div>{contactEmail}</div>
                      </TableCell>
                      <TableCell>{magnitude ?? "-"}</TableCell>
                      <TableCell>
                        {floodLocation || earthquakeLocation}
                      </TableCell>
                      <TableCell>2023-06-15</TableCell>
                    </TableRow>
                  </>
                );
              }
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
