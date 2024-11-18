import React from "react";
import { useFetchUsers, useDeleteUser } from "./account.api";
import Table from "../../../components/ui/table/Table";
import { toast } from "react-toastify";

const Account = () => {
  const { data: account, isLoading, isError, error } = useFetchUsers();
  const deleteMutation = useDeleteUser();

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
    {
      header: "Verified",
      accessorKey: "isVerified",
    },
    {
      header: "Actions",
      cell: ({ row }) => {
        return (
          <button
            onClick={() => handleDeleteUser(row.original._id)}
            className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Delete
          </button>
        );
      },
    },
  ];

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteMutation.mutate(id, {
        onSuccess: () => toast.success("User deleted successfully!"),
        onError: (error) =>
          toast.error(error?.response?.data?.message || "Fail to delete"),
      });
    }
  };

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
