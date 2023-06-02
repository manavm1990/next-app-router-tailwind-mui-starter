'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function NotFound(): JSX.Element {
  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h1>404 - Page Not Found</h1>
      </Box>
    </Container>
  );
}
