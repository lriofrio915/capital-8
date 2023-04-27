import React from 'react'
import Head from "next/head";
import Header from '../components/Header';

 const Layout = ({children}) => {
  return (
    <>
      <Head>
        <title>Capital 8</title>
        <meta name="description" content="Servicios Financieros y Tecnológicos" />
        <link rel="icon" href="/" />
      </Head>
      <Header/>
      {children}
    </>
  )
}

export default Layout;