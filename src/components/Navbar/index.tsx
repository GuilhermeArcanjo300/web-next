import Image from 'next/image'
import LogoBall from '@/image/logobolinha.png';

import styled from '@/components/Navbar/style.module.scss'

export default function Navbar() {
    return (
        <div className={styled.container}>
            <Image src={LogoBall} alt='logo' className={styled.logo}/>
            <div>
                <span className={styled['navbar-menu']}>Inicio</span>
                <span className={styled['navbar-menu']}>Sobre</span>
                <span className={styled['navbar-menu']}>Contatos</span>
            </div>
        </div>
    )
}