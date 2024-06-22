import { createContext, useState, useRef } from "react";
import PropTypes from 'prop-types'

export const AppContext = createContext();

const ProviderFunction = (props) => {
    const [barOn, setBarOn] = useState(false)
    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchValue, setSearchValue] = useState('')
    const navRef = useRef();
    const leftRef = useRef();
    const rightRef = useRef();

    const [imageCount, setImageCount] = useState(0)


    return (
        <AppContext.Provider value={{barOn, setBarOn, showSearchBar, setShowSearchBar, navRef, leftRef, rightRef, searchValue, setSearchValue, imageCount, setImageCount}}>
            {props.children}
        </AppContext.Provider>
    )
}

ProviderFunction.propTypes = {
    children: PropTypes.node.isRequired,
}

export default ProviderFunction;