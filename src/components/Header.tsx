import React,{FC,useState,useEffect} from 'react'
import axios from 'axios';
import './styles/header.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Header_data} from '../constants/constants'
 const Header:FC = () =>{
    const navigate = useNavigate()
    const [links,setLinks] = useState<Array<string>>([]);
    const [dropDown,setDropDown] = useState<string>('none');
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products/categories').then((data)=>{
            setLinks(data.data)
        })
    },[])
    return(
        <div className='header_container'>
            <h1 onClick={()=>navigate("/")}>{Header_data.BRAND}</h1>
            <div className='nav'>
                <div className='collections_dropdown' onMouseEnter={()=>setDropDown('flex')}>
                    <Link to="#" className='collections Link'>{Header_data.NAV_DATA_1}</Link>
                    <div className='dropdown' style={{display:dropDown}} onMouseLeave={()=>setDropDown('none')}>
                        {
                            links.map((x)=>
                                <Link to={"/collection/"+x} className="drop_down_link">{x}</Link>
                            )
                        }
                            <Link to={"/collection/all_products"} className="drop_down_link">All products</Link>

                    </div>
                </div>
                <Link to="/cart" className='Link'>{Header_data.NAV_DATA_2}</Link>
                <Link to="#" className='Link' >{Header_data.NAV_DATA_3}</Link>
            </div>
        </div>
    );
 }
 export default Header;