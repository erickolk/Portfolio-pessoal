import ellipse from '../../assets/Ellipse 2.png'
import { FaDiscord, FaGithub, FaTelegram, FaLinkedin } from 'react-icons/fa'

export default function SectionStart(){
  return (
    <div>
      <nav className='flex justify-center pt-8'>
        <div className='flex justify-between w-4/5'>
          <p className='font-semiboldbold text-4xl text-blue-900 font-rubik font-bold'>Portfolio</p>
          <div> 
            <ul className='flex'>
              <li className='mr-3 text-xl font-rubik'>About</li>
              <li className='mr-3 text-xl font-rubik'>Portfolio</li>
              <li className='text-xl font-rubik'>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='flex justify-center h-screen'>
        <main className='flex justify-between w-4/5 self-center'>
          <section>
            <p className='text-blue-900 text-3xl font-rubik font-semibold'>Olá, eu sou</p>
            <div className='flex'>
              <div>
                <h1 className='text-blue-900 text-9xl font-rubik font-bold'>ERICK</h1>
                <h1 className='text-blue-900 text-9xl font-rubik font-bold'>OLIVEIRA</h1>
              </div>
              
            </div>
            <p className='text-2xl font-rubik'>Um jovem <span className='text-2xl text-yellow-400 font-rubik'>desenvolvedor web</span> e amante de tecnologia.</p>

            <div className='flex gap-4 pt-4'>
            <button className='rounded-[100px] p-4 w-36 bg-yellow-400 border border-blue-900 font-rubik'>Hire me</button>
            <button className='rounded-[100px] p-4 w-36 border border-blue-900 font-rubik'>Portfolio</button>
            </div>
          </section>
          <section className='flex flex-col'>
            <div className='h-72'>
            <img src={ellipse} alt="" />
            </div>
            <p className='text-2xl'>Encontre-me em:</p>
            <div>
              <ul className='flex mt-3'>
                <li><a href=""><FaDiscord className='text-4xl mr-5'></FaDiscord></a></li>
                <li><a href=""><FaGithub className='text-4xl mr-5'></FaGithub></a></li>
                <li><a href=""><FaTelegram className='text-4xl mr-5'></FaTelegram></a></li>
                <li><a href=""><FaLinkedin className='text-4xl '></FaLinkedin></a></li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}