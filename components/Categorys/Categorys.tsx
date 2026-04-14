import { useState, useEffect } from 'react'
import { instance } from '@/config/axios'

interface Category {
    title?: string
    id?: number
}

export function Categorys() {
    const [data, setData] = useState<Category[] | null>(null)
    const [activeId, setActiveId] = useState<number | null>(18)

    useEffect(() => {
        instance.get('/user/category').then((res: any) => setData(res.data.data))
    }, [])

    if (!data) return

    console.log(data)

    return <section className="category-sect w-full max-w-[998px] !mt-[20px] !p-[8px] rounded-[12px] bg-[#FFF] overflow-x-auto">
        <ul className="category-card w-max max-w-full flex items-center justify-between gap-[9px]">
            {data.map((category: Category) => (
                <li className={`!p-[6px_12px] rounded-[8px] duration-[.3s] cursor-pointer ${activeId === category.id ? 'bg-[#EDC843] text-[#FFF]' : 'bg-transparent text-[#12282F]'}`}
                    key={category.id}
                    onClick={() => setActiveId(category.id!)}>
                    <span className='text-[14px] font-semibold leading-[20px] tracking-normal whitespace-nowrap'>{category.title}</span>
                </li>
            ))}
        </ul>
    </section>
}
