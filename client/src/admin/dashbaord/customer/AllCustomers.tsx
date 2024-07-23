import { useSidebarContext } from "@/contexts/SidebarContext";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    ColumnDef,
    flexRender,
    SortingState,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import customerData from "@/admin/dashbaord/customer/data";
import { useMemo, useState } from "react";

type GlobalFilterProps = {
    globalFilter: string;
    setGlobalFilter: (value: string) => void;
};

function GlobalFilter({ globalFilter, setGlobalFilter }: GlobalFilterProps) {
    return (
        <span>

            <Input
                value={globalFilter || ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder={`Search records...`}
                className="border border-gray-300 rounded-md px-2 py-1"
            />
    </span>
    );
}

const AllCustomers = () => {
    const { isCollapsed } = useSidebarContext();
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState("");

    const data = useMemo(() => customerData, []);
    const columns = useMemo<ColumnDef<any>[]>(
        () => [
            {
                header: "ID",
                accessorKey: "id",
            },
            {
                header: "Avatar",
                accessorKey: "avatar",

            },
            {
                header: "Name",
                accessorKey: "name",
            },
            {
                header: "Email",
                accessorKey: "email",
            },
            {
                header: "Package",
                accessorKey: "package",
            },
            {
                header: "Booking Status",
                accessorKey: "bookingStatus",
            },
            {
                header: "Room Type",
                accessorKey: "roomType",
            },
            {
                header: "Arrive Date",
                accessorKey: "arriveDate",
            },
            {
                header: "Payment Status",
                accessorKey: "paymentStatus",
            },
        ],
        []
    );

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
            globalFilter,
        },
        onSortingChange: setSorting,
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div
            style={{ marginLeft: isCollapsed ? "90px" : "305px" }}
            className="mt-6 mr-10"
        >
            <h1 className="text-3xl font-semibold text-[#64748b]">
                Dashboard overview
            </h1>
            <GlobalFilter
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
            />
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            {table.getHeaderGroups().map((headerGroup) => (
                                <tr key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => (
                                        <th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            style={{ cursor: "pointer" }}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: " 🔼",
                                                desc: " 🔽",
                                            }[header.column.getIsSorted() as string] ?? null}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {table.getRowModel().rows.map((row) => (
                                <tr key={row.id}>
                                    {row.getVisibleCells().map((cell) => (
                                        <td
                                            key={cell.id}
                                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex-1 flex items-center">
                    <button
                        onClick={() => table.setPageIndex(0)}
                        disabled={!table.getCanPreviousPage()}
                        className="px-3 py-1 bg-gray-200 rounded-md mr-2 disabled:opacity-50"
                    >
                        {"<<"}
                    </button>
                    <button
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                        className="px-3 py-1 bg-gray-200 rounded-md mr-2 disabled:opacity-50"
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                        className="px-3 py-1 bg-gray-200 rounded-md mr-2 disabled:opacity-50"
                    >
                        {">"}
                    </button>
                    <button
                        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                        disabled={!table.getCanNextPage()}
                        className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
                    >
                        {">>"}
                    </button>
                </div>
                <div className="flex-1 text-center">
          <span>
            Page{" "}
              <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
                  {table.getPageCount()}
            </strong>{" "}
          </span>
                    <span>
            | Go to page:{" "}
                        <input
                            type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={(e) => {
                                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                                table.setPageIndex(page);
                            }}
                            style={{ width: "50px" }}
                            className="border border-gray-300 rounded-md px-2 py-1"
                        />
          </span>
                </div>
                <div className="flex-1 text-right">
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                        className="border border-gray-300 rounded-md px-2 py-1"
                    >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                Show {pageSize}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default AllCustomers;
