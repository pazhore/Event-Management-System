import { Card, Image, Text, Badge, Button, Group, Flex } from '@mantine/core';

function CardS() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder h={100} >
         
         <Card.Section component="a" href="https://mantine.dev/">     
     <Image
       src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
       height={"100"}
       alt="Norway"
       w={150}
     />
   </Card.Section>
   {/* <Group justify="space-between" mt="md" mb="xs" >
     <Text fw={500}>Norway Fjord Adventures</Text>
     <Badge color="pink">On Sale</Badge>
     <Text size="sm" c="dimmed">
     With Fjord Tours you can explore more of the magical fjord landscapes with tours and
     activities on and around the fjords of Norway
   </Text>
   </Group> */}
     
    </Card>
  );
}
export default CardS