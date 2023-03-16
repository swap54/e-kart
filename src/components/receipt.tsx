import {FC} from 'react'
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';
import { Receipt_data } from '../constants/constants';
import OrderItem from './orderItem';
import './styles/receipt.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { EmptyOrder } from '../redux/actions';
const Receipt:FC = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const order = useSelector((state:any)=>state.order.buyerData)
    const items = useSelector((state:any)=>state.order.orderData)
    const total_amount = useSelector((state:any)=>state.order.total_amount)
    return(
        <>
        <Header/>
        <h2 className='heading'>{Receipt_data.HEADING}</h2>
        <div className="receipt_body">
            
            <div className="user_details">
                <h4>{Receipt_data.BUYER_DETAILS}</h4>
                <span>Name : {order.name}</span>
                <span>Phone : {order.phone}</span>
                <span>e-mail : {order.email}</span>
                <span>Address : {order.address}</span>
                <span>City : {order.city}</span>
                <span>State : {order.state}</span>
                <span>Mode of payment : {order.mode_of_payment}</span>
                <Button variant="success" onClick={()=>{
                    navigate("/")
                    dispatch(EmptyOrder())
                }} className="receipt_home_button" size="sm">{Receipt_data.HOME_BUTTON}</Button>
            </div>
            <div className="vr"></div>
            <div className="order_details">
                <h4>{Receipt_data.ORDER_DETAILS}</h4>
                {
                    items.map((item:any)=>
                    <OrderItem id={item.id} title={item.title} image={item.image} quantity={item.quantity} price={item.price}/>
                )
                }
                <div className="receipt_end">
                    <h5>Total amount : {total_amount}</h5>
                    
                </div>
                
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Receipt