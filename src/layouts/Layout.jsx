import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Main from 'components/Main'

export const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <div className="w-full h-full"><Main /></div>
            <Footer />

            
        </div>
    )
}

export default Layout;
