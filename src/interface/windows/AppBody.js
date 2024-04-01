import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function AppBody({ tabNumber, children }) {
  return (
    <Container>
      <Box sx={{ my: 10 }}>{children}</Box>
    </Container>
  );
}

//  {tabNumber === 0 ? <TestDetails /> : <TestProject />}
