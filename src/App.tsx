import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { HeaderMenu } from './components/header/Headermenu';
import { FooterLink } from './components/footer/FooterLink';

import { Homepage } from './pages/homepage/Homepage';

export default function App() {
  const [opened] = useDisclosure();


  return (
    <MantineProvider defaultColorScheme="dark">
      <Router>
      <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
          styles={{
            main: {
              paddingTop: "65px",
              paddingLeft: "16px" // Using spacing from the theme

            },
          }}
          
        >
          <AppShell.Header>
            <HeaderMenu/>            
          </AppShell.Header>
          
          <AppShell.Main>
            <Routes>
            <Route path="/"  />
              <Route path="/homepage" element={<Homepage/>} />
              {/* <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/overview" element={<Overview />} /> */}
            </Routes>
          </AppShell.Main>

          <AppShell.Footer style={{ position: 'relative'}}>
            <FooterLink />
          </AppShell.Footer>
        </AppShell>

      </Router>
    </MantineProvider>
  );
}
