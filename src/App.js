import './App.css';
import { nextId } from './utils';
import { Route, Routes } from 'react-router-dom';

import Profile from './Profile';
import Chats from './Chats';
import Home from './Home';
import Layout from './Layout';
import { useState } from 'react';
import ChatsList from './ChatsList';

let chatArray = {
  [nextId()]: { name: 'Chat 1', messages: [{ author: 'robot', text: 'welcome to Chat 1' }] },
  [nextId()]: { name: 'Chat 2', messages: [{ author: 'robot', text: 'welcome to Chat 2' }] },
  [nextId()]: { name: 'Chat 3', messages: [{ author: 'robot', text: 'welcome to Chat 3' }] },
  [nextId()]: { name: 'Chat 4', messages: [{ author: 'robot', text: 'welcome to Chat 4' }] }
}

function App() {
  let [chats, setChats] = useState(chatArray);

  const updateChats = (message, chatId) => {
    const newChats = Object.assign({}, chats)
    newChats[chatId].messages.push(message);
    setChats(newChats);
  }

  const createChat = (chatName) => {
    const newChats = Object.assign({}, chats);
    let id = nextId();
    newChats[id] = {
      name: chatName,
      messages: [{ author: 'robot', text: `welcome to ${chatName}` }]
    }
    setChats(newChats);
    return id;
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index exact element={<Home chatArray={chats} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chats" exact element={<ChatsList chatArray={chats} createChat={createChat} createAvailable />} />
          <Route path="/chats/:chatId" element={<Chats chatArray={chats} updateChats={updateChats} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
