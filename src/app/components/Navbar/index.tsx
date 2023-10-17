import Link from 'next/link'
import React from 'react'
import { useSelectedLayoutSegment } from "next/navigation";
import {HomeIcon} from '@heroicons/react/24/outline'
function NavBar() {

  const segment = useSelectedLayoutSegment();

  return (
    <div className="flex flex-col gap-1 h-screen bg-white px-2 pt-12">
      <Link
        href={"/"}
        className={`${segment === null && "bg-blue-500 text-white "} text-xl mb-4 flex py-4 rounded-md text-black`}
      >
        <span className='mx-4 '><HomeIcon width={24} height={24}/></span>
        All Tasks
      </Link>
      <Link
        href={"/create-tasks"}
        className={`${segment === "create-tasks" && "bg-blue-500 text-white "} text-xl mb-4 flex py-4 rounded-md text-black`}
      >
        <span className='mx-4 '><HomeIcon width={24} height={24}/></span>
        Create Tasks
      </Link>
    </div>
  )
}

export default NavBar
