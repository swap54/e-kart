import axios from "axios";
import { actions } from "./actionTypes";
export const GetCollections = (id,size) =>{
    return async function (dispatch){
        const response = await axios.get('https://fakestoreapi.com/products/category/'+id+'?limit='+size+1)
        console.log(response)
        dispatch({
            type:"FETCH_COLLECTION",
            payload:response.data
        })
    }
}

export const AddToCart = (data) =>{
    return{
        type: actions.ADD_TO_CART,
        payload: data
    }
}

export const CheckOut = (total_amount) =>{
    return{
        type:actions.CHECKOUT,
        payload:parseInt(total_amount)
    }
}

export const decreaseQuantity = (id) =>{
    return{
        type:actions.DECREASE_QUANTITY,
        payload:id
    }
}

export const IncreaseQuantity = (id) =>{
    return{
        type:actions.INCREASE_QUANTITY,
        payload:id
    }
}

export const RemoveFromCart = (id) =>{
    return{
        type:actions.REMOVE_FROM_CART,
        payload:id
    }
}

export const EmptyCart = () =>{
    return{
        type:actions.EMPTY_CART
    }
}

export const PlaceOrder = (orderData,cartItems,total_amount) =>{
    console.log(cartItems)
    return{
        type:actions.PLACE_ORDER,
        payload:{
            buyerData:orderData,
            cartItems:cartItems,
            total_amount:total_amount
        }
    }
}

export const EmptyOrder = () =>{
    return{
        type:actions.EMPTY_ORDER
    }
}