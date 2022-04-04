import MessageList from './MessageList';
import { useRef } from 'react';
import { Container, Alert, Button, TextField } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

let newAuthor = '', newText = '';

export default function Chats() {
    let { chatId } = useParams();
    const chats = useSelector(state => state.chats);
    const dispatch = useDispatch();
    let chat = chats[chatId];
    let textFieldRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: "addMessage", payload: { chatId, author: newAuthor, text: newText } })
        setTimeout(() => {
            dispatch({ type: "addMessage", payload: { chatId, author: "robot", text: "Спасибо за ваше сообщение!" } })
        }, 1000)
        textFieldRef?.current.focus();
    }

    if (!chat) {
        return <Container >
            <Alert severity="error">Чат не найден</Alert>
            <Link to="/chats">Вернуться</Link>
        </Container>
    }
    return <Container id="chat" >

        <MessageList messages={chat.messages} />
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