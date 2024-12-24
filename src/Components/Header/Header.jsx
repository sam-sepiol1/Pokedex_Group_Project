/* eslint-disable react/prop-types */
import './_header.scss'
import Pokeball from '../../assets/Pokeball.svg'
import Input from '../Input/Input'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Header = ({ search, handleInputChange, handleSortChange, sortType }) => {
    return (
        <>
            <header className="header">
                <div className="header__logo">
                    <img className="header__logo__img" src={Pokeball} alt="Pokeball" />
                    <h1 className="header__logo__title">Pokedex</h1>
                </div>
                <div className="header__search">
                    <Input search={search} handleInputChange={handleInputChange} handleSortChange={handleSortChange} sortType={sortType} />
                </div>
                <nav className="header__nav">
                    <Link to="/" className="header__nav__link"></Link>
                    <Link to="/liked" className="header__nav__link"></Link>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header
