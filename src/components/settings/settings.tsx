import { FC } from 'react';
import Header from '../Header/header';

interface SettingsProps {
  
}

const Settings: FC<SettingsProps> = ({}) => {
  return (
    <>
      <Header title='Settings' subtitle='some text' />
    </>
  );
};

export default Settings;