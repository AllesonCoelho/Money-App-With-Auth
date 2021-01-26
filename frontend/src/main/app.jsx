import React from 'react'
import {HashRouter} from 'react-router-dom'
import Header from '../common/template/header.jsx'
import SideBar from '../common/template/sideBar.jsx'
import Footer from '../common/template/footer.jsx'
import Routes from './routes'
import Messages from '../common/msg/messages.jsx'

export default props => (
    <HashRouter>
        <div className="wrapper">
            <Header/>
            <SideBar/>
            <Routes/>
            <Footer/>
            <Messages/>
        </div>
    </HashRouter>
)