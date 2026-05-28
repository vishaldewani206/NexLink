import { useState } from "react"
import { Background } from "../../components/dashboard/backgrounds/Background";
import { Input } from "../../components/ui/input";

export const Wallpaper = () => {
  const [wallpaper, setWallpaper] = useState<string>("plain");
  const styles : string[] = ["plain", "dots", "grid", "aurora"];
  const [dgColor, setDgColor] = useState("")
  return (
    <div>
      <h2 className="dash_heading">Wallpaper Style</h2>
      <div className="flex flex-wrap gap-4">
        {styles.map((e:string)=>(
        <div key={e} onClick={()=> setWallpaper(e)} className={`${wallpaper == e && "border-2 border-purple-600"} w-30 h-40 overflow-hidden relative rounded-2xl z-10`}>
        <Background t={e} bg="black" dgColor={dgColor} />
      </div>
      ))}
      </div>
      <h2 className="dash_heading mt-4">Dot / Grid Color</h2>
      <Input onChange={(e)=> setDgColor(e.target.value)}  className="max-w-15 min-h-15" type="color" />
    </div>
  )
}
