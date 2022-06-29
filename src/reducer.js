export const initialState={
    basket:[],
    user:null,
}


const  reducer=(state, action)=>{
    console.log(action)
    switch(action.type) {
        case "add_to_basket":
            //logic for adding item to basket
            return {
                ...state,
                basket:[...state.basket, action.item]
                
            }
            break;
        case "remove_from_basket":
            //logic for breaking item from basket
            return {state}
            break;
        default:
            return state
    }
}

export default reducer
/*



*/