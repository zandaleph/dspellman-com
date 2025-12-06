import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ThemeRegistry from './ThemeRegistry';
import Copyright from '../components/Copyright';
import ResponsiveAppBar from '../components/nav/ResponsiveAppBar';

export const metadata = {
  title: 'dspellman.com',
  description: 'A personal website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <ResponsiveAppBar />
          <Container maxWidth="lg">
            <Box
              sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {children}
              <Copyright />
            </Box>
          </Container>
        </ThemeRegistry>
      </body>
    </html>
  );
}
