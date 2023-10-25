

export default function PagePortfolio({ bgColor, children, title, textColor }){
  return(
    <div className="">
     <div className={`h-[400px] ${bgColor} flex justify-center flex-col`}>
      <h2 className={`font-rubik ml-32 text-2xl mb-4 ${textColor}`}>{ title }</h2>
     <div className=" flex gap-5 justify-center items-center" >
        { children }
      </div>
     </div>
    </div>
  )
}