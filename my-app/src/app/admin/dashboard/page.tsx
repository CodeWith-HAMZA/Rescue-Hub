// import React from "react";
// import { UserBarChart } from "./BarChart";

// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/9x2FPEjqeap
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
// import {
//   DropdownMenuTrigger,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuContent,
//   DropdownMenu,
// } from "@/components/ui/dropdown-menu";
// import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
// import { ResponsivePie } from "@nivo/pie";
// import { ResponsiveLine } from "@nivo/line";
// import {
//   TableHead,
//   TableRow,
//   TableHeader,
//   TableCell,
//   TableBody,
//   Table,
// } from "@/components/ui/table";

// export default function Component() {
//   return (
//     <div className="flex h-screen w-full flex-col">
//       <header className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
//         <div className="flex items-center gap-4">
//           <Link href="#">
//             <MountainIcon className="h-8 w-8" />
//             <span className="sr-only">Disaster Rescue</span>
//           </Link>
//           <nav className="hidden space-x-4 md:flex">
//             <Link
//               className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
//               href="#"
//             >
//               Dashboard
//             </Link>
//             <Link
//               className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
//               href="#"
//             >
//               Applications
//             </Link>
//             <Link
//               className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
//               href="#"
//             >
//               Assistance
//             </Link>
//             <Link
//               className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800"
//               href="#"
//             >
//               Reports
//             </Link>
//           </nav>
//         </div>
//         <div className="flex items-center gap-4">
//           <Button className="rounded-full" size="icon" variant="ghost">
//             <BellIcon className="h-6 w-6" />
//             <span className="sr-only">Notifications</span>
//           </Button>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Avatar className="h-9 w-9">
//                 <AvatarImage alt="@shadcn" src="/placeholder-avatar.jpg" />
//                 <AvatarFallback>JP</AvatarFallback>
//                 <span className="sr-only">Toggle user menu</span>
//               </Avatar>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuItem>My Account</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Logout</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </header>
//       <div className="flex flex-1 overflow-hidden">
//         <aside className="hidden w-64 flex-col border-r bg-gray-100 p-6 dark:border-gray-800 dark:bg-gray-900 md:flex">
//           <div className="space-y-6">
//             <div className="space-y-2">
//               <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
//                 Assistance Categories
//               </h4>
//               <nav className="space-y-1">
//                 <Link
//                   className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
//                   href="#"
//                 >
//                   <TruckIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
//                   Food
//                 </Link>
//                 <Link
//                   className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
//                   href="#"
//                 >
//                   <HomeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
//                   Shelter
//                 </Link>
//                 <Link
//                   className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
//                   href="#"
//                 >
//                   <BriefcaseMedicalIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
//                   Medical
//                 </Link>
//                 <Link
//                   className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
//                   href="#"
//                 >
//                   <BriefcaseIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
//                   Supplies
//                 </Link>
//                 <Link
//                   className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-800"
//                   href="#"
//                 >
//                   <AmbulanceIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
//                   Emergency
//                 </Link>
//               </nav>
//             </div>
//           </div>
//         </aside>
//         <main className="flex-1 overflow-y-auto">
//           <div className="px-6 py-8">
//             <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//               <Card>
//                 <CardHeader className="flex items-center justify-between">
//                   <CardTitle>Total Applications</CardTitle>
//                   <ClipboardListIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold">1,234</div>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     +12% from last month
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="flex items-center justify-between">
//                   <CardTitle>Approved</CardTitle>
//                   <CircleCheckIcon className="h-6 w-6 text-green-500" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold">789</div>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     +8% from last month
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="flex items-center justify-between">
//                   <CardTitle>Pending</CardTitle>
//                   <ClockIcon className="h-6 w-6 text-yellow-500" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold">345</div>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     +4% from last month
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader className="flex items-center justify-between">
//                   <CardTitle>Denied</CardTitle>
//                   <CircleXIcon className="h-6 w-6 text-red-500" />
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold">100</div>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     +2% from last month
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Applications by Category</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <PieChart className="aspect-square" />
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Application Trends</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <LineChart className="aspect-[4/3]" />
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="mb-8">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Pending Applications</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <Table>
//                     <TableHeader>
//                       <TableRow>
//                         <TableHead>Name</TableHead>
//                         <TableHead>Location</TableHead>
//                         <TableHead>Situation</TableHead>
//                         <TableHead>Actions</TableHead>
//                       </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                       <TableRow>
//                         <TableCell>John Doe</TableCell>
//                         <TableCell>New York, NY</TableCell>
//                         <TableCell>Trapped in flooded building</TableCell>
//                         <TableCell className="flex gap-2">
//                           <Button size="sm" variant="outline">
//                             Approve
//                           </Button>
//                           <Button
//                             className="text-red-500"
//                             size="sm"
//                             variant="outline"
//                           >
//                             Deny
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Jane Smith</TableCell>
//                         <TableCell>Los Angeles, CA</TableCell>
//                         <TableCell>
//                           Injured and needs medical attention
//                         </TableCell>
//                         <TableCell className="flex gap-2">
//                           <Button size="sm" variant="outline">
//                             Approve
//                           </Button>
//                           <Button
//                             className="text-red-500"
//                             size="sm"
//                             variant="outline"
//                           >
//                             Deny
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>Bob Johnson</TableCell>
//                         <TableCell>Miami, FL</TableCell>
//                         <TableCell>Displaced due to hurricane</TableCell>
//                         <TableCell className="flex gap-2">
//                           <Button size="sm" variant="outline">
//                             Approve
//                           </Button>
//                           <Button
//                             className="text-red-500"
//                             size="sm"
//                             variant="outline"
//                           >
//                             Deny
//                           </Button>
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

// function AmbulanceIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M10 10H6" />
//       <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
//       <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
//       <path d="M8 8v4" />
//       <path d="M9 18h6" />
//       <circle cx="17" cy="18" r="2" />
//       <circle cx="7" cy="18" r="2" />
//     </svg>
//   );
// }

// function BellIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
//       <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
//     </svg>
//   );
// }

// function BriefcaseIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//       <rect width="20" height="14" x="2" y="6" rx="2" />
//     </svg>
//   );
// }

// function BriefcaseMedicalIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 11v4" />
//       <path d="M14 13h-4" />
//       <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
//       <path d="M18 6v14" />
//       <path d="M6 6v14" />
//       <rect width="20" height="14" x="2" y="6" rx="2" />
//     </svg>
//   );
// }

// function CircleCheckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="m9 12 2 2 4-4" />
//     </svg>
//   );
// }

// function CircleXIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="m15 9-6 6" />
//       <path d="m9 9 6 6" />
//     </svg>
//   );
// }

// function ClipboardListIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
//       <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
//       <path d="M12 11h4" />
//       <path d="M12 16h4" />
//       <path d="M8 11h.01" />
//       <path d="M8 16h.01" />
//     </svg>
//   );
// }

// function ClockIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   );
// }

// function HomeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   );
// }

// function LineChart(props) {
//   return (
//     <div {...props}>
//       <ResponsiveLine
//         data={[
//           {
//             id: "Desktop",
//             data: [
//               { x: "Jan", y: 43 },
//               { x: "Feb", y: 137 },
//               { x: "Mar", y: 61 },
//               { x: "Apr", y: 145 },
//               { x: "May", y: 26 },
//               { x: "Jun", y: 154 },
//             ],
//           },
//           {
//             id: "Mobile",
//             data: [
//               { x: "Jan", y: 60 },
//               { x: "Feb", y: 48 },
//               { x: "Mar", y: 177 },
//               { x: "Apr", y: 78 },
//               { x: "May", y: 96 },
//               { x: "Jun", y: 204 },
//             ],
//           },
//         ]}
//         margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//         xScale={{
//           type: "point",
//         }}
//         yScale={{
//           type: "linear",
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 5,
//           tickPadding: 16,
//         }}
//         colors={["#2563eb", "#e11d48"]}
//         pointSize={6}
//         useMesh={true}
//         gridYValues={6}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   );
// }

// function MountainIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }

// function PieChart(props) {
//   return (
//     <div {...props}>
//       <ResponsivePie
//         data={[
//           { id: "Jan", value: 111 },
//           { id: "Feb", value: 157 },
//           { id: "Mar", value: 129 },
//           { id: "Apr", value: 150 },
//           { id: "May", value: 119 },
//           { id: "Jun", value: 72 },
//         ]}
//         sortByValue
//         margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
//         cornerRadius={0}
//         padAngle={0}
//         borderWidth={1}
//         borderColor={"#ffffff"}
//         enableArcLinkLabels={false}
//         arcLabel={(d) => `${d.id}`}
//         arcLabelsTextColor={"#ffffff"}
//         arcLabelsRadiusOffset={0.65}
//         colors={["#2563eb"]}
//         theme={{
//           labels: {
//             text: {
//               fontSize: "18px",
//             },
//           },
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   );
// }

// function TruckIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
//       <path d="M15 18H9" />
//       <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
//       <circle cx="17" cy="18" r="2" />
//       <circle cx="7" cy="18" r="2" />
//     </svg>
//   );
// }

// {
// }

import React from "react";
import { UserBarChart } from "./BarChart";

export default function page() {
  return (
    <div>
      <UserBarChart />
    </div>
  );
}
