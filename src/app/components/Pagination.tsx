'use client'
import React,{ useState } from 'react'
import { useRouter } from 'next/navigation'

export const Pagination = () => {
    const [page, setPage] = useState(1)
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(e.target.value) > 42) {
            alert('page can not be greater than 42');
            return;
        }
        setPage(Number(e.target.value))
        router.push(`/${e.target.value}`)
    }

  return (
      <footer className="flex w-full gap-3 justify-center sticky bottom-0  indent-10 bg-white p-3 sm:gap-2 sm:p-2">
          <label className='p-[10px]' htmlFor="page">Page:</label>
          <input id='page' className='border-2 border-primary-bg text-center' min={1} max={42} type="number" value={page} onChange={(e) =>handleChange(e) } />
          <p className='p-[10px]' >page:{page}/42</p>
      </footer>
  )
}
