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
            let newBasket=[...state.basket];
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id)
            if(index>=0){
                // item exists in basket, remove it
                newBasket.splice(index, 1 )
                
            }else{
                console.warn(
                    `cant remove products (id : ${action.id})`
                )
            }
            return  {
                ...state,
                basket: newBasket
                
            }
            break;
        default:
            return state
    }
}

export default reducer
/*



*/