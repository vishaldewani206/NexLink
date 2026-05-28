import type { linkType } from "@/helper/dashboardTypes"
import { Button } from "../ui/button"

type dLType = {
  links: linkType[]
}

export const DisplayLinks = ({links}: dLType) => {
  return (
    <div className="space-y-2">
      {links.map((e,i)=> (
        <div key={i} className="bg-gray-200 p-4 rounded-2xl">
          <p className=" flex gap-2 mb-2">
          <img src={e.icon} className="max-w-5 object-contain" />
          {e.name}
          </p>
          <p>
            <strong>Link:</strong> <i>{e.link}</i>
          </p>
          <Button variant={"destructive"} className="mt-4">Delete</Button>
        </div>
      ))}
    </div>
  )
}
