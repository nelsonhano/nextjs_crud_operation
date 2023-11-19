import Image from "next/image";
import { BiEdit, BiTrash } from "react-icons/bi";

export default function Table() {
  return (
    <table className="table-auto w-full">
        <thead className="py-4 bg-slate-900">
            <tr className="py-2 px-4">
                <th className="text-gray-200">Name</th>
                <th className="text-gray-200">Email</th>
                <th className="text-gray-200">Salary</th>
                <th className="text-gray-200">Birthday</th>
                <th className="text-gray-200">Status</th>
                <th className="text-gray-200">Actions</th>
            </tr>
        </thead>
        <tbody className="bg-gray-200">
          <tr>
            <td className="px-16 py-2 flex flex-row items-center gap-1 ">
              {/* <Image
                src="vercel.svg"
                alt="tabel_data"
                width={35}
                height={35}
              /> */}
              <span className="text-center">koinyan</span>
            </td>
            <td className="px-16 py-2">
              <span>koinyan@gmail.com</span>
            </td>
            <td className="px-16 py-2">
              <span>$234</span>
            </td>
            <td className="px-16 py-2">
              <span>2002</span>
            </td>
            <td className="px-16 py-2">
              <button className="cursor">
                <span className="bg-green-500 text-white p-1 rounded-md">Active</span>
              </button>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
              <button>
                <BiEdit 
                  size={25}
                  color={"#15803d"}
                />
              </button>
              <button>
                <BiTrash 
                  size={25}
                  color={"#991b1b"}
                />
              </button>
            </td>
          </tr>
        </tbody>
    </table>
  )
}
