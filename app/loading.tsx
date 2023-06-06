'use client';

// https://nextjs.org/docs/app/api-reference/file-conventions/loading

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { type ReactElement } from 'react';

export default function CircularIndeterminate(): ReactElement {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
