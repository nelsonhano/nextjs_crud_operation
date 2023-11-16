import Form from '@/components/Form';
import Table from '@/components/Table';
import Image from 'next/image'
import { BiUserPlus } from "react-icons/bi";


export default function Home() {
  return (
    <main className='py-5'>
      <h1 className='text-xl md:text-5xl font-bold text-center py-10'>Employment Management System</h1>

      <div className="container border-b flex mx-auto justify-between py-5">
        <div className="left flex px-1">
          <button className="p-2 gap-1 flex justify-center bg-indigo-500 text-white rounded-md">
            Add Employee 
            <BiUserPlus 
              size={23}
            /> 
          </button>
        </div>

      </div>
      <div className="container mx-auto">
        <Form />
        {/* <Table /> */}
      </div>
    </main>
  )
}
