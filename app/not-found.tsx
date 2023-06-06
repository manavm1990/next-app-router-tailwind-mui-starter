'use client';

/**
 * This page constantly reloads with a 'pending' state for the 'webpack-hmr' request.
 * This happens on a fresh, clean NextJS app with all defaults (and just adding a dummy version of this page).
 * [https://github.com/vercel/next.js/issues/50585]
 */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useRouter } from 'next/navigation';
import { type ReactElement } from 'react';

export default function NotFound(): ReactElement {
  const router = useRouter();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <h1>404 - Page Not Found</h1>
      <Button
        onClick={() => {
          router.back();
        }}
      >
        Go Back
      </Button>
    </Box>
  );
}
