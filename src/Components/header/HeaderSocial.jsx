import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"

const HeaderSocial = () => {
    return (
        <div className='header_socials'>
            <a href="www.linkedin.com/in/feifan-cao-5497a4247" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/FeifanC" target="_blank"><BsGithub /></a>
            <a href="" target="_blank"><BsFacebook /></a>
        </div>
    )
}

export default HeaderSocial