import  { FC } from 'react';
import Header from '../Header/header';
import { Autocomplete, Button,  Grid,  } from '@mantine/core';
import BookCard from '../bookcard/bookcard';

interface TalentBookingProps {
  
}

const TalentBooking: FC<TalentBookingProps> = ({}) => {
  const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => `Option ${index}`);
  return (
    <>
       <>
      <Grid grow gutter="sm" >
        <Grid.Col span={12}  >
          <Header />
        </Grid.Col>
        <Grid.Col span={8}  >
        <Autocomplete
      
      placeholder="search"
      limit={5}
      data={largeData}
    />
    </Grid.Col>
     
   

    <Grid.Col span={3}  m={5}  >

    <Button variant="filled" size="md">Button</Button>
</Grid.Col>

<Grid.Col span={4}> 
< BookCard/>
</Grid.Col>
<Grid.Col span={4}> 
< BookCard/>
</Grid.Col>
<Grid.Col span={4}> 
< BookCard/>
</Grid.Col>
<Grid.Col span={4}> 
< BookCard/>
</Grid.Col>
<Grid.Col span={4}> 
< BookCard/>
</Grid.Col>
<Grid.Col span={4}> 
< BookCard/>
</Grid.Col>


     
         
          
      

      </Grid>
      {/* <Header/> */}
    </>
      
    </>
  );
};

export default TalentBooking;