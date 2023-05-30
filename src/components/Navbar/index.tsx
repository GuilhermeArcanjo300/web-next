import Image from 'next/image'
import LogoBall from '@/image/logobolinha.png';

import styled from '@/components/Navbar/style.module.scss'
import { useEffect, useState } from 'react';
import { useWindowSize } from '@/hook/useWindowSize';

export default function Navbar() {
    const [scrollY, setScrollY] = useState<number>(0);
    const windowSize = useWindowSize();

    useEffect(() => {
        const handleScroll = () => {
        setScrollY(window ? window.scrollY : 0);
        };
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`${styled.container} ${scrollY >= (windowSize.height ?? 0) ? styled.active : ''}`}>
            <Image src={LogoBall} alt='logo' className={styled.logo}/>
            <div>
                <span className={styled['navbar-menu']}>Inicio</span>
                <span className={styled['navbar-menu']}>Sobre</span>
                <span className={styled['navbar-menu']}>Contatos</span>
            </div>
        </div>
    )
}