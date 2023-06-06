'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { type ReactElement } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}): ReactElement {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h2 className="font-bold text-red-500">Something went wrong!</h2>
      <p className="italic">{error.message}</p>
      <Button onClick={reset}>Try again</Button>
    </Box>
  );
}
