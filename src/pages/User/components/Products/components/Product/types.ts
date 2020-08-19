import { ProductType } from 'pages/User/store/types';
export interface ProductProps {
  product: ProductType;
  onEdit?: (product: ProductType) => void;
  onRemove?: (product: ProductType) => void;
}
