import ScreenHeading from '../components/screen-heading.component';
import ProductsGrid from './products-grid.container';

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

export const Bestsellers = () => {
  return (
    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mb-8'>
      <ScreenHeading href='/catalog'>Популярное</ScreenHeading>
      <ProductsGrid products={products} />
    </div>
  );
};

export default Bestsellers;
