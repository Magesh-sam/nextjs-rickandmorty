import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className="min-h-[85vh] min-w-screen flex flex-col justify-center items-center">
      <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl' >Page not found 😔</h1>
      <br />
      <Link className='text-xl bg-primary-text text-primary-bg p-2 cursor-pointer md:text-2xl lg:text-3xl  ' href="/">Go back home</Link>
    </main>
  )
}