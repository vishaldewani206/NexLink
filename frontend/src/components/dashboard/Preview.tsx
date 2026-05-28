import { Link } from "react-router-dom";
import { Background } from "./backgrounds/Background";

export const Preview = () => {
  type LinkP = {
    icon: string,
    text: string
  }
  const links:LinkP[] = [
    {
      icon: "/images/icons/whatsapp.png",
      text: "WhatsApp"
    },
    {
      icon: "/images/icons/instagram.png",
      text: "Instagram"
    },
  ]
  return (
    <div className="relative w-70  h-full max-h-150 overflow-hidden rounded-2xl z-10">
        <div className="preview z-10">
          <div className="md:w-16 md:h-16 w-12 h-12 bg-gray-400 rounded-full overflow-hidden">
          <img src="/images/profile-photo.png" alt="" />
        </div>
        <h1 className="mt-2">John Doe</h1>
        <p className="text-xs md:text-sm text-amber-100/60 text-center">@johndoe · Creator & Dev</p>
        <div className="w-full mt-4 md:mt-8">
          {links.map((e:LinkP, i:number)=>(
          <Link to={"/"} key={i} className="preview-btn">
            <img src={e.icon} alt="" className=" h-full object-contain" />
            <p>{e.text}</p>
          </Link>
        ))}

        <button className="bg-amber-300 text-black w-full py-1 md:py-3 rounded-sm mt-2 md:mt-4 cursor-pointer hover:scale-105 transition-transform text-sm md:text-lg">Subscribe to Newsletter</button>
        </div>
        </div>
      
        <div className="w-full h-full z-0">
          <Background t="grid" bg="black" />
        </div>
    </div>
  );
};