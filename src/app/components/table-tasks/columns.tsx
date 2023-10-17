"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { Tasks } from "./types"



export const columns: ColumnDef<Tasks>[] = [
  {
    accessorKey: "id",
    header: "Id",
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