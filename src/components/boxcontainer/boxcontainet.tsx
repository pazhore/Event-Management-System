
import { LineChart } from '@mantine/charts';
import { Button, Divider, Flex, Paper, Title as MantineTitle } from '@mantine/core';
import { FC, ReactNode } from 'react';

interface BoxContainerProps {
  titleText: string;  // Renamed to avoid conflict
  TitleComponent: React.ReactNode;
  table?: ReactNode;
  progress?: ReactNode;
  cards?: ReactNode[];
  button?: string[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
 
}

const BoxContainer: FC<BoxContainerProps> = ({ onClick, button, cards, titleText, TitleComponent, table }) => {
  return (
    <>
      <Paper shadow="xl" radius="md" p="xl">
        <div>{TitleComponent}</div>
        <MantineTitle order={4} style={{ paddingLeft: 5 }}>{titleText}</MantineTitle> {/* Updated to MantineTitle */}
        <Divider />
        {table}
        {/* Progress could be added back if needed */}
        {/* <Flex direction={'column'} gap={'10'}>{progress}</Flex> */}
        <Flex direction="column" gap={10} pt={20}>
          {cards}
          {cards}
        </Flex>
        <Flex gap={10} mt={20}>
          {button?.map((text: string, index: number) => (
            <a href="/dashboard/eventform"> <Button key={index} pl={20} onClick={onClick}>
            {text}
          </Button></a>
           
          ))}
        </Flex>
        <Flex gap={10} mt={20}>
            <LineChart data={[]} series={[]} dataKey={''}/>
        </Flex>
      </Paper>
    </>
  );
};

export default BoxContainer;
