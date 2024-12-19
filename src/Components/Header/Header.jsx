import './_header.scss'
import Pokeball from '../../assets/Pokeball.svg'
import Input from '../Input/Input'
import { Link } from 'react-router-dom' // Import Link for navigation
import { Outlet } from 'react-router-dom' // Import Outlet for rendering nested routes

const Header = () => {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <img className="header__logo__img" src={Pokeball} alt="Pokeball" />
                    <h1 className="header__logo__title">Pokedex</h1>
                </div>
                <div className="header__search">
                    <Input />
                </div>
                {/* Add navigation links */}
                <nav className="header__nav">
                    <Link to="/" className="header__nav__link"></Link>
                    <Link to="/liked" className="header__nav__link"></Link>
                </nav>
            </header>
            {/* Add Outlet to render nested routes here */}
            <Outlet />
        </>
    )
}

export default Header
