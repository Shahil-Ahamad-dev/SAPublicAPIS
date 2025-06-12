import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <Link href="/about" className="text-amber-900 hover:text-amber-700 font-medium">
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
        <section className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold text-amber-900 md:text-4xl">About PublicAPIs</h1>

            <div className="prose prose-amber max-w-none text-amber-800">
              <p className="lead text-lg">
                PublicAPIs is a comprehensive directory of free public APIs that developers can use in their projects.
              </p>

              <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">Our Mission</h2>
              <p>
                Our mission is to make it easy for developers to discover and integrate with free public APIs. We
                believe that open access to APIs accelerates innovation and enables developers to build better
                applications faster.
              </p>

              <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">What We Offer</h2>
              <ul className="space-y-2 list-disc pl-5">
                <li>A curated collection of free public APIs across various categories</li>
                <li>
                  Detailed information about each API including authentication methods, HTTPS support, and CORS
                  compatibility
                </li>
                <li>Search and filtering capabilities to help you find the perfect API for your project</li>
                <li>A platform for API providers to showcase their services to developers</li>
              </ul>

              <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">How It Works</h2>
              <p>
                We maintain a database of free public APIs that are submitted by the community and verified by our team.
                Each API is categorized and tagged with relevant information to help developers quickly assess if it
                meets their requirements.
              </p>

              <h2 className="text-2xl font-bold text-amber-900 mt-8 mb-4">Join Our Community</h2>
              <p>
                We welcome contributions from the developer community. If you know of a free public API that isn't
                listed in our directory, please submit it through our submission form. Together, we can build the most
                comprehensive resource for public APIs.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="bg-amber-600 hover:bg-amber-700">Submit an API</Button>
            </div>
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
