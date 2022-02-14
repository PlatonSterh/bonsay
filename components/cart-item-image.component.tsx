import Image from 'next/image';

import { IMAGE_API_URL } from '../api';
import { DEFAULT_PRODUCT_IMAGE } from '../variables';

import { Product } from '../declarations';

interface CartItemImageProps {
  product: Product;
}

export const CartItemImage = ({
  product: { name, path, upload },
}: CartItemImageProps) => {
  return (
    <Image
      src={
        path || upload?.path
          ? IMAGE_API_URL + (path || upload?.path)
          : DEFAULT_PRODUCT_IMAGE
      }
      width={110}
      height={140}
      alt={name}
      className="select-none"
    />
  );
};

export default CartItemImage;
