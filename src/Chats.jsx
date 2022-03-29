import MessageList from './MessageList';
import { useState, useEffect, useRef } from 'react';
import { Container, Alert, Button, TextField } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

let newAuthor = '', newText = '';

export default function Chats({ chatArray, updateChats }) {
    let { chatId } = useParams();
    let chat = chatArray[chatId];
    let textFieldRef = useRef(null);

    const addMessage = (author, text) => {
        setMessageList(prev => {
            let newState = [...prev]
            newState.push({ author, text })
            return newState;
        });
        updateChats({ author, text }, chatId);
    }

    const messageCallback = () => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'robot') {
            setTimeout(() => {
                addMessage('robot', 'Спасибо за ваше сообщение!')
            }, 1000)
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        addMessage(newAuthor, newText);
        textFieldRef?.current.focus();
    }

    const [messageList, setMessageList] = useState(chat ? chat.messages : []);
    useEffect(messageCallback, [messageList])

    if (!chat) {
        return <Container >
            <Alert severity="error">Чат не найден</Alert>
            <Link to="/chats">Вернуться</Link>
        </Container>
    }
    return <Container id="chat" >

        <MessageList messages={messageList} />
        <form className='send-form' action='#' onSubmit={onFormSubmit} style={{
            display: "flex",
            flexDirection: "column",
            width: "auto"

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
    </Container>
}