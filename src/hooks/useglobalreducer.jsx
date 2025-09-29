import { createContext, useContext, useReducer } from "react";
import ReducerFavoritos , { InitialValue } from "./store";
const StoreContext = createContext();

export function StoreProvider({children}){
    const [store, dispatch] = useReducer(ReducerFavoritos, InitialValue())
    return (
        <StoreContext.Provider value={{store,dispatch}}>
            {children}
        </StoreContext.Provider>
    )
}

export default function UseGlobalReducer() {
    return useContext(StoreContext);
}