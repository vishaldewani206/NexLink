import type { ReactNode} from "react"
import type { FieldValues, SubmitHandler, UseFormHandleSubmit } from "react-hook-form";


type firstTimeTypes<T extends FieldValues> = {
  heading: string,
  text: string,
  onSubmit: SubmitHandler<T>,
  handleSubmit: UseFormHandleSubmit<T>;
  children: ReactNode
}


export const FirstTimeWrapper = <T extends FieldValues>({heading, text, children, onSubmit, handleSubmit}: firstTimeTypes<T>) => {
  return (
    <form  onSubmit={handleSubmit(onSubmit)} className="flex-col-center md:p-8 p-4">
      <h1 className="md:text-4xl text-2xl font-bold mt-4 mb-1">{heading}</h1>
      <p className="text-gray-600 text-center ">{text}</p>
      {children}
    </form>
    
  )
}
