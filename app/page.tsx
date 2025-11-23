import { Button } from '@/components/ui/button'

const Home = () => {
  return (
    <main className='p-4 space-y-2'>
      <h1 className='text-[20px]  font-semibold'>Wanna Create Your Own Blog ?</h1>
      <h2 className='text-gray-700'>Create your account and start now</h2>
      <Button className='bg-cyan-600 hover:bg-cyan-700 cursor-pointer'>View Posts</Button>
    </main>
  )
}

export default Home
