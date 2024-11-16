import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const Table = ({ columns = [], data = [], pageSize = 10 }) => {
  const [page, setPage] = useState(0);

  if (!Array.isArray(columns) || !Array.isArray(data)) {
    return (
      <div className="p-4 text-center text-red-500 font-semibold">
        Invalid table configuration. Please check the `columns` and `data`.
      </div>
    );
  }

  const totalPages = Math.ceil(data?.length / pageSize);

  const paginatedData = useMemo(() => {
    return data
      ?.slice(page * pageSize, (page + 1) * pageSize)
      ?.map((row, index) => ({
        ...row,
        sn: page * pageSize + index + 1,
      }));
  }, [data, page, pageSize]);

  const columnsWithSN = [{ header: "SN", accessorKey: "sn" }, ...columns];

  const table = useReactTable({
    data: paginatedData,
    columns: columnsWithSN,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg shadow-sm bg-white">
        <thead className="bg-gray-200">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left text-gray-700 font-semibold text-sm uppercase"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td
                colSpan={columnsWithSN.length}
                className="px-4 py-6 text-gray-500 text-center"
              >
                No Data Available
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b hover:bg-gray-50 transition-colors"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 text-gray-700 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          {data.length > 0 && (
            <tr>
              <td colSpan={columnsWithSN.length} className="px-4 py-3">
                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    disabled={page === 0}
                    className="px-2 py-1 bg-blue-500 text-white font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                  >
                    Previous
                  </button>
                  <span className="text-gray-700 font-medium">
                    Page {page + 1} of {totalPages}
                  </span>
                  <button
                    onClick={() =>
                      setPage((prev) => Math.min(prev + 1, totalPages - 1))
                    }
                    disabled={page >= totalPages - 1}
                    className="px-2 py-1 bg-blue-500 text-white font-semibold rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                  >
                    Next
                  </button>
                </div>
              </td>
            </tr>
          )}
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
