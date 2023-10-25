export default function SectionAbout({children}){
  return(
    <div className="mt-8">
      <h1 className='text-blue-950 font-rubik font-bold text-5xl rounded border-l-blue-950 border-2  mr-32  ml-32 mb-2'>About me</h1>
      <div className="flex mr-32 ml-32 gap-4">
        {children}
      </div>
    </div>
  )
}