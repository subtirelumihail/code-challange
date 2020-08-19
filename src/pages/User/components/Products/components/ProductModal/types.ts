import { ProductType } from 'pages/User/store/types';

export interface ModalProps {
  product: ProductType;
  onSave?: (product: ProductType) => void;
  onClose?: () => void;
}
