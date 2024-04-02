import * as React from 'react';
import { NavLink } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { menuActiveElement } from 'style';

export default function AppMenuItem({ item }) {
  return (
    <NavLink
      to={item.content[0].to}
      className={({ isActive }) =>
        `${isActive ? menuActiveElement.mainMenu : ''} pt-0.5`
      }
    >
      <ListItemButton>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.menuText} />
      </ListItemButton>
    </NavLink>
  );
}
