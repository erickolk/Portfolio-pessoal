import online from '../../assets/online.svg'
import FormContact from '../FormContact'
export default function SectionContact(){
  return(
    <div className='mt-8  w-screen h-auto flex flex-col items-center'>
      <h1 className='font-rubik text-5xl font-bold text-blue-950  border-l-blue-950 border-2 rounded-sm mb-1 w-4/5'>Contact me</h1>
        <div className="mb-8 flex justify-center w-screen">
          <div className="bg-blue-400 rounded-lg border-solid border w-4/5 h-auto p-8 flex gap-4 justify-between max-md:flex-col max-md:items-center items-center max-lg:flex-col">
            <img src={online} alt="" className='w-2/5 h-4/5 max-sm:hidden'/>
            <FormContact/>
          </div>
        
        </div>
    </div>
  )
}