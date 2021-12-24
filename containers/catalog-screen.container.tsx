import { useRouter } from 'next/router';

import Search from '../components/search.component';
import Pagination from '../components/pagination.component';
import ProductsGrid from './products-grid.container';
import Filters from './filters.container';
import FiltersDialog from './filters-dialog.container';

const products = [
  {
    id: 1,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 2,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 3,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 4,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 5,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 6,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 7,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  },
  {
    id: 8,
    title: 'MONDAY PINE',
    price: 750,
    imageUrl: '/images/product.jpg'
  }
];

export const CatalogScreen = () => {
  const { query, pathname } = useRouter();

  const { page } = query;
  const pageNumber = +page || 1;

  return (
    <div className='flex flex-col items-center w-full my-5'>
      <div className='flex flex-row justify-center items-center w-full mb-3'>
        <div className='ml-6 sm:ml-0'>
          <Search />
        </div>
        <div className='block sm:hidden mx-4'>
          <FiltersDialog />
        </div>
      </div>
      <div className='flex flex-row space-around my-6'>
        <Filters className='hidden sm:block' />
        <ProductsGrid products={products} />
      </div>
      <Pagination pageNumber={pageNumber} total={51} url={pathname} />
    </div>
  );
};

export default CatalogScreen;
