import {FC,useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import ScreenLoader from "./screenLoader";
import './styles/product.css'
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";
import currency from './images/currency.png'
import rating from './images/rating.png'
import { useDispatch,useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Product_data } from "../constants/constants";
import { AddToCart } from "../redux/actions";
const Product:FC = () => {
    interface product_data_type{
        category:string,
        description:string,
        id:number,
        image:string,
        price:number,
        rating:{
            rate:number,
            count:number
        }
        title:string
    }
    const dispatch = useDispatch()
    const [isLoader,setisLoader] = useState<Boolean>(false)
    const [product_data,setProduct_data] = useState<product_data_type>()
    const [diableAddToCart,setDisableAddToCart] = useState<boolean>(false)
    const [AddToCartText,setAddToCartText] = useState<string>(Product_data.ADD_TO_CART_BUTTON_INITIAL_STATE)
    const {id} = useParams()
    const items = useSelector((state:any)=>state.cart.cartItems)
    useEffect(()=>{
        setisLoader(true);
        
        for(let i of items){
            if(i.id==id){
                setAddToCartText(Product_data.ADD_TO_CART_BUTTON_FINAL_STATE)
                setDisableAddToCart(true)
            }
        }
        axios.get('https://fakestoreapi.com/products/'+id).then((data)=>{
            setProduct_data(data.data)
        }).finally(()=>{
            setisLoader(false)
        })
    },[])
    const addToCart = () =>{
        let data = {title:product_data?.title,image:product_data?.image,price:product_data?.price,id:product_data?.id}
        dispatch(AddToCart(data))
        toast.success(Product_data.TOAST_SUCCESS, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        setDisableAddToCart(true)
        setAddToCartText(Product_data.ADD_TO_CART_BUTTON_FINAL_STATE)
    }
    return(
        <>
        <Header/>
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {
            (isLoader)?
            <>
                <div className='loading_area'>
                    <ScreenLoader/>
                </div>
            </>
            :
            <>
                <h2 className='heading'>{Product_data.SUB_HEADING}</h2>
                <div className="product_data">
                        <img src={product_data?.image} alt="No image"/>
                    <div className="product_details">
                        <h2>{product_data?.title}</h2>
                        <span>{product_data?.category}</span><br/>
                        <div className="price_rating">
                            <span><img src={currency}/>{product_data?.price}</span>
                            <span><img src={rating}/>{product_data?.rating.rate}</span>
                        </div>
                        <p>{product_data?.description}</p>
                        <Button variant="outline-success" className="add_to_bag" size="lg" onClick={addToCart} disabled={diableAddToCart}>{AddToCartText}</Button>
                    </div>
                </div>
                <Footer/>
            </>
        }
        
        </>
    );
}
export default Product;