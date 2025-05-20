import Header from './Component/Header/Header';
import './App.css'
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Players from './Component/players/Players';

function App() {
  const [coins, setCoins] = useState(0);

  const addCoins = () => {
    setCoins(coins + 10000000);
    toast.success("Coins added!");
  };

  return (
    <>
      <ToastContainer/>
       <Header coins={coins} addCoins={addCoins} />
       <Players></Players>
    </>
  )
}

export default App