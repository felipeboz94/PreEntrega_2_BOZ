import Proptypes from 'prop-types';
const RootContainer = ({children})=>{
    return (
        <div className = 'RootContainer'>
            <h1>
                ¡Bienvenido al e-commerce de Tarjetas Pokemón!
            </h1>
            {children}
        </div>

    )
}

RootContainer.proptype = {
    children: Proptypes.element.isRequired
}

export default RootContainer;