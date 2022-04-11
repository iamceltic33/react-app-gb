import { Container, List, ListItem, Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link/*, useNavigate*/ } from "react-router-dom";
let newChatName = "";
export default function ChatsListContainer({ createAvailable }) {
    const chats = useSelector(state => state.chats)
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const createNewChat = (newChatName) => {
        dispatch({ type: "createChat", payload: newChatName });
        // navigate("/chats/" + id);
    }
    const deleteChat = (value) => {
        dispatch({ type: "deleteChat", payload: value })
    }
    const onNameChange = (event) => {
        newChatName = event.target.value
    }
    return <ChatsList createNewChat={createNewChat} deleteChat={deleteChat} chats={chats} onNameChange={onNameChange} createAvailable={createAvailable} />
}

const ChatsList = ({ createNewChat, deleteChat, chats, onNameChange, createAvailable }) => {
    return <Container>
        <h2>Выберите чат</h2>
        <List sx={{ fontSize: 20 }} >
            {Object.keys(chats).map((value) => {
                return <ListItem key={value}>
                    <Link to={"/chats/" + value} style={{ textDecoration: "none", display: "block" }}>
                        {chats[value].name}
                    </Link>
                    <Button variant="outlined" color="error" sx={{ ml: 5 }} onClick={() => { deleteChat(value) }}>
                        Удалить
                    </Button>
                </ListItem>
            })}
        </List>

        {createAvailable && <Container sx={{ flexDirection: "column", display: "flex" }} maxWidth="sm">
            <h2>Или создайте новый</h2>
            <TextField id='chat-name' variant='outlined' label='Название чата'
                onChange={onNameChange}
            ></TextField>

            <Button variant="contained" type='button' onClick={() => { createNewChat(newChatName) }}>Отправить</Button>
        </Container>
        }
    </Container>
}