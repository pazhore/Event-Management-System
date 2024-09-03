
import { Route, Routes } from 'react-router-dom';
import '@mantine/core/styles.css';
import Dashboard from './components/dashboard/dashboard.tsx';
import TalentBooking from './components/talentbooking/talentbooking.tsx';
import Promotion from './components/promotion/promotion.tsx';
import Ticketing from './components/ticketing/ticketing.tsx';
import Settings from './components/settings/settings.tsx';
import Support from './components/Support/support.tsx';
import Profile from './components/profile/profile.tsx';
import AppShell from './components/AppShell/AppShell.tsx';

function App() {
  return (

    <AppShell>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<TalentBooking />} />
        <Route path="/ticketing" element={<Ticketing />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </AppShell>
  );
}

export default App;