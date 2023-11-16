import {TextInput} from '@tremor/react'

export default function FormInput({type, textLabel, placeholder, id, name, htmlFor}){
    return(
      <div className="flex justify-center  w-full">
        <div className="flex-col flex w-3/5  max-sm:w-full">
          
          <label htmlFor={htmlFor} className="text-slate-700">{ textLabel }</label>
          <TextInput type={type} name={name} id={id} placeholder={placeholder} className={`p-2 w-full  h-9 rounded max-sm:h-8 border-blue-500`}/>
        </div>
      </div>
    )
}