import Application from "@/interfaces/application";
import { applicationColumns } from "../tables/columns";
import { DataTable } from "../tables/data-table";

function RenderApplications({ data }: { data: Array<Application> }) {
  return (
    <DataTable
      data={data}
      props={{ title: "All The Applications On The Platform" }}
      columns={applicationColumns}
    />
  );
}

export default RenderApplications;
