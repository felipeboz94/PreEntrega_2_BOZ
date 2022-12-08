//creo la componente basado en funcion
//se usan proptyps que viene de manera nativa en React
import pokebola from "../icons/pokebola.svg"
import './PokeWidget.css'
const PokeWidget = ()=>{
    return (
        <div>
            <a href="/carrito" className = 'pokeWidget'><img src={pokebola} alt="" /><p>(1)</p></a>
        </div>

    )
}

export default PokeWidget;