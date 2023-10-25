import online from '../../assets/online.svg'
import FormContact from '../FormContact'
export default function SectionContact(){
  return(
    <div className='mt-8 ml-32 mr-32'>
      <h1 className='font-rubik text-5xl font-bold text-blue-950 rounded border-l-blue-950 border-2 rounded-sm mb-1'>Contact me</h1>
        <div className="mb-8 h-full w-full flex justify-center">
        <div className="flex justify-center bg-yellow-400 w-1/2 h-[500px] rounded-r-3xl rounded-l-md">
          
          <img src={online} alt="" className='w-[480px] h-auto'/>
        </div>
        <div className="bg-blue-950 border-solid border w-1/2 h-[500px] rounded-l-3xl rounded-r-md">
          <FormContact/>
        </div>
        
      </div>
    </div>
  )
}