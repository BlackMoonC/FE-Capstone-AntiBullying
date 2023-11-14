import { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import moment from "moment";
import {
  createColumnHelper,
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";

function index() {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { listAllReport } = handleState;
  const { getDetailReport } = handleFunction;
  //   const [data] = useState(() => [...listAllReport]);
  const [data] = useState(listAllReport);

  console.log("listAllReport");
  console.log(listAllReport instanceof Array);
  console.log(listAllReport);
  //   console.log("data");
  //   console.log(data);

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("waktuDilaporkan", {
      cell: (info) => <span>{info.getValue}</span>,
      header: "Waktu Dilaporkan",
    }),
    columnHelper.accessor("namaPelapor", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Nama Pelapor",
    }),
    columnHelper.accessor("namaPelaku", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Nama Pelaku",
    }),
    columnHelper.accessor("lokasiKejadian", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Lokasi Kejadian",
    }),
    columnHelper.accessor("waktuKejadian", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Waktu Kejadian",
    }),
    columnHelper.accessor("deskripsiKejadian", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Deskripsi",
    }),
    columnHelper.accessor("status", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Status",
    }),
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getRowModel());
  return (
    <>
      <table className="bg-slate-200 w-full rounded-md shadow-md table-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="text-left border-b border-black">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-4">
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
          {/* {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
}

export default index;
