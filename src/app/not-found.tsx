'use client';

import Box from '@mui/material/Box';

export default function NotFound(): JSX.Element {
  return (
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
  );
}
