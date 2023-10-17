"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { Tasks } from "./types"



export const columns: ColumnDef<Tasks>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "createAt",
    header: "Create At",
    /* cell: ({ row }) => {
      const time : string = row.getValue("createAt")
      const formattedTime = time.toLocaleString()

      return <div className="text-right font-medium">{formattedTime}</div>
    }, */
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "actions",
    header: "Actions",
  },
]