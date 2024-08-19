"use client";
import { usersColumn } from "@/components/tables/columns";
import { DataTable } from "@/components/tables/data-table";
import { useAllUsersWithApplications } from "@/hooks/api/users/queries/useAllUsersWithApplications";

function UserList() {
  const { data, isLoading, error } = useAllUsersWithApplications();

  if (isLoading) return <span>Loading users...</span>;
  if (error) return <span>Error fetching users: {error.message}</span>;
  if (!data) return <span>No users found</span>;

  return (
    <DataTable
      props={{ title: "All Users On The Platform", renderWhat: "all-users" }}
      columns={usersColumn}
      data={data}
    />
  );
}

export default UserList;
