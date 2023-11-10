

export default function PagePortfolio({ bgColor, children, title, textColor }){
  return(
    <div className="">
     <div className={`h-[400px] ${bgColor} flex justify-center flex-col   max-sm:h-[800px] max-lg:w-full`}>
      <h2 className={`font-rubik font-semibold text-2xl mb-4  max-sm:text-2xl  max-sm:m-2 max-sm:mb-4 self-center ${textColor}`}>{ title }</h2>
     <div className=" flex gap-5 justify-center items-center max-sm:flex-wrap max-sm:flex-col" >
        { children }
      </div>
     </div>
    </div>
  )
}