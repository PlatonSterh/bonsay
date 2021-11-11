import Card from '../components/card.component';

interface Product {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}

interface ProductsGridProps {
  products: Product[];
}

export const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className='grid grid-flow-row max-w-6xl auto-cols-fr grid-cols-4 justify-center gap-6'>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default ProductsGrid;
