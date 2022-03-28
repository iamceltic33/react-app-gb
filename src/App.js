import './App.css';
import Message from './Message';
import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

let newAuthor = '', newText = '';
let chatArray = [
  { id: 'c0001', name: 'Chat 1' },
  { id: 'c0002', name: 'Chat 2' },
  { id: 'c0003', name: 'Chat 3' },
  { id: 'c0004', name: 'Chat 4' }
]
function App() {
  const [state, setState] = useState([]);
  useEffect(messageCallback, [state])
  let textFieldRef = useRef(null);
  //Функции
  function messageCallback() {
    if (state.length > 0 && state[state.length - 1].author !== 'robot') {
      setTimeout(() => {
        setState(
          (prev) => {
            let newState = [...prev]
            newState.push({ author: 'robot', text: 'Спасибо за ваше сообщение!' })
            return newState
          }
        )
      }, 1000)
    }
  }

  function addMessage(event) {
    event.preventDefault();
    setState(prev => {
      let newState = [...prev]
      newState.push({ author: newAuthor, text: newText })
      return newState;
    });
    textFieldRef?.current.focus();
  }
  // разметка
  return (
    <div className="App">
      <h1>My project</h1>
      <Grid container>
        <Grid item xs={2}>
          <List sx={{ fontSize: 20 }}>
            {chatArray.map((value) => {
              return <ListItem key={value.id}>
                <ListItemText>
                  {value.name}
                </ListItemText>
              </ListItem>
            })}
          </List>
        </Grid>
        <Grid item xs={10}>
          {state.map((value, index) => {
            return (
              <Message author={value.author} text={value.text} key={index} />
            )
          })}
        </Grid>
      </Grid>
      <form className='send-form' action='#' onSubmit={addMessage} style={{
        marginInline: 'auto'
      }}>

        <TextField id='name' variant='outlined' label='имя' inputRef={textFieldRef} autoFocus
          onChange={(event) => {
            newAuthor = event.target.value;
          }}
        ></TextField>

        <TextField id='message' variant='outlined' label='сообщение' multiline={true} rows='5' onChange={(event) => {
          newText = event.target.value;
        }}></TextField>
        <Button variant="contained" type='submit'>Отправить</Button>
      </form>
    </div>
  );
}

export default App;
