
export default function SkillCard({logo, text}) {
  return (
    <div className="h-[300px] w-[300px] bg-white rounded-md flex-col flex items-center text-center p-3">
      <img src={logo} alt="" />
      <p>{text}</p>
    </div>
  )
}