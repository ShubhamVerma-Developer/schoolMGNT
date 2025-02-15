import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React from "react";

const TeacherListPage = () => {
  return (
    <div className="bg-white p-44 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="">
            <button>
              <Image src="/filter.png" alt="" width={10} height={10} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className=""></div>
      {/* PAGINATION */}
      <div className=""></div>
    </div>
  );
};

export default TeacherListPage;
