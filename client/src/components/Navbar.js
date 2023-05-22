import { NavLink } from 'react-router-dom'
import navData from '../data/navData'

function NavBar() {
    return (
        <header className="navbar">
            <div className="navbar-child">
                <div>
                    <nav>
                        {navData.map((navLinkData, index) => {
                            return (
                                <NavLink
                                    key={navLinkData.id}
                                    to={navLinkData.linkPath}
                                    activeclassname="active"
                                >
                                    {navLinkData.linkText}
                                </NavLink>
                            )
                        })}
                    </nav>
                </div>
                <div>
                    <button>Logout</button>
                </div>
            </div>
        </header>
    )
}

export default NavBar
