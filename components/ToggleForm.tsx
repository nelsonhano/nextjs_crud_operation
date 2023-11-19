"use client"

import Form from '@/components/Form';
import Table from '@/components/Table';
import Image from 'next/image'
import { useState } from 'react';
import { BiUserPlus } from "react-icons/bi";


export default function ToggleForm() {
    const [ visible, setVisible ] = useState(false)

    const toggleHandler = () => {
        setVisible(visible ? false : true )
    }
  return (
    <div>
        <h1 className='text-xl md:text-5xl font-bold text-center py-10'>Employment Management System</h1>

        <div className="container border-b flex mx-auto justify-between py-5">
        <div className="left flex px-1">
            <button onClick={toggleHandler} className="p-2 gap-1 flex justify-center bg-indigo-500 text-white rounded-md">
            Add Employee 
            <BiUserPlus size={23}/> 
            </button>
        </div>

        </div>
        <div className="container mx-auto">
            {/* <Form /> */}
            {visible ? <Form /> : <></>}
        </div>
    </div>
  )
}
