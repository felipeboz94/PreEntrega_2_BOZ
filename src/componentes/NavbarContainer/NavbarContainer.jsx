import PropTypes from 'prop-types';
import PokeWidget from '../PokeWidget'
import './NavbarContainer.css'
import logo from '../icons/pokemon-23.svg'
const NavbarContainer = ()=>{
    return (
        <div className = 'navBar'>
            <nav>
                <a href="/"><img className = 'Logo' src={logo} alt=""/></a>
                <a href="/tuscompras">Tus compras</a>
                <a href="/categorias">Categorías</a>
                <a href="/contactanos">Contactanos</a>
            </nav>      

            <PokeWidget/>
        </div>
    )
}

NavbarContainer.proptype = {
    menus: PropTypes.array.isRequired
}

export default NavbarContainer;