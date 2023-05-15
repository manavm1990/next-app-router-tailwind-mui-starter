'use client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

interface ThemeProps {
  children: React.ReactNode;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Theme({ children }: ThemeProps): JSX.Element {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
