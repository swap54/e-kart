import { FC,useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './styles/checkout.css'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Checkout_data } from "../constants/constants";
import { useDispatch } from "react-redux";
import { actions } from "../redux/actionTypes";
import { EmptyCart, EmptyOrder } from "../redux/actions";
import { PlaceOrder } from "../redux/actions";
const Checkout:FC = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const total_amount = useSelector((state:any)=>state.cart.total_amount)
    const [successAnimation,setSuccessAnimation] = useState<boolean>(false)
    const [paymentOptionCard,setpaymentOptionCard] = useState<string>("payment_options")
    const [paymentOptionUPI,setpaymentOptionUPI] = useState<string>("payment_options")
    const [paymentOptionCOD,setpaymentOptionCOD] = useState<string>("payment_options")
    const [disablePlaceOrder,setDisablePlaceOrder] = useState<boolean>(true)
    const [name,setName] = useState<string>("")
    const [phone,setPhone] = useState<number>()
    const [email,setEmail] = useState<string>("")
    const [address,setAddress] = useState<string>("")
    const [city,setCity] = useState<string>("")
    const [state,setState] = useState<string>("")
    const [isValidated,setisValidated] = useState<boolean>(false)
    const items = useSelector((state:any)=>state.cart.cartItems)
    const saveUserData = (e:any) =>{
        e.preventDefault();
        setisValidated(true)
    }
    const placeOrder = () =>{
        let mode_of_payment;
        if(paymentOptionCOD=="payment_options_selected") mode_of_payment=Checkout_data.PAYMENT_OPTION_3
        if(paymentOptionUPI=="payment_options_selected") mode_of_payment=Checkout_data.PAYMENT_OPTION_2
        if(paymentOptionCard=="payment_options_selected") mode_of_payment=Checkout_data.PAYMENT_OPTION_1
        let data = {
            name:name,
            phone:phone,
            email:email,
            address:address,
            city:city,
            state:state,
            mode_of_payment:mode_of_payment
        }
        dispatch(PlaceOrder(data,items,total_amount))
        dispatch(EmptyCart())
        setSuccessAnimation(true)
    }
    return(
        <>
        <Header/>
        {
            (successAnimation)?
            <>
                <div className="success-animation">
                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                    </svg>
                    <div className="success_message">
                        <h3>{name},{Checkout_data.SUCCESS_MESSAGE}</h3>
                        <div className="success_buttons">
                        <Button variant="outline-secondary" onClick={()=>{
                            navigate("/")
                            dispatch(EmptyOrder())
                            }} className="home_button" size="sm">{Checkout_data.HOME_BUTTON}</Button>
                        <Button variant="outline-secondary" onClick={()=>navigate("/receipt")} className="home_button" size="sm">{Checkout_data.RECEIPT_BUTTON}</Button>
                        </div>
                        
                    </div>
                    
                </div>
            </>:<>
            <h2 className='heading'>{Checkout_data.SUB_HEADING}</h2>
                <div className="checkout_body">
                
                    <div className="user_data">
                    <h4>{Checkout_data.PERSONAL_DETAILS_HEADING}</h4>
                    <Form onSubmit={(e)=>saveUserData(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>{Checkout_data.FORM_NAME_LABEL}</Form.Label>
                            <Form.Control type="text" placeholder={Checkout_data.FORM_NAME_PLACEHOLDER} value={name} required onChange={(e)=>setName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{Checkout_data.FORM_PHONE_LABEL}</Form.Label>
                            <Form.Control type="tel" placeholder={Checkout_data.FORM_PHONE_PLACEHOLDER} value={phone} maxLength={10} minLength={10} required onChange={(e)=>setPhone(parseInt(e.target.value))}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{Checkout_data.FORM_EMAIL_LABEL}</Form.Label>
                            <Form.Control type="email" placeholder={Checkout_data.FORM_ADDRESS_PLACEHLDER} value={email} required onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{Checkout_data.FORM_ADDRESS_LABEL}</Form.Label>
                            <Form.Control as="textarea" placeholder={Checkout_data.FORM_ADDRESS_PLACEHLDER} value={address} required onChange={(e)=>setAddress(e.target.value)}/>
                        </Form.Group>
                        

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{Checkout_data.FORM_CITY_LABEL}</Form.Label>
                            <Form.Control type="text" placeholder={Checkout_data.FORM_CITY_PLACEHOLDER} value={city} required onChange={(e)=>setCity(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>{Checkout_data.FORM_STATE_LABEL}</Form.Label>
                            <Form.Control type="text" placeholder={Checkout_data.FORM_STATE_PLACEHOLDER} value={state} required onChange={(e)=>setState(e.target.value)}/>
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            {Checkout_data.FORM_SUBMIT_BUTTON}
                        </Button>
                    </Form>
                    </div>
                    <div className="vr"></div>
                    <div className="user_data payment_section">
                    <h4>{Checkout_data.PAYMENT_OPTIONS_HEADING}</h4>
                        <div className="total_amount">
                            <span>{Checkout_data.TOTAL_AMOUNT_LABEL}{total_amount}</span>
                        </div>
                        <div className={paymentOptionCard} onClick={()=>{
                            setpaymentOptionUPI("payment_options")
                            setpaymentOptionCOD("payment_options")
                            setpaymentOptionCard("payment_options_selected")
                            if(isValidated) setDisablePlaceOrder(false)
                            }}>
                            <span>{Checkout_data.PAYMENT_OPTION_1}</span>
                            <span>&#62;</span>
                        </div>
                        <div className={paymentOptionUPI} onClick={()=>{
                            setpaymentOptionCard("payment_options")
                            setpaymentOptionCOD("payment_options")
                            setpaymentOptionUPI("payment_options_selected")
                            if(isValidated) setDisablePlaceOrder(false)
                            }}>
                            <span>{Checkout_data.PAYMENT_OPTION_2}</span>
                            <span>&#62;</span>
                        </div>
                        <div className={paymentOptionCOD} onClick={()=>{
                            setpaymentOptionCard("payment_options")
                            setpaymentOptionUPI("payment_options")
                            setpaymentOptionCOD("payment_options_selected")
                            if(isValidated) setDisablePlaceOrder(false)
                            }}>
                            <span>{Checkout_data.PAYMENT_OPTION_3}</span>
                            <span>&#62;</span>
                        </div>
                        <Button variant="success" className="place_order_button" disabled={disablePlaceOrder} onClick={placeOrder}>{Checkout_data.PLACE_ORDER_BUTTON}</Button>
                    </div>
                </div>
            </>
        }
        
        <Footer />
        </>
    );
}

export default Checkout;