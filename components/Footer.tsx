import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gym-gray-50 border-t border-gym-gray-100">
      <div className="container-width py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 md:px-0">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4">GymRNK</h3>
            <p className="text-sm md:text-base text-gym-gray-600">
              The social fitness app where you compete with friends.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-sm md:text-base text-gym-gray-600 hover:text-gym-black transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#download" className="text-sm md:text-base text-gym-gray-600 hover:text-gym-black transition-colors">
                  Download
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm md:text-base text-gym-gray-600 hover:text-gym-black transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm md:text-base text-gym-gray-600 hover:text-gym-black transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm md:text-base mb-3 md:mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm md:text-base text-gym-gray-600 hover:text-gym-black transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm md:text-base text-gym-gray-600 hover:text-gym-black transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gym-gray-200 text-center text-gym-gray-600 px-4">
          <p className="text-sm md:text-base">&copy; 2025 GymRNK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}