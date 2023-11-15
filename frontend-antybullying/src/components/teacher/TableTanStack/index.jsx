import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import moment from "moment";
import {
  createColumnHelper,
  flexRender,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "https://antibullying-test.fly.dev";
const columnHelper = createColumnHelper();

const columns = [
  columnHelper.accessor("waktuDilaporkan", {
    cell: (info) => (
      <span>{moment(info.getValue()).format("MMMM Do YYYY, h:mm a")}</span>
    ),
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
    cell: (info) => (
      <span>{moment(info.getValue()).format("MMMM Do YYYY, h:mm a")}</span>
    ),
    header: "Waktu Kejadian",
  }),
  columnHelper.accessor("deskripsiKejadian", {
    cell: (info) => <span>{info.getValue()}</span>,
    header: "Deskripsi",
  }),
  columnHelper.accessor("status", {
    id: "status",
    cell: (info) => <span>{info.getValue()}</span>,
    header: "Status",
  }),
];

function index({ statusFromFilter }) {
  const { handleState, handleFunction } = useContext(GlobalContext);
  const { listAllReport, loadingListAllReport } = handleState;
  const { getDetailReport } = handleFunction;
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = Cookies.get("token");
        await axios
          .get(`${BASE_URL}/api/reports`, {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            console.log(res.data.data);
            setData(res.data.data);
          });
      } catch (data) {
        console.error(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(statusFilter);
    setStatusFilter(statusFromFilter);
  }, [statusFromFilter]);

  const [sorting, setSorting] = useState([]);
  const [statusFilter, setStatusFilter] = useState(statusFromFilter);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      columnFilters: statusFilter,
    },
    onSortingChange: setSorting,
  });

  if (loadingListAllReport) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <table className="bg-slate-200 w-full rounded-md shadow-md table-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="text-left border-b border-black">
              {headerGroup.headers.map((header) => (
                <th
                  onClick={header.column.getToggleSortingHandler()}
                  key={header.id}
                  className="p-4">
                  <div className="flex items-center">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {!loadingListAllReport && (
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  onClick={getDetailReport(row.original.id)}
                  className="border-t cursor-pointer border-slate-300 hover:bg-slate-100">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="p-4 w-48">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </tbody>
        )}
      </table>
    </>
  );
}

export default index;
