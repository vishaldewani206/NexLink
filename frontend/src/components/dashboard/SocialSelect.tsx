import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { socialMediaType } from "@/helper/dashboardTypes";
import { socialMedia } from "@/helper/socialMedia";

type socialType = {
  setSocialmedia: React.Dispatch<React.SetStateAction<socialMediaType>>
}


export default function SocialSelect({ setSocialmedia} : socialType) {
  
  const socials : socialMediaType[] = [ {name: "Custom", icon: "/images/icons/link.png"},...socialMedia] 

  return (
    <Select 
      onValueChange={(value) => {
        const selected = socials.find(
          (social) => social.name === value
        );

        if (selected) {
          setSocialmedia(selected);
        }
      }}
    >
      <SelectTrigger className="w-55">
        <SelectValue  placeholder="Select a social media app" />
      </SelectTrigger>

      <SelectContent>
        {socials.map((social) => (
          <SelectItem
            key={social.name}
            value={social.name}
          >
            <img src={social.icon} className="w-4 h-4 object-contain"  />
            {social.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}