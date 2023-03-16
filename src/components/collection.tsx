import React,{FC,useState,useEffect} from 'react';
import Header from './Header';
import axios from 'axios'
import List from './list';
import Footer from './Footer';
import './styles/collection.css'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import ScreenLoader from './screenLoader';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Collection_data } from '../constants/constants';
import { useDispatch,useSelector } from 'react-redux';
import { GetCollections } from '../redux/actions';
// interface propType{
//     type?:string
// }
const Collection:FC = () =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let {id} = useParams()
    interface dataType{
        image:string,
        title:string,
        price:number,
        description:string,
        id:number,
        rating:{
            rate:number,
            count:number
        }
    }
    interface loaderType{
        input:number
    }
    const [data,setData] = useState<Array<dataType>>([])
    const [page,setPage] = useState<number>(1)
    const [isNextPage,setisNextPage] = useState<Boolean>(true)
    const [isLoader,setisLoader] = useState<Boolean>(false)

    useEffect(()=>{
        let size = page*5;
        setisLoader(true);
        let url:string=""
        if(id=="all_products"){
            url=`https://fakestoreapi.com/products?limit=${size+1}`
        }
        else{
            url=`https://fakestoreapi.com/products/category/${id}?limit=${size+1}`
        }
        axios.get(url).then((data)=>{ //Fetching 1 extra object for isNextPage validation. 
            let dataLength = data.data.length-size;
            if(dataLength==1){ //condition for isNextPage validation
                setisNextPage(true)
            }
            else {setisNextPage(false);}
            setData(data.data.slice(size-5,size));
        }).finally(()=>{
            setisLoader(false)
        })
        
        
    },[id,page])
    
    const productInfo = (id:number) =>{
        navigate(`/product/${id}`)
    }
    return(
        <>
            <Header />
            <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            {
                (isLoader)? <>
                <div className='loading_area'>
                    <ScreenLoader/>
                </div>
                    
                </>:<>
                <h2 className='heading'>{Collection_data.SUB_HEADING}</h2>
            
            <div className='content'>
            {
                data.map((x,index)=>
                    <List image={x.image} title={x.title} price={x.price} description={x.description} rating={x.rating} id={x.id} productInfo={productInfo}/>
                )
            }
            <div className='navigation_buttons'>
                <Button variant="light" onClick={()=>{
                    if(page>1){
                        setPage(page-1)
                    }
                    }}>{Collection_data.PREVIOUS_BUTTON}</Button>
                <Button variant="light" onClick={()=>
                    {
                        isNextPage?setPage(page+1):
                            toast.warn("Page doesn't exist", {
                                position: "top-right",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                });
                        
                    }}
                    >{Collection_data.NEXT_BUTTON}</Button>
            </div>
            </div>
            <Footer />
                </>
            }
            
            
        </>
    );
}
export default Collection;