import React,{FC} from "react";
import './styles/footer.css'
import { Footer_data } from "../constants/constants";
const Footer:FC = () =>{
    return(
        <div className='footer'>
            <div id='address'>
                <b>{Footer_data.ADDRESS_SUBHEADING}:</b><br/>{Footer_data.ADDRESS_PART_1}<br/>{Footer_data.ADDRESS_PART_2}
            </div>
            <div id='contacts'>
                <b>{Footer_data.CONTACTS_SUBHEADING}:</b><br/>{Footer_data.CONTACT_EMAIL}<br/>{Footer_data.CONTACT_PHONE}
            </div>
        </div>
    );
} 
export default Footer;