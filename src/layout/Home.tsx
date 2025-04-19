import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

import ProductList from '../Components/product'
type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Header/>
    <ProductList/>
    
    <Footer/>
    </>
  )
}

export default Home