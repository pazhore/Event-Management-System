import  { FC } from 'react';
import { LineChart } from '@mantine/charts';
import { data } from './data';
interface LinechartProps {
  
}

const Linechart: FC<LinechartProps> = ({}) => {
  return (
    <>
         <LineChart
      h={300}
      data={data}
      dataKey="date"
      xAxisProps={{ padding: { left: 30, right: 30 } }}
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
    </>
  );
};

export default Linechart;