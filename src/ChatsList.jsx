import { Container, List, ListItem, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
let newChatName = "";
export default function ChatsList({ chatArray, createChat, createAvailable }) {
    const navigate = useNavigate();
    const createNewChat = () => {
        let id = createChat(newChatName);
        navigate("/chats/" + id);
    }

    return <Container>
        <h2>Выберите чат</h2>
        <List sx={{ fontSize: 20 }} >
            {Object.keys(chatArray).map((value) => {
                return <ListItem key={value}>
                    <Link to={"/chats/" + value} style={{ textDecoration: "none", display: "block" }}>
                        {chatArray[value].name}
                    </Link>
                </ListItem>
            })}
        </List>

        {createAvailable && <Container sx={{ flexDirection: "column", display: "flex" }} maxWidth="sm">
            <h2>Или создайте новый</h2>
            <TextField id='chat-name' variant='outlined' label='Название чата'
                onChange={(event) => {
                    newChatName = event.target.value;
                }}
            ></TextField>

            <Button variant="contained" type='button' onClick={createNewChat}>Отправить</Button>
        </Container>
        }
    </Container>
}