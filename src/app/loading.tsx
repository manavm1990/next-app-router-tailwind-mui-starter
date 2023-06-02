'use client';

// https://nextjs.org/docs/app/api-reference/file-conventions/loading

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate(): JSX.Element {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
