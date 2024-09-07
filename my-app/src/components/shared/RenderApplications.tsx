import Application from "@/interfaces/application";
import { DataTable } from "../tables/data-table";
import { ColumnDef } from "@tanstack/react-table";

function RenderApplications({
  data,
  applicationColumns,
}: {
  data: Array<Application>;
  applicationColumns: Array<ColumnDef<Application>>;
}) {
  return (
    <DataTable
      data={data}
      props={{
        title: "All The Applications On The Platform",
      }}
      columns={applicationColumns}
    />
  );
}

export default RenderApplications;
