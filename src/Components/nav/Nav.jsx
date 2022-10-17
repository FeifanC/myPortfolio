import React from 'react'
import "./nav.css"
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineContacts } from "react-icons/ai"
import { FaRegHandshake } from "react-icons/fa"
import { BiMessageDetail } from "react-icons/bi"
import { useState } from "react"
import { useEffect } from 'react'

function Nav() {
    const [activeNav, setActiveNav] = useState("header")

    function changeBackground() {
        if (window.scrollY < 722 && window.scrollY >= 0) {
            setActiveNav("header")
        } else if (window.scrollY < 1300 && window.scrollY >= 722) {
            setActiveNav("about")
        } else if (window.scrollY > 1300 && window.scrollY <= 2000) {
            setActiveNav("portfolio")
        } else {
            setActiveNav("contact")
        }

    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

    return (
        <nav id='nav'>
            <a onClick={() => setActiveNav("header")} className={activeNav === "header" && "active"} href="#header"><AiOutlineHome /></a>
            <a onClick={() => setActiveNav("about")} className={activeNav === "about" && "active"} href="#about"><AiOutlineUser /></a>
            {/* <a onClick={() => setActiveNav("services")} className={activeNav === "services" && "active"} href="#services"><FaRegHandshake /></a> */}
            <a onClick={() => setActiveNav("portfolio")} className={activeNav === "portfolio" && "active"} href="#portfolio"><AiOutlineBook /></a>
            <a onClick={() => setActiveNav("contact")} className={activeNav === "contact" && "active"} href="#contact"><AiOutlineContacts /></a>
        </nav>
    )
}

export default Nav

