import { MantineProvider, createTheme } from '@mantine/core';

export default function AppProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const theme = createTheme({});

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
