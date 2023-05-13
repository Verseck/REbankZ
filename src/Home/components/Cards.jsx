import { Link } from 'react-router-dom'

import Model from '../../assets/image 5.png'
import play from '../../assets/playst2.png'

function Cards(){
    return(
        <div className=" w-[100%]  m-auto mt-20 flex flex-col gap-20">
            <div className="bg-black bg-opacity-80 flex items-center ">
                <div className="w-[100%] p-10">
                    <h1 className='text-[#CCA13F] text-[50px]'>CONTA REbank</h1>
                    <h3 className="text-white text-4xl"> A conta que vai levar você ao <span className="text-[#CCA13F]"> controle</span> da sua vida financeira!</h3>
                    <Link to='/cadastro' className='bg-[#CCA13F] text-xl p-3 flex justify-center w-[20%]  text-white mt-12 rounded-sm hover:bg-white hover:text-[#FFAD0D] transition-all duration-200'>Crie sua conta!</Link> 
                    <div className='flex mt-10'>
                        <button className=' h-[45px]'><img className='flex w-[140px] h-[40px] mt-1 ml-4' src={play} alt="" /></button></div>
                    </div>
                <img className='' src={Model} alt="" />
            </div>
            
        </div>
    )
}
export default Cards