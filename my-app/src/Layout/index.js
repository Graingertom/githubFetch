import React from 'react'
import { Outlet } from 'react-router-dom'
import {default as Header } from './Header'

export const Layout = ({getUser}) => (
    <>
    <Header getUser={getUser} />
    <main>
        <Outlet />
    </main>
    </>
)
