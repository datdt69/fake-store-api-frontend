import { NavLink, Link} from 'react-router-dom'
import { FaShoppingCart, FaUser} from 'react-icons/fa'
import { useState } from 'react';

export default function Navbar({cartCount,userToken, handleLogout}) {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm'>
        <div className='container'>
            <NavLink to={"/"} className="navbar-brand fw-bold ">
                Fake Store
            </NavLink>
            {/* display in mobile */}
            <button 
                className='navbar-toggler'
                type="button"
                onClick={() => setIsOpenMenu(!isOpenMenu)}
         
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            {/* detail of button */}
            <div className={`collapse navbar-collapse ${isOpenMenu ? "show" : "" }`} id='navbarNav'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                        <NavLink to={"/"} className="nav-link d-flex align-items-center gap-1">
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={"/shop"} className="nav-link d-flex align-items-center gap-1">
                            Shop
                        </NavLink>
                    </li>
                </ul>
                {/* right menu */}
                <div className='d-flex align-items-center gap-3'>
                    <Link to={'/cart'} className='btn btn-outline-primary position-relative d-flex align-items-center gap-2'>
                        <FaShoppingCart size={18} />
                        <span className='d-none d-md-inline'>Cart</span>
                        {cartCount > 0 &&<span className='position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger shaow'>
                            {cartCount}
                        </span>}
                    </Link>
                    {userToken ? (
                        <button onClick={handleLogout} className='btn btn-outline-light d-flex align-items-center gap-1'>
                            Logout
                        </button>
                    ):
                    (
                        <Link to={"/login"} className='btn btn-outline-light d-flex align-items-center gap-1'>
                            Login
                        </Link>
                    )}
                </div>
            </div>
            
        </div>
      </nav>

    </div>
  )
}
