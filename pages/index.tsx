import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { initialData } from '../database/products';
import { ProductList } from '../modules/products/application/list/ProductList';




const Home: NextPage = () => {


  return (
    <ShopLayout title='Lista de Productos' pageDescription=''>
      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
};

export default Home;
