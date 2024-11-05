import InventoryGrid from './InventoryGrid';
import { useAppSelector } from '../../store';
import { selectLeftInventory } from '../../store/inventory';
import InventoryHotbar from './InventoryHotbar';

const LeftInventory: React.FC = () => {
  const leftInventory = useAppSelector(selectLeftInventory);

  return (
    <>
      {/* <InventoryHotbar /> */}
      <InventoryGrid inventory={leftInventory} />
    </>
  );
};

export default LeftInventory;
