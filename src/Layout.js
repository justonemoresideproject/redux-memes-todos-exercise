import './Layout.css'

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <table className='navbar'>
                <th className='navbar-home'>
                    <Link to='/'>
                        Home
                    </Link>
                </th>
                <th className='navbar-link'>
                    <Link to='/memes'>
                        Memes
                    </Link>
                </th>
                <th className='navbar-link'>
                    <Link to='/todos'>
                        Todos
                    </Link>
                </th>
            </table>
            <Outlet />
        </>
    )
}

export default Layout