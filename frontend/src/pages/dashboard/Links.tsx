import { DisplayLinks } from "@/components/dashboard/DisplayLinks"
import SocialSelect from "@/components/dashboard/SocialSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { linkType, socialMediaType } from "@/helper/dashboardTypes"
import { Link } from "lucide-react"
import { useState } from "react"

export const Links = () => {
  
  // const links: linkType[] = [
  //   {
  //     name: "Instagram",
  //     link: "https://instagram.com",
  //     icon: "/images/icons/instagram.com"
  //   }
  // ]
  const [links, setLinks] = useState<linkType[]>([])
  const [linkText, setLinkText] = useState<string>("")
  const [socialmedia, setSocialmedia] = useState<socialMediaType>()

  const handleLink = ()=>{
    if(!socialmedia?.name || !socialmedia?.icon || !linkText ) {
      console.log("error", socialmedia?.name );
      return
    }
    setLinks([{link: linkText, name: socialmedia.name, icon: socialmedia.icon }, ...links ])
    setLinkText("")
    setSocialmedia({name: "", icon: ""})
  }

  return (
    <div>
      <h2 className="dash_heading mb-2">Select a link</h2>
      <SocialSelect  setSocialmedia={setSocialmedia}  />
      <h2 className="dash_heading mb-2 mt-8">Link</h2>
      <Input value={linkText} onChange={(e)=> setLinkText(e.target.value)} type="text" className="max-w-80" placeholder="https://instagram.com" />
      <br/>
      <Button onClick={handleLink} size={"lg"}  className="mt-8 min-w-35">
        <Link />
        <p>Add Link</p>
      </Button>

      <div className="mt-12 space-y-3">
        <DisplayLinks links={links} />
      </div>
    </div>
  )
}
