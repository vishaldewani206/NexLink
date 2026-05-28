import { useGSAP } from "@gsap/react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { useState } from "react"

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useGSAP(()=>{
    gsap.from(".nav-wrapper", {
      y:-20,
      opacity:0,
      scaleX: 0.3
    })

    gsap.from(".heading", {
      opacity:0,
      y:-10,
      delay:0.5
    })

    gsap.from(".links", {
      opacity:0,
      y:-10,
      delay:0.7,
    })
    
  },[])

  
  const handleHamburger = (): void=>{
    document.querySelector(".nav-wrapper").classList.toggle("active")
    setIsOpen(prev => !prev)
    
    
    gsap.fromTo(".links", {
      scaleY: 0,
      opacity:0,
      y:-10,
      transformOrigin: "top"
    },{
      scaleY:1,
      opacity:1,
      y:0
    })
    gsap.fromTo(".hover-link", {
      opacity:0,
    }, {
      opacity:1,
      delay:0.5,
      stagger:0.1
    })
  }


  return (
    <nav className="nav">
      <div className={`nav-wrapper ${isOpen ? "active rounded-t-2xl border-b-0 md:border-b md:rounded-full" : "rounded-full"}`}>
        <div>
          <a className="heading text-xl font-bold text-primary" href="/">NexLink</a>
        </div>
        <div className="links">
          <Link className="hover-link" to={"/dashboard"}>Home</Link>
          <a className="hover-link" href="#about-us">About Us</a>
          <Link to={"/login"} className="text-primary hover-link">Login</Link>
        </div>
        
        <div onClick={handleHamburger} className="hamburger">
          <div className="ham-line" />
          <div className="ham-line"  />
        </div>
      
      </div>
    </nav>
  )
}
