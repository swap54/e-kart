import React,{FC} from 'react'
import Header from './Header';
import Carousel_component from './carousels';
import Footer from './Footer';
import './styles/home.css'
import { Home_data } from '../constants/constants';
 const Home:FC = () =>{
    return(
        <>
        <Header />
        <div className='section_1'>
            <p>{Home_data.HEADING_1}<br/>{Home_data.HEADING_2}</p>
        </div>
        <div className='corousel'>
            <Carousel_component />
        </div>
        <Footer />
        </>
    );
 }
 export default Home;