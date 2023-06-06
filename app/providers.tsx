'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type ReactElement } from 'react';

// Create a client
const queryClient = new QueryClient();

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
