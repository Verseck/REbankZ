import { Link } from 'react-router-dom'
import Logo from '../../assets/image 3.png'
import Modo from '../../assets/darkmode.png'

import { useState, useEffect } from "react"

function Header(){
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
            
        } else {
            document.documentElement.classList.remove("dark");
            
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return(
        <div className=''>
            <div className=" w-full bg-[#CCA13F] flex">
                <img className='p-4 ml-10' src={Logo} alt="" />
                <div className='flex gap-10 items-center'>
                    <Link className='text-lg text-[#FFFF] hover:text-black transition-all hover:scale-110 duration-200'>REBank Mobile</Link>
                    <Link className='text-lg text-[#FFFF] hover:text-black transition-all hover:scale-110 duration-200'>Central de Ajuda</Link>
                    <Link className='text-lg text-[#FFFF] hover:text-black transition-all hover:scale-110 duration-200'>Sobre Nós</Link>
                    <Link className='text-lg text-[#FFFF] hover:text-black transition-all hover:scale-110 duration-200'>Para sua empresa</Link>
                </div>

                <div className='flex gap-10 items-center ml-auto mr-10'>
                    <Link to='/login' className='text-lg text-[#FFFF] hover:text-black transition-all hover:scale-110 duration-200'>Login</Link>
                    <Link to='/cadastro' className='text-lg text-[#FFFF] bg-[#CCA13F]  hover:text-black transition-all hover:scale-110 duration-200' >Cadastre-se</Link>
                    <img className='cursor-pointer w-20' src={Modo} alt="" onClick={handleThemeSwitch} />
                </div>
            </div>
        </div>
    )
}
export default Header