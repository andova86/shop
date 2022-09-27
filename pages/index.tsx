import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../api/productsApi';
import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';
import { ProductList } from '../modules/products/application/list/ProductList';




const Home: NextPage = () => {

  const [showLoading, setShowLoading] = useState(false)
  const [listP, setlistP] = useState([])

  
  useEffect(() => {

    async function getProducts() {
      try {
        setShowLoading(true)
        let result = await getAllProducts()
        console.log(result.data);
        setlistP(result.data)
        setShowLoading(false)


      } catch (error) {
        console.log(error);
        setShowLoading(false)

      }
    }

    getProducts()

  }, [])



  return (
    <ShopLayout title='Lista de Productos' pageDescription=''>
      <ProductList products={listP} />
    </ShopLayout>
  );
};

export default Home;
