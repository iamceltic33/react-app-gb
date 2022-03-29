import { AppBar, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Home, Person, Message } from "@mui/icons-material";
import "./Header.css";

export default function Header() {
    return <AppBar position="sticky">
        <Toolbar variant="tense" sx={{ justifyContent: 'space-between' }}>
            <h1>CHAT</h1>
            <div className="menu-container">
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-link_active" : "nav-link"}>
                    <Home sx={{ verticalAlign: "middle", mr: 1 }} />
                    <span style={{ verticalAlign: "middle" }}>Главная</span>
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link nav-link_active" : "nav-link"}>
                    <Person sx={{ verticalAlign: "middle", mr: 1 }} />
                    <span style={{ verticalAlign: "middle" }}>Профиль</span>
                </NavLink>
                <NavLink to="/chats/" className={({ isActive }) => isActive ? "nav-link nav-link_active" : "nav-link"}>
                    <Message sx={{ verticalAlign: "middle", mr: 1 }} />
                    <span style={{ verticalAlign: "middle" }}>Чаты</span>
                </NavLink>
            </div>
        </Toolbar>
    </AppBar>
}

