import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import Profile from './components/Profile';
import Chats from './components/Chats';
import Home from './components/Home';
import Layout from './components/Layout';
import ChatsList from './components/ChatsList';
import Cats from './API-components/Cats'
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authorizationCheck } from './redux/actions';
import { auth } from './service';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        dispatch(authorizationCheck(true))
      } else {
        dispatch(authorizationCheck(false))
      }
    })
  })
  const authorized = useSelector(state => state.profile.authorized);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={authorized ? <Home /> : <Navigate to={"/login"} />} />
          <Route path="/profile" element={authorized ? <Profile /> : <Navigate to={"/login"} />} />
          <Route path="/chats" element={authorized ? <ChatsList createAvailable /> : <Navigate to={"/login"} />} />
          <Route path="/chats/:chatId" element={authorized ? <Chats /> : <Navigate to={"/login"} />} />
          <Route path="/cats" element={authorized ? <Cats /> : <Navigate to={"/login"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
