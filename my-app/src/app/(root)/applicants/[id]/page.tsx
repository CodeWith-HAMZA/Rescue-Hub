"use client";
import FilePreview from "@/components/FilePreview";
import DamageBadge from "@/components/shared/DamageBadge";
import { FloodSeverityBadge } from "@/components/shared/FloodSeverityBadge";
import { MagnitudeBadge } from "@/components/shared/MagnitudeBadge";
import StatusBadge from "@/components/shared/StatusBadge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useApplicationById } from "@/hooks/api/applications/queries/useApplicationDetails";
import { formatDate } from "@/lib/utils";

export default function ApplicationDetailsPage({ params, searchParams }: any) {
  const { data, isPending, error, isError } = useApplicationById(
    params?.id || ""
  );
  console.log(data, error, params);
  if (error) {
    return "error";
  }
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold capitalize">
            {data?.contactName} Lat x Long: ({data?.floodLocation})
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Application Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Status</div>

                {data?.status && <StatusBadge status={data?.status} />}
              </div>
              <div>
                <div className="text-md mb-4 text-muted-foreground">
                  Disasters
                </div>
                {data?.magnitude ? (
                  <div className="flex gap-2 items-center text-muted-foreground">
                    <span className="text-sm font-semibold">EarthQuake: </span>
                    <MagnitudeBadge magnitude={data?.magnitude} />
                  </div>
                ) : null}
                {data?.floodSeverity ? (
                  <div className="flex gap-2 mt-2 items-center text-muted-foreground">
                    <span className="text-sm font-semibold">
                      Flood Serverity:{" "}
                    </span>
                    <FloodSeverityBadge severity={data?.floodSeverity} />
                  </div>
                ) : null}
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium capitalize">
                  {data?.city}, {data?.country}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Magnitude</div>
                <div className="font-medium">{data?.magnitude}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Damage</div>
                <div className="font-medium">
                  <DamageBadge
                    earthquakeMagnitude={Number(data?.magnitude)}
                    floodState={data?.floodSeverity || "Minor"}
                    showPercentage={false}
                  />
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Casualties</div>
                <div className="font-medium">12</div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex items-center justify-between">
              {data?.created_at && (
                <div className="text-sm text-muted-foreground">
                  Submitted on {formatDate(data?.created_at, "DD/MM/YYYY") } at {formatDate(data?.created_at, '(HH:mm)' )}
                </div>
              )}
              {/* <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <DownloadIcon className="h-5 w-5" />
                  <span className="sr-only">Download</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <ShareIcon className="h-5 w-5" />
                  <span className="sr-only">Share</span>
                </Button>
              </div> */}
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Details For Damage Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-muted-foreground">
                  Damage Level
                </div>
                <div className="font-medium">
                  {" "}
                  <DamageBadge
                    earthquakeMagnitude={Number(data?.magnitude)}
                    floodState={data?.floodSeverity || "Minor"}
                    showPercentage={true}
                  />
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Emergency Contact Phone Number
                </div>
                <div className="font-medium">{data?.contactPhone}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Applicant Email-Address Or CNIC
                </div>
                <div className="font-medium">{data?.contactEmail}</div>
              </div>
              {data?.floodSeverity && data?.floodLocation ? (
                <div>
                  <div className="text-sm text-muted-foreground">
                    Flood Location (Co-Ordinates)
                  </div>
                  <div className="font-medium">{data?.floodLocation}</div>
                </div>
              ) : null}
              {data?.magnitude && data?.magnitude ? (
                <div>
                  <div className="text-sm text-muted-foreground">
                    Earth Location (Co-Ordinates)
                  </div>
                  <div className="font-medium">{data?.earthquakeLocation}</div>
                </div>
              ) : null}
              {data?.updated_at ? (
                <div>
                  <div className="text-sm text-muted-foreground">
                    Last Updated
                  </div>
                  <div className="font-medium">
                    {formatDate(data?.updated_at, "DD/MM/YYYY")}
                  </div>
                </div>
              ) : null}

              {/* <div>
                <div className="text-sm text-muted-foreground">
                  Description (Attachment Notes)
                </div>
                <div className="font-medium">
                  {data?.description
                    ? data?.description
                    : "No Description Provided By The Applicant"}
                </div>
              </div> */}
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2 col-span-1">
          <CardHeader>
            <CardTitle>Attached Media And Description And Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full place-items-start gap-4">
              <div>
                <div className="font-medium text-lg">
                  Description Or Notes By Applicant
                </div>
                <p className="text-md text-muted-foreground">
                  {data?.description}
                </p>
              </div>
              <div className="w-full">
                <FilePreview
                  onlyPreview
                  filesForPreview={data?.mediaFiles?.map((_) => _?.url)}
                />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Data (Last Updated) at:{" "}
                  {data?.updated_at
                    ? formatDate(data.updated_at, "DD/MM/YYYY (HH:mm)")
                    : null}
                </div>
              </div>
              {/* <div>
                <div className="text-sm text-muted-foreground">
                  Applicant Email-Address
                </div>
                <div className="font-medium">{data?.contactEmail}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Medical</div>
                <div className="font-medium">Ongoing</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Debris Removal
                </div>
                <div className="font-medium">In Progress</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">
                  Rebuilding Efforts
                </div>
                <div className="font-medium">Planned</div>
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function DownloadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function ShareIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
