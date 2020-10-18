import React from 'react';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';


const Footer = ()=>{
    const year = new Date().getFullYear();
    return <>
        <footer>
        <div class="footer_bottom">all copyrights reserved {year}</div>
        <p>done  with <FavoriteBorderRoundedIcon/> by  Shruti</p>
        </footer>


    </>
};
export default Footer;