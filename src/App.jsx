import React from 'react'
import Header from "./Components/header/Header"
import Footer from "./Components/footer/Footer"
import About from "./Components/about/About"
import Contact from "./Components/contact/Contact"
import Nav from "./Components/nav/Nav"
import Portfolio from "./Components/portfolio/Portfolio"
import Testimonials from "./Components/testimonials/Testimonials"
import Services from "./Components/services/Services"



const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App