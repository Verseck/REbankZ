import Google from '../../assets/google.png'
import Voltar from '../../assets/voltar.svg'
import { Link } from 'react-router-dom'

function Section(){
    return(
        <div className='w-full h-[100vh] bg-[#CCA13F]'>
            <Link className='absolute left-20 top-10 w-5 flex items-center gap-4' to='/'>
                <img src={Voltar} alt="" />
                <p className='text-white text-lg'>VOLTAR</p>
            </Link>
            
            <div className='w-[35%] bg-[#eeae18] absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2  rounded-2xl  '>
                <h3 className='text-center font-semibold text-white text-3xl p-5'>Login</h3>
                <div className='flex flex-col justify-center gap-10 mt-6 items-center'>
                    <input placeholder='Digite seu CPF' className='w-[60%] h-[20px] bg-black text-white bg-opacity-70 rounded-full p-5' type="text" maxLength={11} />
                    <input placeholder='DIgite sua senha' className='w-[60%] h-[20px] bg-black text-white bg-opacity-70 rounded-full p-5' type="password" />
                </div> 
                <div className='flex gap-10 h-10 mt-10 justify-center'>
                    <button className='bg-black bg-opacity-70 text-white w-[140px] flex justify-center items-center gap-2 rounded-full  transition-all duration-300 hover:scale-110 hover:invert'><img src={Google} alt="" />Google</button>
                   
                </div>

                <div className=' flex flex-col justify-center items-center w-full mt-12 gap-7 '>
                    <Link to='' className='w-[130px] h-[35px] bg-black text-white bg-opacity-70 rounded-full  transition-all duration-300 hover:scale-110 hover:invert flex justify-center items-center'>Logar</Link>
                    <p className='font-medium pb-5 text-white transition-all duration-300 hover:invert'>Não tem conta? <Link to='/cadastro' className='text-white  transition-all duration-300 hover:invert'>Cadrastre-se!</Link></p>
                </div>
                
            </div>
        </div>
    )
}
export default Section