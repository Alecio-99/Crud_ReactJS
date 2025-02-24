import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Footer  from '../components/template/Footer'
import Main from '../components/template/Main'
import Nav from '../components/template/Nav'


export default props =>
    <div className="app">
        <Footer />
        <Logo />
        <Main />
        <Nav />
    </div>