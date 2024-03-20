import FunctionContextB from "./FunctionContextB"
import FunctionContextC from "./FunctionContextC"
import ColorTheme from "./MyColorContext"

const FunctionContextA = () => {

    const colors = {
        bkgA: "green",
        bkgB: "white",
        bkgC: "yellow",
        bkgD: "blue",
    }

    return (
         <ColorTheme.Provider value={colors}>
            <FunctionContextB />
            <FunctionContextC />
         </ColorTheme.Provider>
    )
}

export default FunctionContextA