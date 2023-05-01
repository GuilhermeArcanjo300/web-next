import Image from 'next/image'
import Logo from '@/image/logo.png';

import styled from '@/components/Navbar/style.module.scss'

export default function Navbar() {
    return (
        <div className={styled.container}>
            <Image src={Logo} alt='logo' className={styled.logo}/>
            <span className={styled['navbar-menu']}>Inicio</span>
            <span className={styled['navbar-menu']}>Sobre</span>
            <span className={styled['navbar-menu']}>Contatos</span>
        </div>
    )
}