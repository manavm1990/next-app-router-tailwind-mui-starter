'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { type ReactElement } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}): ReactElement {
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
        <h1 className="font-black text-red-500">Something went wrong!</h1>
        <p className="italic">{error.message}</p>
        <Button onClick={reset}>Try again</Button>
      </Box>
    </Container>
  );
}
