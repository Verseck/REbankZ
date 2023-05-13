import { Link } from 'react-router-dom'

import Model from '../../assets/garoto.webp'

function Card(){
    return(
        <div className=" w-[100%]  m-auto mt-20 flex flex-col gap-20">
            <div className="bg-black bg-opacity-80 flex items-center ">
                <div className="w-[100%] p-10">
                <Link to='/cadastro'><h1 className='text-[#CCA13F] text-[50px]'>Conta CNPJ</h1></Link>
                    <h3 className="text-white text-4xl">
                          Controle o seu negócio com suporte humano de verdade.</h3>
                    <Link to='/cadastro' className='bg-[#CCA13F] text-xl p-3 flex justify-center w-[20%]  text-white mt-12 rounded-sm hover:bg-white hover:text-[#FFAD0D] transition-all duration-200'>Crie sua conta!</Link> 
                    </div>
                 <img className='w-[30%]' src={Model} alt="" />
            </div>
            
        </div>
    )
}
export default Card