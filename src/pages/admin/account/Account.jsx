import React from "react";
import { useFetchUsers } from "./account.api";
import Table from "../../../components/ui/table/Table";

const Account = () => {
  const { data: account, isLoading, isError, error } = useFetchUsers();

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  const columns = [
    {
      header: "Fullname",
      cell: ({ row }) => row.original.firstname + " " + row.original.lastname,
    },
    { header: "Email", accessorKey: "email" },
    { header: "Role", accessorKey: "role" },
  ];
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Account</h2>
      </div>
      <Table columns={columns} data={account} />
    </div>
  );
};

export default Account;
