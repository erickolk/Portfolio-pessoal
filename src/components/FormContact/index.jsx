
export default function FormContact(){
  return(
    <div className="flex flex-wrap gap-4 justify-center mt-16">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-white">Nome</label>
        <input type="text" name="" id="name" placeholder="Nome" className="p-2 opacity-80 w-50 h-8 rounded"/>
      </div>
      
      <div className="flex flex-col">
      <label htmlFor="" className="text-white">Email</label>
      <input type="email" name="" id="" placeholder="Digite seu email para contato." className="opacity-80  w-50 h-8 rounded p-2"/>
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="" className="text-white">Celular</label>
        <input type="tel" name="" id="" placeholder="Celular" className="p-2 opacity-80 w-50 h-8 text-red rounded"/>
      </div>
      
      <div className="flex flex-col">
        <label htmlFor="" className="text-white">Assunto</label>
        <input type="text" name="" id="" placeholder="Insira o assunto aqui." className="p-2 opacity-80 w-50 h-8 rounded"/>
      </div>

      <div className="flex flex-col">
        <label htmlFor="" className="text-white">Descrição</label>
          <textarea name="" id="" cols="52" rows="5" className="opacity-80 p-2 rounded"></textarea>
        </div>
    </div>
  )
}