import React, {useContext} from 'react' 
import NavBar from '../nav-bar/NavBar'
import {Context} from "../../context/Context"
import {Link} from 'react-router-dom'

function Header() {
    const {cartItems} = useContext(Context)
    const cartClassName = cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"


    return (


        <header className="p-2 bg-red-600 fluid">
            <div className="header-contaienr container mx-auto"> 
                <NavBar />






                <div className="header-cart text-right"> 
                    <Link to="/cart" className="cart-link">
                        <span className="cart-icon text-right text-white"> 
                            <i className={`${cartClassName} ri-fw ri-2x`}></i>
                        </span> 
                        <p className="inline-block pb-5 text-right text-white">Cart</p> 
                    </Link>
                </div>


            </div> 
        </header>
    )
}

export default Header