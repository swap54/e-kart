import React,{FC} from "react";
import './styles/list.css';
import rating from './images/rating.png'
interface List{
    image:string,
    title:string,
    price:number,
    description:string,
    id:number,
    rating:{
        rate:number,
        count:number
    },
    productInfo:(id:number)=>void
}
const List:FC<List> = (props) => {
    return(
        <div className='list_container' onClick={()=>props.productInfo(props.id)}>
            <img src={props.image} alt="No image"/>
            <div className="text">
                <h3>{props.title}</h3>
                <div className="priceRating">
                    <h4>Rs.{props.price}</h4>
                    <h4>*{props.rating.rate}</h4>
                </div>
                
                {/* <span>{props.description}</span> */}

            </div>
            
        </div>
    );
}
export default List;