import {RiMenuFoldLine} from 'react-icons/ri'
export default function Navbar() {
  return (
    <nav className='flex justify-center pt-8'>
        <div className='flex justify-between w-4/5'>
          <p className='font-semiboldbold text-4xl max-md:text-2xl text-blue-900 font-rubik font-bold'>Portfolio</p>
          <RiMenuFoldLine className='sm:hidden'/>
          <div className='max-sm:hidden'> 
            <ul className='flex'>
              <li className='mr-9 text-xl font-rubik max-md:text-lg text-blue-950'><a href="">About</a></li>
              <li className='mr-9 text-xl font-rubik max-md:text-lg text-blue-950'><a href="">Portfolio</a></li>
              <li className='text-xl font-rubik max-md:text-lg text-blue-950'><a href="">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
  )
}