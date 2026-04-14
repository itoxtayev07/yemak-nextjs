"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import "./globals.css"
import loading from '../assets/loading-infinity.svg'

import { Header } from '@/components/Header/Header'
import { instance } from '@/axios'

export default function Home() {

  const [data, setData] = useState(null)

  useEffect(() => {
    instance.get('/user/restaurant').then((res: any) => setData(res.data.data))
  }, [])

  if (!data) return <Image src={loading} alt='loading' className='w-50 h-50' />

  console.log(data);

  return (
    <>
      <Header />
    </>
  )
}
