import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { getAllProducts, getAllProductsByCategory } from '../../api/productsApi'
import { ShopLayout } from '../../components/layouts'
import { ProductList } from '../../modules/products/application/list/ProductList'

const CategoryPage: NextPage = () => {

    const [listP, setlistP] = useState([])
    const [showLoading, setShowLoading] = useState(false)
    const router = useRouter();

    useEffect(() => {

        async function getProducts(category:string) {
          try {
            setShowLoading(true)
            let result = await getAllProductsByCategory(category)
            console.log(result.data);
            setlistP(result.data)
            setShowLoading(false)
    
    
          } catch (error) {
            console.log(error);
            setShowLoading(false)
    
          }
        }
    
        if (router.isReady) {
        getProducts(router.query.slug as string)

        }
    
      }, [])

  return (
    <ShopLayout title='Lista de Productos' pageDescription=''>
      <ProductList products={listP} />
    </ShopLayout>  
  )
}

export default CategoryPage