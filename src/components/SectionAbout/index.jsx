export default function SectionAbout({children}){
  return(
    <div className="mt-52 mb-52 w-screen ">
      <div className="flex flex-col items-center">
        <h1 className='text-blue-950 font-rubik font-bold text-5xl rounded border-l-blue-950 border-2  mb-2 max-sm:ml-2 max-sm:text-3xl max-md:ml-4  h-auto max-sm:w-4/5 max-md:mr-4 max-lg:max-w-screen-lg  w-4/5'> About me</h1>
        <div className="flex w-4/5 gap-4 justify-between">
          {children}
        </div>
      </div>
    </div>
  )
}

//max-w-screen-2xl max-sm:max-w-screen-sm max-md:max-w-screen-md flex justify-center max-lg:max-w-screen-lg