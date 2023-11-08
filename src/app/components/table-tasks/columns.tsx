"use client"
 
import { ColumnDef } from "@tanstack/react-table"
import { Tasks } from "./types"

const formatTime  = (time:string)  => {
  const day = time.toLocaleString()
  const arraDay = day.split("")
  let date : string[] = [];
  arraDay.map((letter)=> {
    let findSpace = 0

    if(letter === " "){
      findSpace += 1
    }

    if(findSpace === 2){
      date.push(letter)
    }
    
  })
  
  
  return day
}


export const columns: ColumnDef<Tasks>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "createAt",
    header: "Create At",
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