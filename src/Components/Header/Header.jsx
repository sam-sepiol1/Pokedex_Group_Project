import './_header.scss'
import Pokeball from '../../assets/Pokeball.svg'
import Input from '../Input/Input'

const Header = () => {
    return (
        <header className="header">
        <div className="header__logo">
            <img className="header__logo__img" src={Pokeball} alt="Pokeball" />
            <h1 className="header__logo__title">Pokedex</h1>
        </div>
        <div className="header__search">
            <Input />
        </div>
        </header>
    )
}

export default Header