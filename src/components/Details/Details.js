import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircleIcon from '@mui/icons-material/Circle';

export const TYPE_TEXT = {
  H5: 'h5',
  UL: 'ul',
  LI: 'li',
  PRIM: 'prim',
  P: 'p',
};

const typeText = {
  [TYPE_TEXT.H5]: H5,
  [TYPE_TEXT.UL]: Ul,
  [TYPE_TEXT.LI]: Li,
  [TYPE_TEXT.PRIM]: Prim,
  [TYPE_TEXT.P]: P,
};

function P({ text }) {
  return (
    <Typography variant="body1" className="py-3">
      {text}
    </Typography>
  );
}

function Prim({ text, note }) {
  return (
    <div className="flex flex-row gap-2 items-center italic ">
      <Typography variant="button" fontWeight="bold">
        {note}
      </Typography>
      <Typography variant="body2" fontWeight="bold">
        {text}
      </Typography>
    </div>
  );
}

function H5({ text }) {
  return <Typography variant="h5">{text}</Typography>;
}

function Ul(item) {
  const { text, list } = item;
  return (
    <>
      {text !== '' && <Box className="pt-4"> {typeText['h5'](item)}</Box>}
      {list.length > 0 && (
        <List>
          {list.map(item => (
            <div key={item.id}>{typeText[item.type](item)}</div>
          ))}
        </List>
      )}
    </>
  );
}

function Li({ text }) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemIcon sx={{ minWidth: 30 }}>
        <CircleIcon sx={{ fontSize: 10 }} />
      </ListItemIcon>
      <ListItemText variant="body1">{text}</ListItemText>
    </ListItem>
  );
}

export default function Details({ details }) {
  return (
    <Box sx={{ maxWidth: 700, paddingX: '15px', marginX: 'auto' }}>
      {details.map(item => (
        <div key={item.id}>{typeText[item.type](item)}</div>
      ))}
    </Box>
  );
}
