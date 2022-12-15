import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
      </Head>
      <div>
        <h1 className='text-blue-500'>
          Hello World!
        </h1>
      </div>
    </>
  )
}
