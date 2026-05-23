import { Link } from "react-router-dom"
import { Mobile } from "../../components/Landing/Mobile"
import { Button } from "@/components/ui/button"

export const LandingHome = () => {
  
  return (
    <section className=" w-full   flex flex-col md:flex-row  mt-20 ">
      
      <div className="flex-col-center  md:items-start md:justify-start  md:w-[75%]">
        <Button size={"lg"} variant={"outline"} className="w-55">
          <div className="w-2 h-2 rounded-full bg-red-400 blink z-0" />
          <p>Now with analytics</p>
        </Button>
        <h1 className="text-4xl md:text-7xl text-center md:text-left font-bold md:leading-22 my-5 md:my-0">Everything you are.  <br />
        One simple link.
        </h1>
        <p className="md:text-2xl w-[90%] md:w-auto text-center md:text-left  md:my-5 mt-0 mb-4 text-gray-500 font-light">
          Turn your scattered links into a clean, <br/> beautiful page with <strong className="text-primary">Linkist</strong>
        </p>

        <div className="flex gap-2 mb-5 md:mb-0">
          <Link to={"/register"}>
            <Button className="md:w-50 w-36 h-12" size={"default"}  variant={"default"}>Sign Up for free</Button>
          </Link>
          <Link to={"/login"}>
            <Button className="md:w-50 w-36 h-12" variant={"outline"} size={"lg"}>Login</Button>
          </Link>
        
        </div>
      </div>
      <div className="flex justify-center md:justify-start ">
        <Mobile />
      </div>
    </section>
  )
}
