
import { Button, Divider, Flex, Title } from '@mantine/core';
import { Text } from '@mantine/core';
import { FC } from 'react';

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <>
  <Flex justify={'space-between'}>
  <div>
      <Title order={2}>title</Title>
      <Text size="sm" variant="gradient"
      gradient={{ from: 'gray', to: 'gray', deg: 0 }}>sub title</Text>
      </div>
      <Flex
      gap="5"><Button variant="filled" size="md">Button</Button>
      <Button variant="filled" size="md">Button</Button></Flex>
        
       
  </Flex>
     
      
      <Divider/>
   
   
 

     
    </>
  );
};

export default Header;