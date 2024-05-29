"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

function Layout({children}:any) {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Layout