import Form from '@/components/Form';
import Table from '@/components/Table';
import ToggleForm from '@/components/ToggleForm';
import Image from 'next/image'
import { useState } from 'react';
import { BiUserPlus } from "react-icons/bi";


export default function Home() {

  return (
    <main className='py-5'>
      <ToggleForm />
      <div className="container mx-auto">
        <Table />
      </div>
    </main>
  )
}
