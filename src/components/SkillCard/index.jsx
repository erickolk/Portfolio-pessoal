
export default function SkillCard({logo, text}) {
  return (
    <div className="h-[300px] w-[300px] max-sm:h-[200px] max-sm:w-[200px] bg-white rounded-md flex-col flex items-center text-center p-3 max-sm:text-xs max-lg:h-[250px] max-lg:w-[250px]">
      <img src={logo} alt="" />
      <p>{text}</p>
    </div>
  )
}