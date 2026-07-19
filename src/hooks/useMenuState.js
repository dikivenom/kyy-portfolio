import { useState } from 'react';

export function useMenuState(initialOpen = true, initialSelected = 'HOME') {
  const [open, setOpen] = useState(initialOpen);
  const [selected, setSelected] = useState(initialSelected);

  const handleOpen = () => setOpen((v) => !v);
  
  const handleSelected = (menu) => {
    setSelected(menu);
    
    const sectionIds = {
      'ABOUT ME': 'about-me',
      'PROJECT': 'projects',
      'SKILLS': 'skills',
      'CERTIFICATE': 'achievements',
      'CONTACT': 'contact',
    };
    
    const sectionId = sectionIds[menu];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }
  };

  return {
    open,
    selected,
    handleOpen,
    handleSelected,
  };
}