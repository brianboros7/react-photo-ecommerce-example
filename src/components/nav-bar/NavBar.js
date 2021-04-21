import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    // const [navbarOpen, setNavbarOpen] = useState(false)

    return( 
        <div>
            <nav className="relative flex flex-wrap items-center justify-between bg-red-600 px-2 py-3 navbar-expand-lg rounded">
                <div className="px-4 flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                        <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white" href="#pablo">
                            Photo Shopper
                        </a>
                        <button 
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" 
                            type="button">
                            {/* onClick={() => setNavbarOpen(!navbarOpen)} */}
                            <span className="block relative w-6 h-px rounded-sm bg-white mt-1">Home</span>
                            <span className="block relative w-6 h-px rounded-sm bg-white mt-1">Shop</span>
                        </button>
                    
                    </div>
                    <div className="flex lg:flex-grow items-center" id="example-navbar-info">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shop" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                    Shop 
                                </Link>
                            </li> 
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar 