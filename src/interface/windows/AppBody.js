import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import TestDetails from 'components/TestDetails';
import TestProject from 'components/TestProject';

export default function AppBody({ tabNumber }) {
  return (
    <Container>
      <Box sx={{ my: 10 }}>
        {tabNumber === 0 ? <TestDetails /> : <TestProject />}
        {/* {[...new Array(12)].map((el, idx) => {
          return (
            <div key={idx}>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et.
            </div>
          );
        })} */}
      </Box>
    </Container>
  );
}
