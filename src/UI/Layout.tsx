"use client"
import store from '@/Redux/store'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Provider } from 'react-redux'
function Layout({children}:any) {
  
  return (
       <Provider store={store}>
          <SessionProvider>
            {children}
          </SessionProvider>
       </Provider> 
  )
}

export default Layout