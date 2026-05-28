import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"

export const Buttons = () => {
  return (
    <div>
      <label htmlFor="btn-color" className="dash_heading block mb-2">Button Color</label>
      <Input id="btn-color" type="color" className="max-w-20" />
      <label htmlFor="text-color" className="dash_heading block mb-2 mt-8">Button Text Color</label>
      <Input id="text-color" type="color" className="max-w-20" />
      <label htmlFor="slider" className="dash_heading block mb-2 mt-8">Button Roundness</label>
      <Slider id="slider" defaultValue={[20]} max={100} step={1} className="max-w-60"  />
    </div>
  )
}
