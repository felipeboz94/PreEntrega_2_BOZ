import Proptypes from 'prop-types';

const TusComprasContainer = ({children})=>{
    return (
        <div className = 'TusComprasContainer'>TusComprasContainer</div>
    )
}

TusComprasContainer.proptype = {
    children: Proptypes.element.isRequired
}

export default TusComprasContainer;