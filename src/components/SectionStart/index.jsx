
import business from '../../assets/business.svg'
import { FaDiscord, FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa'
import Navbar from '../navbar'


export default function SectionStart(){
  return (
    <div className=''>
      <Navbar />
      <div className='flex justify-center h-screen'>
        <main className='flex justify-between w-4/5 self-center'>
          <section>
            <p className='text-blue-900 text-3xl font-rubik font-semibold max-sm:text-lg max-md:text-lg max-lg:text-2xl'>Olá, eu sou</p>
            <div className='flex'>
              <div>
                <h1 className='text-blue-900 text-8xl font-rubik font-bold max-sm:text-5xl max-md:text-7xl max-lg:text-8xl'>ERICK</h1>
                <h1 className='text-blue-900 text-8xl font-rubik font-bold max-sm:text-5xl max-md:text-7xl max-lg:text-8xl'>SOUZA</h1>
              </div>
              
            </div>
            <p className='text-2xl text-blue-950 font-rubik max-sm:text-[9px] max-md:text-lg max-lg:text-xl '>Um jovem <span className='text-2xl  font-rubik max-sm:text-[9px] max-md:text-lg max-lg:text-xl text-blue-700'>desenvolvedor web</span> e amante de tecnologia.</p>

            <div className='flex gap-4 pt-4'>
            <a href='https://www.linkedin.com/in/erick-oliveira-0498a1149/' target='_blank' className='max-sm:p-1 max-sm:w-20 max-sm:text-xs rounded-[100px] p-4 w-36 bg-blue-700 text-white border border-blue-900 font-rubik flex justify-center'>Hire me</a>
            <button className='max-sm:p-1 max-sm:w-20 max-sm:text-xs  rounded-[100px] p-4 w-36 border border-blue-900 font-rubik'>Portfolio</button>
            </div>
          </section>
          <section className='flex flex-col'>
            <div className=' max-md:h-60 max-lg:h-56'>
            <img src={business} alt="" className='max-sm:hidden max-lg:w-52 max-h-[235px]'/>
            </div>
            <div className='pt-2'>
              <p className='text-2xl max-sm:hidden max-md:text-lg text-blue-900'>Encontre-me em:</p>
              <div className='max-sm:hidden'>
                <ul className='flex mt-2 max-md:mt-1'>
                  <li><a href="https://discord.gg/jHbPBnwR" target='_blank'><FaDiscord className='text-4xl text-blue-950 mr-5 max-md:mr-3 max-md:text-3xl'></FaDiscord></a></li>
                  <li><a href="https://github.com/erickolk" target='_blank'><FaGithub className='text-4xl text-blue-950  mr-5 max-md:mr-3  max-md:text-3xl'></FaGithub></a></li>
                  <li><a href=""><FaTelegram className='text-4xl text-blue-950  mr-5 max-md:mr-3  max-md:text-3xl'></FaTelegram></a></li>
                  <li><a href="https://www.linkedin.com/in/erick-oliveira-0498a1149/" target='_blank'><FaLinkedin className='text-4xl text-blue-950   max-md:text-3xl'></FaLinkedin></a></li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}