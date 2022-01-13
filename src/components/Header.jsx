import React from 'react'

const Header = () => {
    return (
        <div className="flex flex-col w-full bg-red-700 p-3">
            <ol className="flex">
                <li className="li1"><button className='border border-color: rgb(220 38 38) px-5 py-2 rounded-lg hover:bg-red-600'>Clientes</button></li>
                <li className="li1"><button className='border border-color: rgb(220 38 38) px-5 py-2 rounded-lg hover:bg-red-600'>Ventas</button></li>
                <li className="li2"><button className='border border-color: rgb(220 38 38) px-5 py-2 rounded-lg hover:bg-red-600'>Inicio</button></li>
                <li className="li3"><button className='border border-color: rgb(220 38 38) px-5 py-2 rounded-lg hover:bg-red-600'>Salir</button></li>
            </ol>
        </div>
    )
}

export default Header
