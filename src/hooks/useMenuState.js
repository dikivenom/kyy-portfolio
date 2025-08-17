import { useState } from 'react';

export function useMenuState(initialOpen = true, initialSelected = 'HOME') {
  const [open, setOpen] = useState(initialOpen);
  const [selected, setSelected] = useState(initialSelected);

  const handleOpen = () => setOpen((v) => !v);
  const handleSelected = (menu) => setSelected(menu);

  return {
    open,
    selected,
    handleOpen,
    handleSelected,
  };
}
