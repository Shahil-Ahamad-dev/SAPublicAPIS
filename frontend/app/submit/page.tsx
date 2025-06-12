import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function SubmitPage() {
  return (
    <div className="flex min-h-screen flex-col bg-amber-50">
      <header className="sticky top-0 z-10 border-b border-amber-200 bg-white px-4 py-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-amber-600">PublicAPIs</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-amber-900 hover:text-amber-700">
              Home
            </Link>
            <Link href="/about" className="text-amber-900 hover:text-amber-700">
              About
            </Link>
            <Link href="/submit" className="text-amber-900 hover:text-amber-700 font-medium">
              Submit API
            </Link>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700">Submit API</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-2xl">
            <h1 className="mb-6 text-3xl font-bold text-amber-900 md:text-4xl">Submit an API</h1>

            <p className="mb-8 text-amber-800">
              Have a free public API you'd like to share with the community? Fill out the form below to submit it for
              review.
            </p>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="api-name" className="text-amber-900">
                  API Name
                </Label>
                <Input
                  id="api-name"
                  placeholder="e.g., Weather API"
                  className="border-amber-200 focus-visible:ring-amber-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-description" className="text-amber-900">
                  Description
                </Label>
                <Textarea
                  id="api-description"
                  placeholder="Provide a brief description of what the API does"
                  className="min-h-[100px] border-amber-200 focus-visible:ring-amber-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-url" className="text-amber-900">
                  API URL
                </Label>
                <Input
                  id="api-url"
                  type="url"
                  placeholder="https://api.example.com"
                  className="border-amber-200 focus-visible:ring-amber-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-docs" className="text-amber-900">
                  Documentation URL
                </Label>
                <Input
                  id="api-docs"
                  type="url"
                  placeholder="https://docs.example.com"
                  className="border-amber-200 focus-visible:ring-amber-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-category" className="text-amber-900">
                  Category
                </Label>
                <Select>
                  <SelectTrigger id="api-category" className="border-amber-200 focus:ring-amber-500">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weather">Weather</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="entertainment">Entertainment</SelectItem>
                    <SelectItem value="news">News</SelectItem>
                    <SelectItem value="food">Food</SelectItem>
                    <SelectItem value="calendar">Calendar</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="music">Music</SelectItem>
                    <SelectItem value="games">Games</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="api-auth" className="text-amber-900">
                  Authentication
                </Label>
                <Select>
                  <SelectTrigger id="api-auth" className="border-amber-200 focus:ring-amber-500">
                    <SelectValue placeholder="Select authentication type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="apiKey">API Key</SelectItem>
                    <SelectItem value="oauth">OAuth</SelectItem>
                    <SelectItem value="oauth2">OAuth 2.0</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label className="text-amber-900">Features</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="https" />
                    <label
                      htmlFor="https"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-amber-800"
                    >
                      HTTPS Support
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="cors" />
                    <label
                      htmlFor="cors"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-amber-800"
                    >
                      CORS Support
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="submitter-email" className="text-amber-900">
                  Your Email (optional)
                </Label>
                <Input
                  id="submitter-email"
                  type="email"
                  placeholder="email@example.com"
                  className="border-amber-200 focus-visible:ring-amber-500"
                />
                <p className="text-xs text-amber-700">
                  We'll only use this to contact you if we have questions about the API.
                </p>
              </div>

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                Submit API for Review
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-amber-200 bg-white px-4 py-8">
        <div className="container mx-auto">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div>
              <h3 className="mb-2 text-lg font-bold text-amber-900">PublicAPIs</h3>
              <p className="text-amber-700">A directory of free public APIs for developers</p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h4 className="mb-3 font-semibold text-amber-900">Resources</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>
                    <Link href="/docs" className="hover:text-amber-600">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories" className="hover:text-amber-600">
                      Categories
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-amber-900">Company</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>
                    <Link href="/about" className="hover:text-amber-600">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-amber-600">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-amber-900">Legal</h4>
                <ul className="space-y-2 text-amber-700">
                  <li>
                    <Link href="/privacy" className="hover:text-amber-600">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="hover:text-amber-600">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-amber-100 pt-6 text-center text-amber-700">
            <p>© {new Date().getFullYear()} PublicAPIs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
