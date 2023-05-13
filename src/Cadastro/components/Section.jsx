import Google from '../../assets/google.png'
import Voltar from '../../assets/voltar.svg'
import { Link } from 'react-router-dom'

function Section(){
    return(
        <div className='w-full h-[100vh] bg-[#CCA13F]'>
            <Link className='absolute left-20 top-10 w-5 flex items-center gap-4' to='/'>
                <img src={Voltar} alt="" />
                <p className='text-white text-lg'>Voltar</p>
            </Link>
            
            <div className='w-[35%] bg-[#eeae18] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2  rounded-2xl  '>
                <h3 className='text-center text-white font-semibold text-3xl p-5'>CADASTRE-SE</h3>
                <div className='flex flex-col justify-center gap-10 mt-6 items-center'>
                    <input placeholder='Digite seu nome completo' className='w-[70%] h-[20px] bg-black text-white bg-opacity-70 rounded-full p-5' type="text" />
                </div> 

                <div className='flex justify-center gap-10 mt-10 items-center'>
                    <input placeholder='Digite seu CPF' className='w-[30%] h-[20px] bg-black text-white bg-opacity-70 rounded-full p-5' type="text" maxLength={11} />
                    <input placeholder='Data de Nascimento' className='w-[30%] h-[20px] bg-black text-white bg-opacity-70 rounded-full p-5' type="date" />
                </div>

                <div className='flex justify-center gap-10 mt-10 items-center'>
                    <input placeholder='Digite sua senha' className='w-[30%] h-[20px] bg-black text-white bg-opacity-70 rounded-full p-5' type="password" />
                    <input placeholder='Redigite a senha' className='w-[30%] h-[20px] bg-black text-white bg-opacity-70 rounded-full p-5' type="password" />
                </div>

               <div className='mt-6'>
                    <h3 className='text-center text-white font-semibold'>Ou cadastre-se com:</h3>
               </div>
                <div className='flex gap-10 h-10 mt-4 justify-center'>
                    <button className='bg-black bg-opacity-70 text-white w-[140px] flex justify-center items-center gap-2 rounded-full  transition-all duration-300 hover:scale-110 hover:invert'><img src={Google} alt="" />Google</button>
                </div>

                <div className=' flex flex-col justify-center items-center w-full mt-12 gap-7 '>
                    <Link to='/login' className='w-[130px] h-[35px] bg-black text-white bg-opacity-70 rounded-full  transition-all duration-300 hover:scale-110 hover:invert flex justify-center items-center'>Cadastrar</Link>
                    <p className='font-medium pb-5 transition-all duration-300 hover:invert'>Já possui uma conta? <Link to='/login' className='text-white duration-300 hover:invert'>Faça seu Login!</Link></p>
                </div>
                
            </div>
        </div>
    )
}
export default Section