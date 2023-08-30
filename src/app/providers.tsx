'use client'

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#18453B"
    }
  }
})

export function Providers({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}