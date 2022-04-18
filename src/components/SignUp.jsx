import { Button, Grid, TextField, Alert, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupThunk } from '../redux/actions';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const signupError = useSelector(state => state.profile.error);
    const status = useSelector(state => state.profile.signupStatus);
    const formSubmit = (event) => {
        event.preventDefault()
        setError("");
        if (password === passwordConfirm && password !== "") {
            dispatch(signupThunk(email, password));
        } else {
            setError("Пароли не совпадают")
        }
    }
    const handleEmail = (event) => { setEmail(event.target.value) };
    const handlePassword = (event) => { setPassword(event.target.value) };
    const handlePasswordConfirm = (event) => { setPasswordConfirm(event.target.value) };
    return <form onSubmit={formSubmit} style={{ width: "100%" }}>
        <Grid container width={400} mx="auto" flexDirection={"column"} gap={"20px"} mt="15px">
            <Grid>
                <TextField variant="outlined" label="Электронная почта" sx={{ width: "100%" }} onChange={handleEmail} />
            </Grid>
            <Grid>
                <TextField variant="outlined" label="Пароль" sx={{ width: "100%" }} onChange={handlePassword} type="password" />
            </Grid>
            <Grid>
                <TextField variant="outlined" label="Повторить пароль" sx={{ width: "100%" }} onChange={handlePasswordConfirm} type="password" />
            </Grid>
            <Grid>
                <Button variant='outlined' type='submit' sx={{ mr: 5 }}>Регистрация</Button>
                <Link to="/login">Войти</Link>
            </Grid>
            <Grid>
                {error && <Alert severity="error">{error}</Alert>}
                {signupError && <Alert severity='error'>{signupError}</Alert>}
                {status === "pending" && <CircularProgress />}
            </Grid>
        </Grid>
    </form>
}
