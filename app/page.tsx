"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import "./globals.css"
import loading from '../assets/loading-infinity.svg'

import { Header } from '@/components/Header/Header'
import { instance } from '@/axios'

interface Restaurant {
  id?: number
  name?: string
  image?: string
  tags?: string[]
  logotype?: string
}

interface RestaurantData {
  restaurants: Restaurant[]
}

export default function Home() {

  const [data, setData] = useState<RestaurantData | null>(null)

  useEffect(() => {
    instance.get('/user/restaurant').then((res: any) => setData(res.data.data))
  }, [])

  if (!data) return <Image src={loading} alt='loading' className='w-50 h-50' />

  console.log(data);

  return (
    <>
      <Header />
      <main className="home-page page w-full max-w-full !px-[24px] flex flex-col items-center">
        <section className="main-sect w-full max-w-[1080px]">
          <h2 className="block-title text-[#12282F] text-[32px] font-bold leading-[130%] tracking-normal">Restoranlar</h2>

          <section className="restaurant-list w-full max-w-full !mt-[20px] flex flex-wrap gap-[24px]">
            {data.restaurants.map((product: any) => (
              <article key={product.id} className="restaurant-card w-full max-w-[344px] rounded-[16px] overflow-hidden border-[1px] border-[#F0F0F0] bg-[#FFF] cursor-pointer" >
                <img className="rounded-[16px] w-full h-[192px]" src={product.image} />

                <div className="info !px-[12px] !pt-[12px] !pb-[16px]">
                  <h4 className="name text-[#12282F] text-[16px] font-bold leading-[20px] tracking-normal">{product.name}</h4>
                  <span className="tags !mt-[6px] text-[#5A696E] text-[14px] font-semibold leading-[14px] tracking-normal">{product.tags.join(', ')}</span>
                </div>
              </article>
            ))}
          </section>
        </section>
      </main>
    </>
  )
}
