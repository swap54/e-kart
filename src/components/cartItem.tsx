import { FC } from "react";
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import './styles/cartItem.css'
import { useNavigate } from "react-router-dom";
import { Cart_item_data } from "../constants/constants";
import { actions } from "../redux/actionTypes";
import { decreaseQuantity,RemoveFromCart,IncreaseQuantity } from "../redux/actions";
interface cartItemType{
    id:number,
    title:string,
    image:string,
    price:number,
    quantity:number
}
const CartItem:FC<cartItemType> = (props) =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const decrease_quanity =()=>{
        if(props.quantity!=1){
            dispatch(decreaseQuantity({id:props.id}))
        }
        else{
            dispatch(RemoveFromCart({id:props.id}))
        }
    }
    const increase_quantity = () =>{
        dispatch(IncreaseQuantity({id:props.id}))
    }
    return(
        <div className="cart_item" >
            <img src={props.image} alt="No image" onClick={()=>navigate(`/product/${props.id}`)}/>
            <div className="cart_item_details" onClick={()=>navigate(`/product/${props.id}`)}>
                <h2>{props.title}</h2>
                <div className="price_quantity">
                    <span>{Cart_item_data.PRICE_UNIT}{props.price}</span>
                    <span>{Cart_item_data.QUANTITY} : {props.quantity}</span>
                </div>
                
            </div>
            <div className="change_quantity">
                    <Button variant="outline-danger" className="change_quantity_button decrease" onClick={decrease_quanity}></Button>
                    <Button variant="outline-success" className="change_quantity_button increase" onClick={increase_quantity}></Button>
            </div>
        </div>
    );
}

export default CartItem;