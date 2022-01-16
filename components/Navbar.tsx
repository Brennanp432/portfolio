import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start text-white">
            Patrick Brennan
        </div>
        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    Home
                  </a>
                </Link>  
              </li>
              <li className="nav-item">
                <Link href="/projects">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    Projects
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                    Hire me
                  </a>
                </Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar