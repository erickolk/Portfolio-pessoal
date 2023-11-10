
export default function SectionSkills({children}){
  return(
    <div className="flex justify-between gap-8 flex-wrap bg-blue-950 rounded-lg ml-32 mr-32 p-8 max-sm:mr-5 max-sm:ml-5 max-sm:p-4 max-sm:justify-center max-md:justify-center max-lg:justify-around">
      {children}
    </div>
  )
}