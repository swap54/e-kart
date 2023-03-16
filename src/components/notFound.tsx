import { FC } from "react";
import Header from "./Header";
import Footer from "./Footer";
import error from './images/404_notfound.jpg'
import './styles/notfound.css'
const NotFound:FC = () =>{
    return(
        <>
        <Header />
        <div className="NotFoundBody">
            <img src={error} alt="Page not found"/>
        </div>
        <Footer/>
        </>
    );
}
export default NotFound;