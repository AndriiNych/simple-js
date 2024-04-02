import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function AppBody({ children }) {
  return (
    <Container maxWidth="false">
      <Box sx={{ my: 10 }}>{children}</Box>
    </Container>
  );
}
