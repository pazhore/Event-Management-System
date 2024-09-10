import  { FC } from 'react';
import Header from '../Header/header';

interface ProfileProps {
  
}

const Profile: FC<ProfileProps> = ({}) => {
  return (
    <>
        <Header title='Profile' subtitle='some text'  />
    </>
  );
};

export default Profile;