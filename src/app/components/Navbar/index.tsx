import Link from 'next/link'
import React from 'react'
import { useSelectedLayoutSegment } from "next/navigation";

function NavBar() {

  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex flex-col gap-1 pl-4">
      <Link
        href={"/"}
        className={`${segment === null && "bg-slate-500 text-white "} text-xl mb-4`}
      >
        All Tasks
      </Link>
      <Link
        href={"/create-tasks"}
        className={`${segment === "create-tasks" && "bg-slate-500 text-white "} text-xl mb-4`}
      >
        Create Tasks
      </Link>
    </div>
  )
}

export default NavBar
