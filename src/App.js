import './App.css';
import Message from './Message';
import { useState, useEffect } from 'react';

let newAuthor = '', newText = '';

function App() {
  const [state, setState] = useState([]);
  useEffect(() => {
    if (state.length > 0 && state[state.length - 1].author !== 'robot') {
      setState(
        (prev) => {
          let newState = [...prev]
          newState.push({ author: 'robot', text: 'Спасибо за ваше сообщение!' })
          return newState
        }
      )
    }
  }, [state])
  return (
    <div className="App">
      <h1>My project</h1>
      {/* <Message text="Первое сообщение" /> */}
      {state.map((value, index) => {
        return (
          <Message author={value.author} text={value.text} key={index} />
        )
      })}

      <form className='send-form' action='#' onSubmit={(event) => {
        event.preventDefault();
        setState(prev => {
          let newState = [...prev]
          newState.push({ author: newAuthor, text: newText })
          return newState;
        });
      }}>
        <input type="text" placeholder='Имя' onChange={(event) => {
          newAuthor = event.target.value;
        }} />
        <textarea
          rows="5"
          placeholder='Сообщение' onChange={(event) => {
            newText = event.target.value;
          }}></textarea>
        <button type='submit'>Отправить</button>
      </form>
    </div>
  );
}

export default App;
