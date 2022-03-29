import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import ChatsList from "./ChatsList";


export default function Home({ chatArray }) {
    return <>
        <Container>
            <div className="chat-list">
                <ChatsList chatArray={chatArray} />
            </div>
            <div className="profile-info">
                <Link to="/profile">Ваш профиль</Link>
            </div>
        </Container>
    </>
}