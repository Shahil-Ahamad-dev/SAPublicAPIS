import Link from "next/link"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ApiCard from "@/components/api-card"
import CategoryFilter from "@/components/category-filter"

export default function Home() {
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
            <Link href="/submit" className="text-amber-900 hover:text-amber-700">
              Submit API
            </Link>
          </nav>
          <Button className="bg-amber-600 hover:bg-amber-700">Submit API</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="bg-gradient-to-b from-amber-100 to-amber-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold text-amber-900 md:text-5xl">Discover Free Public APIs</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-amber-800">
              Find the perfect API for your next project from our curated collection of free public APIs
            </p>
            <div className="mx-auto flex max-w-md items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-500" />
                <Input
                  type="search"
                  placeholder="Search APIs..."
                  className="border-amber-200 pl-10 focus-visible:ring-amber-500"
                />
              </div>
              <Button className="bg-amber-600 hover:bg-amber-700">Search</Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-2xl font-bold text-amber-900">Popular APIs</h2>
            <CategoryFilter />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ApiCard
              name="Weather API"
              description="Get current weather data, forecasts, and historical weather information"
              category="Weather"
              auth="API Key"
              https={true}
              cors={true}
            />
            <ApiCard
              name="Currency Exchange"
              description="Real-time exchange rates and currency conversion"
              category="Finance"
              auth="API Key"
              https={true}
              cors={true}
            />
            <ApiCard
              name="Movie Database"
              description="Comprehensive movie information including cast, ratings, and reviews"
              category="Entertainment"
              auth="API Key"
              https={true}
              cors={false}
            />
            <ApiCard
              name="News API"
              description="Search and retrieve articles from various news sources"
              category="News"
              auth="API Key"
              https={true}
              cors={true}
            />
            <ApiCard
              name="Recipe Search"
              description="Search recipes by ingredients, cuisine, diet, and more"
              category="Food"
              auth="None"
              https={true}
              cors={true}
            />
            <ApiCard
              name="Public Holidays"
              description="Worldwide public holidays information"
              category="Calendar"
              auth="None"
              https={true}
              cors={true}
            />
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="border-amber-300 text-amber-800 hover:bg-amber-100">
              Load More
            </Button>
          </div>
        </section>

        <section className="bg-amber-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold text-amber-900">Want to add your API to our directory?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-amber-800">
              Submit your free public API to be included in our directory and reach thousands of developers
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700">Submit Your API</Button>
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
