import './App.css';

import { Route, Routes } from 'react-router-dom';

import Profile from './Profile';
import Chats from './Chats';
import Home from './Home';
import Layout from './Layout';
import ChatsList from './ChatsList';
import Cats from './API-components/Cats'


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index exact element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats" element={<ChatsList createAvailable />} />
          <Route path="/chats/:chatId" element={<Chats />} />
          <Route path="/cats" element={<Cats />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
