import Logo from '../../assets/image 3.png'

import Face from '../../assets/Sac-removebg-preview.png'
import Twitter from '../../assets/twiterc.png'
import Insta from '../../assets/instac.png'


function Footer(){
    return(
        <div className="bg-[#CCA13F] w-[100%]  mt-14">
            <div className='w-[35%]  flex m-auto items-center mb-5 '>
                <img className='ml-[222px] p-2'  src={Logo} alt="" />
            </div>
            

            <div className='w-[60%]  m-auto flex gap-10  justify-center'>
               
              <div className='flex gap-4 text-white text-[15px] font-thin '><p className='cursor-pointer hover:text-black'>Confira Nossas Vagas</p><p className='cursor-pointer hover:text-black'>Cotação do Dólar</p><p className='cursor-pointer hover:text-black'>Tarifas</p><p className='cursor-pointer hover:text-black'>Segurança</p><p className='cursor-pointer hover:text-black'>Privacidade de Dados</p><p className='cursor-pointer hover:text-black'>Política de Privacidade</p><p className='cursor-pointer hover:text-black'>Canal de Ética</p> </div>
                
            </div>

            <div className='w-[20%] flex gap-14  m-auto mt-10 pb-8  justify-center'>
                <img className='w-[15%] cursor-pointer hover:translate-y-2 transition-all duration-100' src={Face} alt="" />
                <img className='w-[15%] cursor-pointer hover:translate-y-2 transition-all duration-100' src={Twitter} alt="" />
                <img className='w-[15%] cursor-pointer hover:translate-y-2 transition-all duration-100' src={Insta} alt="" />
                
            </div>
            <p className='text-center text-white font-thin mt-10 pb-2 text-sm'>All rights reserved © 2023 REBank. CNPJ: 00.416.968/0001-01</p>
        </div>
    )
}
export default Footer