"use client"

import { useState } from "react"
import {BiBrush} from "react-icons/bi"

type formData = {
    firname: string,
    email: string,
    number: string,
    date: string,
    status: String 
}


export default function UpdateUserForm() {

    const [formData, setFormData] = useState<formData>({
        firname: "",
        number: "",
        email: "",
        status: "",
        date: "",
    })
// console.log(formData);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(formData);
        
    }

  return (
    <form className="gap-4 my-3 grid lg:grid-cols-2 w-4/6" onSubmit={formSubmit}>
        <div className="input-type">
            <input
                onChange={handleInputChange}
                type="text" 
                name="firname"
                value={formData.firname}
                className="border w-full focus:outline-none rounded-md"
                placeholder="firstname"
                />
        </div>
        <div className="input-type">
            <input
                onChange={handleInputChange} 
                type="email" 
                name="email"
                value={formData.email}
                className="border w-full focus:outline-none rounded-md"
                placeholder="name@gmail.com"
                />
        </div>
        <div className="input-type">
            <input
                onChange={handleInputChange} 
                type="number"
                name="number"
                value={formData.number}
                className="border w-full focus:outline-none rounded-md"
                placeholder="$234"
                />
        </div>
        <div className="input-type">
            <input
                onChange={handleInputChange} 
                type="date"
                name="date"
                className="border px-2 py-1 focus:outline-none rounded-md"
                placeholder="$234"
                />
        </div>
        <div className="flex gap-10 items-center">
            <div className="form-check">
                <input
                    onChange={handleInputChange} 
                    type="radio"
                    value="Active"
                    id="radioDefault1"
                    name="status"
                    className="
                        border
                        focus:outline-none 
                        rounded-full 
                        h-4 
                        border-gray-500 
                        bg-slate-50 
                        checked:bg-green-600 
                        checked:border-gray-500 
                        transition duration-200 
                        mt-1 
                        align-top 
                        bg-no-repeat 
                        bg-container 
                        float-left 
                        cursor-pointer 
                        mr-2 "
                        placeholder="firstname"
                    />
                    <label className="inline-block text-gray-800" htmlFor="radioDefault1">
                        Active
                    </label>
            </div>
            <div className="form-check">
                <input
                    onChange={handleInputChange} 
                    type="radio"
                    value="inactive"
                    id="radioDefault2"
                    name="status"
                    className="
                        form-check-input
                        appearence-none
                        rounded-full 
                        border
                        focus:outline-none 
                        h-4 
                        border-gray-300 
                        bg-slate-50 
                        checked:bg-green-600 
                        checked:border-gray-500 
                        transition
                        duration-200 
                        mt-1 
                        align-top 
                        bg-no-repeat 
                        bg-container 
                        float-left 
                        cursor-pointer 
                        mr-2 "
                        placeholder="firstname"
                    />
                    <label className="inline-block text-gray-800" htmlFor="radioDefault2">
                        Inactive
                    </label>
            </div>
        </div>
        <button 
            type="submit"
            className="
                flex 
                justify-center 
                w-2/6 
                bg-green-600
                my-5
                text-white 
                py-2
                px-2  
                border
                rounded-md 
                hover:bg-gray-50 
                hover:border-green-500 
                hover:text-green-500"
            >Update User <BiBrush className="py-1" size='25px' /></button>
    </form>
  )
}