import Image from 'next/image'
import { Inter } from 'next/font/google'
import Logo from '@/image/logo.png'

import styled from '@/styles/style.module.scss'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styled['main']}>
      <div className={styled['view-logo']}>
        <div className={styled['logo']}>
          <Image src={Logo} alt='logo'/>
        </div>
      </div>
      <div className={styled['view-principal']}>
        <Navbar/>
      </div>
    </main>
  )
}
