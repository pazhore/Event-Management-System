// import { Button, Divider, Flex, Title } from '@mantine/core';
// import { Text } from '@mantine/core';
// import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, FC } from 'react';


// interface HeaderProps {
//   title: string,
//   subtitle: string,
//   buttons?: string[];
//   onClick?:  React.MouseEventHandler<HTMLButtonElement>;
// }

// const Header: FC<HeaderProps> = ({}) => {
// const buttontext=props?.buttons
// console.log(buttontext)

//   return (
//     <>
//       <Flex justify={'space-between'}>          
//         <div>
//           <><Title order={2}>{props.title}</Title><Text size="sm" variant="gradient"
//             gradient={{ from: 'gray', to: 'gray', deg: 0 }}>{props.subtitle}</Text></>
//         </div>
//         <Flex gap={10}   >
//         {buttontext?.map((text:any)=>(
//               <div>  {buttontext ? (<Button  top={'20%'} pl={20} onClick={onclick || undefined} >{text}</Button> ) : (<></>)}</div> 
//          ))}
//          </Flex>
       
//       </Flex>
//       <Divider />
//     </>
//   );
// };

// export default Header;
import { Button, Divider, Flex, Title, Text } from '@mantine/core';
import { FC } from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
  buttons?: string[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: FC<HeaderProps> = ({ title, subtitle, buttons, onClick }) => {
  // Directly use buttons and other destructured props
  return (
    <>
      <Flex justify="space-between">
        <div>
          <Title order={2}>{title}</Title>
          <Text size="sm" variant="gradient" gradient={{ from: 'gray', to: 'gray', deg: 0 }}>
            {subtitle}
          </Text>
        </div>
        <Flex gap={10}>
          {buttons?.map((text: string, index: number) => (
            <div key={index}>
              <a href="/dashboard/eventform"><Button pl={20} onClick={onClick}>
                {text}
              </Button></a>
              
            </div>
          ))}
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Header;
