import { Themes } from "@/components/Themes"
import { useState } from "react"

export const Theme = () => {
  const [selectTheme, setSelectTheme] = useState<string>("plain");
  return (
    <div className="w-full">
      <h2 className="dash_heading">Themes</h2>
      <div className="max-w-220">
        <Themes selectedTheme={selectTheme} setSelectedTheme={setSelectTheme} />
      </div>
    </div>
  )
}
