import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import ChatsList from "./ChatsList";


export default function Home() {
    return <>
        <Container>
            <div className="chat-list">
                <ChatsList />
            </div>
            <div className="profile-info">
                <Link to="/profile">Ваш профиль</Link>
            </div>
            <div className="cats">
                <Link to="/cats">Работа с API</Link>
            </div>
        </Container>
    </>
}