"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, ExternalLink, Copy, Eye } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { env } from "@/config"

interface ApiCardProps {
  name: string
  description: string
  category: string
  auth: string
  https: boolean
  cors: boolean
  apiUrl?: string
  docsUrl?: string
}

export default function ApiCard({
  name,
  description,
  category,
  auth,
  https,
  cors,
  apiUrl = `${env.NEXT_PUBLIC_BACKEND_URI}/api/${name.toLowerCase().replace(/\s+/g, "_")}`,
  docsUrl = "https://docs.example.com",
}: ApiCardProps) {
  const { toast } = useToast()

  const handleCopyLink = async (url: string, type: string) => {
    try {
      await navigator.clipboard.writeText(url)
      toast({
        title: "Copied to clipboard!",
        description: `${type} URL has been copied successfully.`,
        duration: 2000,
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy link to clipboard.",
        variant: "destructive",
        duration: 2000,
      })
    }
  }

  const handleGoToLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Card className="relative flex h-auto min-h-[280px] flex-col border-amber-200 transition-all duration-300 border-amber-300">
      <CardHeader className="pb-2 relative z-0">
        <div className="flex items-start justify-between">
          <Link href={`${env.NEXT_PUBLIC_BACKEND_URI}/api/${name.toLowerCase().replace(/\s+/g, "_")}`} target="_blank">
            <h3 className="text-lg font-bold text-amber-900 transition-colors duration-200">{name}</h3>
          </Link>
          <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors duration-200">
            {category}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex-1 relative z-0">
        <p className="text-amber-700 transition-colors duration-200">{description}</p>
      </CardContent>

      <CardFooter className="flex flex-wrap items-center gap-3 border-t border-amber-100 pt-3 relative z-0">
        <div className="flex items-center gap-1 text-sm text-amber-700 transition-colors duration-200">
          <span className="font-medium">Auth:</span> {auth}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium text-amber-700 transition-colors duration-200">HTTPS:</span>
          {https ? <CheckCircle className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-500" />}
        </div>
        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium text-amber-700 transition-colors duration-200">CORS:</span>
          {cors ? <CheckCircle className="h-4 w-4 text-green-600" /> : <XCircle className="h-4 w-4 text-red-500" />}
        </div>
        <div className="flex gap-2 mt-3 pt-3 border-t border-amber-100">
          <Button
            size="sm"
            className="bg-amber-600 hover:bg-amber-700 text-white shadow-sm flex-1"
            onClick={() => handleGoToLink(apiUrl)}
          >
            <ExternalLink className="h-4 w-4 mr-1" />
            API
          </Button>
          <Button
            size="sm"
            className="bg-amber-600 hover:bg-amber-700 text-white shadow-sm flex-1"
            onClick={() => handleGoToLink(docsUrl)}
          >
            <Eye className="h-4 w-4 mr-1" />
            Docs
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-white text-amber-900 border-amber-300 shadow-sm"
            onClick={() => handleCopyLink(apiUrl, "API")}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
