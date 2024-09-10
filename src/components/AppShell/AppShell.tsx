import { Burger, Flex, UnstyledButton, Overlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ReactNode } from 'react';
import SideBar from '../sidebar/sidebar';
import { AppShell as MantineAppshell } from '@mantine/core';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import "./AppShell.css"
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
      padding="md" h={'100vh'}
    >
      <MantineAppshell.Navbar p="md" color="red" top={0} h={"100vh"} >
        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
        {/* <Flex pos={"fixed"} h={"100vh"} w={"250"} justify={"center"}> <Button ml={"5"} leftSection={<MdOutlineKeyboardDoubleArrowLeft size={30} />} visibleFrom='sm' top={"50%"} onClick={toggleDesktop} w={10} bg={'red'} /> </Flex> */}
        <Overlay backgroundOpacity={0} h={"30px"}> <Flex pos={"fixed"} w={"300"} pl={10} justify={"center"} top={"50%"} >        <UnstyledButton visibleFrom='sm' top={"50%"} onClick={toggleDesktop}><MdOutlineKeyboardDoubleArrowLeft size={30} /></UnstyledButton></Flex>
        </Overlay>
        <SideBar />
      </MantineAppshell.Navbar>
      <MantineAppshell.Main bg={'#ebfbee'} pt={0} h={'100vh'}>
        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
        <div>{desktopOpened ? (<></>
        ) : (<div className='overlay'><Overlay zIndex={"20"} backgroundOpacity={0} radius={"50%"} bg={"lime"} h={"30px"} w={"30px"} pos={"fixed"} top={"50%"} > <Flex > <UnstyledButton visibleFrom='sm' onClick={toggleDesktop}><MdOutlineKeyboardDoubleArrowRight size={30} /></UnstyledButton></Flex>
        </Overlay></div>
        )}
        </div>
        {children}</MantineAppshell.Main>
    </MantineAppshell>
  );
};

export default AppShell;