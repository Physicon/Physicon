import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Layout = ({children}) => (
    <div className="layout">
        <div className="layout__inner">
            <div className="layout__header">
                <Header/>
            </div>
            <div className="layout__main">
                {children}
            </div>
            <div className="layout__footer">
                <Footer/>
            </div>
        </div>
    </div>
)

export default Layout