import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"
import Link from "next/link"

interface ApiCardProps {
  name: string
  description: string
  category: string
  auth: string
  https: boolean
  cors: boolean
}

export default function ApiCard({ name, description, category, auth, https, cors }: ApiCardProps) {
  return (
    <Card className="flex h-full flex-col border-amber-200 transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <Link href={`/api/${name.toLowerCase().replace(/\s+/g, "-")}`}>
            <h3 className="text-lg font-bold text-amber-900 hover:text-amber-600">{name}</h3>
          </Link>
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-amber-700">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center gap-3 border-t border-amber-100 pt-3">
        <div className="flex items-center gap-1 text-sm text-amber-700">
          <span className="font-medium">Auth:</span> {auth}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium text-amber-700">HTTPS:</span>
          {https ? <CheckCircle className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-500" />}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium text-amber-700">CORS:</span>
          {cors ? <CheckCircle className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-500" />}
        </div>
      </CardFooter>
    </Card>
  )
}
