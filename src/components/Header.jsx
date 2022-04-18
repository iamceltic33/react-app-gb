import { AppBar, Button, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Home, Person, Message } from "@mui/icons-material";
import "./Header.css";
import PetsIcon from '@mui/icons-material/Pets';
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../redux/actions";
export default function Header() {
    const authorized = useSelector(state => state.profile.authorized);
    const dispatch = useDispatch();

    return <AppBar position="sticky">
        <Toolbar variant="tense" sx={{ justifyContent: 'space-between' }}>
            <h1>CHAT</h1>
            <div className="menu-container">
                {!authorized && <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link nav-link_active" : "nav-link"}>
                    <span style={{ verticalAlign: "middle" }}>Вход</span>
                </NavLink>}

                {!authorized && <NavLink to="/signup" className={({ isActive }) => isActive ? "nav-link nav-link_active" : "nav-link"}>
                    <span style={{ verticalAlign: "middle" }}>Регистрация</span>
                </NavLink>}
                {authorized && <NavLink to="/" className={({ isActive }) => isActive ? "nav-link nav-link_active" : "nav-link"}>
                    <Home sx={{ verticalAlign: "middle", mr: 1 }} />
                    <span style={{ verticalAlign: "middle" }}>Главная</span>
                </NavLink>}
                {authorized && <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link nav-link_active" : "nav-link"}>
                    <Person sx={{ verticalAlign: "middle", mr: 1 }} />
                    <span style={{ verticalAlign: "middle" }}>Профиль</span>
                </NavLink>}
                {authorized && <NavLink to="/chats/" className={({ isActive }) => isActive ? "nav-link nav-link_active" : "nav-link"}>
                    <Message sx={{ verticalAlign: "middle", mr: 1 }} />
                    <span style={{ verticalAlign: "middle" }}>Чаты</span>
                </NavLink>}
                {authorized && <NavLink to="/cats" className={({ isActive }) => isActive ? "nav-link nav-link_active" : "nav-link"}>
                    <PetsIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                    <span style={{ verticalAlign: "middle" }}>Cats</span>
                </NavLink>}
                {authorized && <Button sx={{ color: "#fff" }} onClick={() => { dispatch(logoutThunk()) }}>Выйти</Button>}
            </div>
        </Toolbar>
    </AppBar>
}

