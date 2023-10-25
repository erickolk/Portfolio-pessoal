
export default function ProjectCards({ bgColor, textColor="text-white", title, thumbImage, bgColorFaixa }){
  return (
    <div className={`${bgColor}  h-[285px] w-[350px] rounded-lg overflow-hidden shadow-md`}>
      <div className={`h-1/5 ${bgColorFaixa} flex items-center`}>
        <h2 className={`font-rubik text-xl ml-6 ${textColor}`}>{title}</h2>
      </div>
      <img src={thumbImage} alt="" className="w-full h-auto"/>
    </div>
  )
}
