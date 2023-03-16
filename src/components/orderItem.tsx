import { FC } from "react";
import { Receipt_data } from "../constants/constants";
import './styles/orderItem.css'
interface cartItemType{
    id:number,
    title:string,
    image:string,
    price:number,
    quantity:number
}
const OrderItem:FC<cartItemType> = (props) =>{
    return(
        <>
        <div className="order_item" >
            <img src={props.image} alt="No image"/>
            <div className="order_item_details">
                <h6>{props.title}</h6>
                <div className="order_price_quantity">
                    <span>{Receipt_data.PRICE_UNIT}{props.price}</span>
                    <span>{Receipt_data.QUANTITY} : {props.quantity}</span>
                </div>
                
            </div>
            
        </div>
        </>
    );
}

export default OrderItem;