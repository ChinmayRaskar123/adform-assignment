import { useState } from 'react';
import './App.css';
import { CampaignList } from './Component/CampaignList';
import { UsersList } from './Component/UsersList';
import { FormLabel, Switch } from '@mui/material';

function App() {

  const label = { inputProps: { 'aria-label': 'showMock' } };
  const [showMockDataFlag, setShowMockDataFlag] = useState(false)
  
  const handleChange = (event) => {
    setShowMockDataFlag(event.target.checked);
  };

  return (
    <div className="App">
      <div className="d-flex justify-content-start p-3">
        <span className="p-2">Show Mock Data</span>
        <Switch 
          {...label}
          onChange={handleChange} 
        />
      </div>

        
      {showMockDataFlag && <CampaignList />}
      {!showMockDataFlag && <UsersList />}
    </div>
  );
}

export default App;
