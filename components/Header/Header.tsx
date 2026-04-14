'use client'

import { useRef } from 'react'
import Image from 'next/image'

import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import xIcon from '../../assets/x-icon.svg'
import location from '../../assets/location.svg'
import pointer from '../../assets/pointer.svg'

import receipt from '../../assets/receipt.svg'
import basket from '../../assets/basket.svg'
import world from '../../assets/world.svg'
import user from '../../assets/user.svg'

export function Header() {
    const inputRef = useRef<HTMLInputElement>(null)

    return <header className="header w-full max-w-full !px-[24px] sticky top-0 z-[10] flex justify-center items-center bg-[#FFF]">
        <section className="header-sect w-full max-w-[1080px] !py-[18px] flex justify-between items-center gap-[16px]">
            <section className="search-sect w-full max-w-[740px] flex justify-between items-center">
                <a className='cursor-pointer' href='/'><Image src={logo} alt='' /></a>

                <label className="search-product-wrap w-full max-w-[300px] flex justify-between items-center gap-[12px] border-[1px] border-[#F0F0F0] rounded-[10px] !py-[11px] !px-[10px] bg-[#F7F7F7] transition-all duration-[.3s] focus-within:border-[#EDC843]">
                    <div className="flex justify-center items-center gap-[8px]">
                        <Image src={search} alt='' className='w-[16.7px] h-[16.7px]' />

                        <input
                            className='search-inp font-semibold text-[14px] leading-none tracking-normal !text-[#12282F] placeholder: text-[#B0B7BA] border-[0px] outline-none'
                            type="text"
                            placeholder='Izlash'
                            ref={inputRef} />
                    </div>

                    <button
                        className='x-btn cursor-pointer'
                        type='button'
                        onClick={() => { if (inputRef.current) inputRef.current.value = '' }}
                    ><Image src={xIcon} alt='' /></button>
                </label>

                <div className="search-location min-w-[208px] !py-[11px] !px-[11.5px] flex justify-center items-center gap-[8px] border-[1px] border-[#F0F0F0] rounded-[10px] cursor-pointer">
                    <div className='flex justify-center items-center gap-[4px]'>
                        <Image src={location} alt='' />
                        <span className='font-semibold text-[14px] leading-[130%] tracking-normal'>Yoshlar markazi ofis</span>
                    </div>
                    <Image src={pointer} alt='' />
                </div>
            </section>
            <section className="navbar-sect w-full max-w-[294px] flex justify-between items-center gap-[12px]">
                <ul className='w-full max-w-[228px] flex justify-between items-center gap-[8px] us'>
                    <li className="link flex flex-col items-center cursor-pointer">
                        <Image src={receipt} alt='' />
                        <p className='font-[600] text-[12px] leading-none tracking-normal text-center'>Buyurtmalar</p>
                    </li>
                    <li className="link flex flex-col items-center cursor-pointer">
                        <Image src={basket} alt='' />
                        <p className='font-[600] text-[12px] leading-none tracking-normal text-center'>Savatcha</p>
                    </li>
                    <li className="link flex flex-col items-center cursor-pointer">
                        <Image src={world} alt='' />
                        <p className='font-[600] text-[12px] leading-none tracking-normal text-center'>O’zbekcha</p>
                    </li>
                </ul>

                <div className="user min-w-[42px] min-h-[42px] rounded-full bg-[#F7F7F7] border-[1.5px] flex justify-center items-center border-[#F0F0F0] cursor-pointer">
                    <Image src={user} alt='' />
                </div>
            </section>
        </section>
    </header>
}
