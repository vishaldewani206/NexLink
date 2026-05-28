import FontSelect from "@/components/dashboard/FontSelect"
import { Input } from "@/components/ui/input"

export const Text = () => {
  return (
    <div>
      <h2 className="dash_heading mb-2">Page Font</h2>
      <FontSelect />
      <h2 className="dash_heading mb-2 mt-8">Page Text Color</h2>
      <Input type="color" className="max-w-20" />
      <h2 className="dash_heading mb-2 mt-8">Title Font</h2>
      <FontSelect />
      <h2 className="dash_heading mb-2 mt-8">Title Color</h2>
      <Input type="color" className="max-w-20" />
    </div>
  )
}
