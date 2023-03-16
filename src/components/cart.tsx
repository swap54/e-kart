import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector,useDispatch } from 'react-redux';
import CartItem from "./cartItem";
import empty_cart from './images/emptyCart.png'
import './styles/cart.css'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { Cart_data } from "../constants/constants";
import { actions } from "../redux/actionTypes";
import { CheckOut } from "../redux/actions";
const Cart:FC = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const items = useSelector((state:any)=>state.cart.cartItems)
    const checkout = () =>{
        let amount=0;
        for(let i of items){
            amount=amount+(i.price*i.quantity)
        }
        dispatch(CheckOut(amount))
        navigate("/checkout")
    }
    return(
        <>
        <Header />
        <h2 className='heading'>{Cart_data.SUB_HEADING}</h2>
        <div className="cart_items">
            {
                (items.length>0)?<>{
                items.map((item:any)=>
                    <CartItem id={item.id} title={item.title} image={item.image} quantity={item.quantity} price={item.price}/>
                )}
                <Button variant="outline-success" className="checkout_button" size="lg" onClick={checkout}>{Cart_data.CHECKOUT_BUTTON}</Button>
                </>:<div className="empty_cart_container">
                <img src={empty_cart} alt="No item present in cart" className="empty_cart"/>
                </div>
               
            }
        </div>
        <Footer />
        </>
    );
}

export default Cart;