'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { type ReactElement } from 'react';

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
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
