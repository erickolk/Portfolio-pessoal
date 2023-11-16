import FormInput from "../FormInput";

export default function FormContact(){
  return(
    <div className="flex flex-wrap gap-4  mt-2 w-3/5 max-sm:w-full max-md:w-4/5 bg-blue-200 p-4 rounded-md max-lg:w-4/5">
      
      <FormInput textLabel="Nome" placeholder={"Digite seu nome aqui..."} />
      <FormInput textLabel={"Email"} placeholder={"Digite seu email..."}/>
      <FormInput textLabel={"Celular"} placeholder={"Telefone para contato..."}/>
      <FormInput textLabel={"Assunto"} placeholder={"Qual o assunto ?"}/>

      <div className=" flex justify-center w-full">
        <div className="flex flex-col w-3/5  max-sm:w-full">
          <label htmlFor="" className="text-slate-700 pb-1">Descrição</label>
          <textarea name="" id="" cols="52" rows="5" placeholder="Descreva aqui..." className="bg-transparent border-blue-500 border p-2 rounded placeholder-gray-500"></textarea>
        </div>
      </div>
    </div>
  )
}