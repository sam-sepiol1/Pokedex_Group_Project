import './_header.scss'
import Pokeball from '../../assets/Pokeball.svg'

const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src={Pokeball} alt="Pokeball" />
            <h1 className="header__title">Pokedex</h1>
        </header>
    )
}

export default Header