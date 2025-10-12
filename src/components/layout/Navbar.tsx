import Image from 'next/image';
import Button from "@/components/ui/Button"

export default function Navbar() {
  return (
    <nav className="backdrop-blur-sm font-primary fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Button variant="ghost" href="/">
              <Image src="/logo.svg" alt="Flarial Logo" width={40} height={40} className="h-10 w-10"/>
            </Button>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
            <Button variant="ghost" href="/">Home</Button>
            <Button variant="ghost" href="/faq">FAQ</Button>
            <Button variant="ghost" href="/changelog">Changelog</Button>
            <Button variant="primary" href="https://raw.githubusercontent.com/flarialmc/newcdn/main/launcher/Flarial.Launcher.exe">Download</Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Button variant="ghost" href="/">Home</Button>
            <Button variant="ghost" href="/faq">FAQ</Button>
            <Button variant="ghost" href="/changelog">Changelog</Button>
        </div>
      </div>
    </nav>
  );
}
