import { Link } from 'react-router-dom'

import image from '../../assets/pessoasfelizes.avif'
import User from '../../assets/user.png'
import cartao from '../../assets/image_4.png'
import Vector from '../../assets/Vector.png'



function Section(){
    return(
        <div>
            <div className='flex  w-[100%] bg-black'>
                <img className='w-[100%]' src={image} alt="" />
                <div className=' '>
                    <div className='flex flex-col justify-center w-[100%] items-center mt-28 absolute z-10 top-32 right-40 bg- '>
                        <h2 className='w-[25%] text-5xl font-semibold'>Crie sua conta e peça seu cartão de debito    
                         Cripto <span className='text-[#CCA13F]'>RECard</span>!</h2>
                        <div className='flex gap-10 h-5 mt-3'>
                            <input placeholder='Digite seu CPF' className='w-[100%] h-[15px] bg-[#282622] text-white bg-opacity-70 rounded-full p-5' type="text" maxLength={15} />
                           
                        </div>
                        <Link to='/cadastro' className='bg-[#282622] text-white bg-opacity-70  flex p-4 rounded-full mt-10 text-[15px]  font-semibold gap-2'><img src={User}/>Continuar</Link>
                        
                        
                    </div>
                    
                    
                </div>

            </div>
            
           
          <div className='flex justify-center mt-32 m-auto w-[48%] gap-32 '>
                    <div className='w-[10%] bg'>
                        <p className='text-xl'>Bitcoin</p>
                        <h1 className='text-xl font-bold'>2.48T$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>24.36%</p>
                        </div>
                    </div> 
                    <div className='w-[10%] bg'>
                        <p className='text-xl'>Etherium</p>
                        <h1 className='text-xl font-bold'>1.06T$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>25.36%</p>
                        </div>
                    </div> 
                    <div className='w-[10%] bg'>
                        <p className='text-xl'>DogeCoin</p>
                        <h1 className='text-xl font-bold'>49,425B$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>23.36%</p>
                        </div>
                    </div> 
                    <div className='w-[10%] bg'>
                        <p className='text-xl'>BNB</p>
                        <h1 className='text-xl font-bold'>235,246B$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>27.36%</p>
                        </div>
                    </div> 

                    <div className='w-[10%] bg'>
                        <p className='text-xl'>XRP</p>
                        <h1 className='text-xl font-bold'>110,097$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>22.36%</p>
                        </div>
                    </div> 

                    <div className='w-[10%] bg'>
                        <p className='text-xl'>USDTTether</p>
                        <h1 className='text-xl font-bold'>407.52B$</h1>
                        <div className='flex items-center gap-2'>
                            <img className='w-[10px] h-[10px]' src={Vector} alt="" />
                            <p>24.06%</p>
                        </div>
                    </div> 
            </div>

            <div className='flex justify-center mt-20 m-auto w-[60%] gap-32'>
                <div className='text-center font-bold text-[30px] '>
                    <h1>Invista a qualquer momento e em qualquer lugar na <span className='text-[#CCA13F]'>REBank</span>, com seu <span className='text-[#CCA13F]'>Recard</span> o cartão inovador que permite transações de debito em <span className='text-[#CCA13F]'>criptomoeda para moeda local</span> em instantes! </h1>
                </div>
                <img className='w-[350px] h-[300px]' src={cartao} alt="" />
            </div>

            
        </div>
    )
}
export default Section