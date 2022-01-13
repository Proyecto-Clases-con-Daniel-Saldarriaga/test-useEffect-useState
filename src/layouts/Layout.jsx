import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Boton from 'components/Boton'

export const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <main className="flex w-full overflow-y-scroll items-center justify-center">{children}</main>
            <Boton />
            <Footer />

            
        </div>
    )
}

export default Layout;
