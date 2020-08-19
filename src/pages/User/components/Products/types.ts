import { ProductType } from '../../store/types';

export interface ProductsProps {
  products: ProductType[];
  onSave?: (product: ProductType) => void;
  onRemove?: (product: ProductType) => void;
  onEdit?: (product: ProductType) => void;
}
