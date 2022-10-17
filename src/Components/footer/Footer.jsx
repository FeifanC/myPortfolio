import React from 'react'
import "./footer.css"
import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

function Footer() {
    return (
        <footer>
            <a href="#" className='footer_logo'>Feifan Cao</a>

            <ul className='links'>
                <li><a href="#header">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                {/* <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li> */}
            </ul>

            <div className="footer_socials">
                <a href="https://facebook.com" target="_blank"><BsFacebook className='footer_icon' /></a>
                <a href="https://instagram.com" target="_blank"><BsInstagram className='footer_icon' /></a>
                <a href="https://twitter.com" target="_blank"><BsTwitter className='footer_icon' /></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Feifan Cao. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer