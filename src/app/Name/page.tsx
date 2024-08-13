'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Name() {
  const router = useRouter()
 
  return (
    <>
    <div>Hi, I am Shahzaib and this is the Name Page, click on Home button to go to Home Page.</div>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="button" onClick={() => router.push('/')}>
      Home
    </button>
    </>
  )
}
