import { createContext, useState } from "react";
import PropTypes from 'prop-types'

export const AppContext = createContext();

const ProviderFunction = (props) => {
    const [barOn, setBarOn] = useState(false)
    return (
        <AppContext.Provider value={{barOn, setBarOn}}>
            {props.children}
        </AppContext.Provider>
    )
}

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;