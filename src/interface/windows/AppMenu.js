import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import AppMenuItem from './AppMenuItem';
import { projectsList } from 'data';

export default function AppMenu() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {projectsList.map((group, idx) => {
        return (
          <React.Fragment key={idx}>
            {group.groupId !== 0 && <Divider />}
            <List>
              {group.items.map((item, idx) => {
                return (
                  <ListItem key={idx}>
                    <AppMenuItem item={item} />
                    {/* <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.menuText} /> */}
                  </ListItem>
                );
              })}
            </List>
          </React.Fragment>
        );
      })}
    </Box>
  );

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>

      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
