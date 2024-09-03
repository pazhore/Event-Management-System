import { Burger, Flex, Group, Title, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';
import SideBar from '../sidebar/sidebar';
import { AppShell as MantineAppshell } from '@mantine/core';
interface AppShellProps {
  children: ReactNode;
}


const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);



  return (
    <MantineAppshell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >

      <MantineAppshell.Header>
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <Group h="100%" px="md">
            <Flex
              mih={50}
              gap="md"
              justify="flex-start"
              align="flex-start"
              direction="row"
              wrap="wrap">
              <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
              <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />

            </Flex>

          </Group>

          <Group h="100%" px="md">
            <div>
              <Title order={2}>LOGO</Title>
              <Text size="sm" variant="gradient"
                gradient={{ from: 'gray', to: 'gray', deg: 0 }}>quick glance at Upcoming shows</Text>
            </div>

          </Group>
        </Flex>


      </MantineAppshell.Header>
      <MantineAppshell.Navbar p="md" color="red">
        <SideBar />
      </MantineAppshell.Navbar>
      <MantineAppshell.Main bg={'#ebfbee'}>{children}</MantineAppshell.Main>
    </MantineAppshell>

  );
};

export default AppShell;