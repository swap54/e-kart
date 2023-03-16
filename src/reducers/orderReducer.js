import { actions } from "../redux/actionTypes";
const initialState = {
    buyerData:[],
    orderData:[],
    total_amount:0
}

export default function OrderReducer(state=initialState,action){
    switch (action.type){
        case actions.PLACE_ORDER:{
            console.log(action.payload)
            return{
                ...state,
                buyerData:action.payload.buyerData,
                orderData:action.payload.cartItems,
                total_amount:action.payload.total_amount
            }
        }
        case actions.EMPTY_ORDER:{
            return{
                ...state,
                buyerData:[],
                orderData:[],
                total_amount:0
            }
        }
        default: return state;
    }
}