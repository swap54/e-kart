import { actions } from "../redux/actionTypes";
const initialState = {
    cartItems:[

    ],
    total_amount:0
}

export default function cartReducer(state=initialState,action) {
    switch (action.type){
        case actions.ADD_TO_CART:{
            action.payload.quantity=1;
            return{
                cartItems:[...state.cartItems,action.payload]
            }
        }
        break;
        case actions.REMOVE_FROM_CART:{
            let id = parseInt(action.payload.id)
            console.log(id)
            return {cartItems:state.cartItems.filter(item=>item.id!==id)}
        }
        break;
        case actions.INCREASE_QUANTITY:{
            return({cartItems:state.cartItems.map(i=>{
                if(i.id==action.payload.id){
                  i.quantity=i.quantity+1;
                }
                return i;
              })})
        }
        break;
        case actions.DECREASE_QUANTITY:{
            return({cartItems:state.cartItems.map(i=>{
                if(i.id==action.payload.id){
                  i.quantity=i.quantity-1;
                }
                return i;
              })})
        }
        break;
        case actions.EMPTY_CART:{
            return{
                ...state,
                total_amount:0,
                cartItems:[]
            }
        }
        case actions.CHECKOUT:{
            return{
                ...state,
                total_amount:action.payload
            }
        }
        break;
        default:
            return state
    }
}