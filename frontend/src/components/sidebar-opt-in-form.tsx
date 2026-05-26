import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SidebarInput } from "@/components/ui/sidebar"

export function SidebarOptInForm() {
  return (
    <Card className="gap-2 py-4 shadow-none">
      <CardHeader className="px-4">
        <CardTitle className="text-sm">Any Queries?</CardTitle>
        <CardDescription>
          Now you can directly contact with the creators of Linkist
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="w-full">Contact</Button>
      </CardContent>
    </Card>
  )
}
