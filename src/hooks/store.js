export const InitialValue = () => (
    {   favoritos: [],
        personajes: [],
        films : [],
        naves : [],
        planetas : [],
        vehiculos : [],
        especies : []


    })

export default function ReducerFavoritos(state,action){
    switch (action.type){
        case "Personajes":
            return {...state, personajes:action.payload}
        case "Films":
            return {...state, films:action.payload}
        case "Naves":
            return {...state, naves:action.payload}
        case "Planetas":
            return {...state, planetas:action.payload}
        case "Vehiculos":
            return {...state, vehiculos:action.payload}
        case "Especies":
            return {...state, especies:action.payload}
        case "Anyadir_favorito":
            return {...state, favoritos:[...state.favoritos,action.payload]}     
        case "Eliminar_favorito":
            return {...state, favoritos: state.favoritos.filter((x)=>(x!=action.payload))}   
    }
}