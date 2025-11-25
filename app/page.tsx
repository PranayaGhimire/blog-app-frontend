'use client'
import { Button } from '@/components/ui/button'
import { RootState } from '@/redux/store'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Home = () => {
  const token =useSelector((state:RootState) => state.auth.token);
  return (
    <main className='p-4 space-y-2'>
      <h1 className='text-[20px]  font-semibold'>Wanna Create Your Own Blog ?</h1>
      <h2 className='text-gray-700'>Create your account and start now</h2>
      {token && <Button className='bg-cyan-600 hover:bg-cyan-700 cursor-pointer'>
          <Link href={`/dashboard`}>View Posts</Link>
        </Button>}
    </main>
  )
}

export default Home
