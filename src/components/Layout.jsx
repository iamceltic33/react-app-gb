import Header from './Header';

import Grid from '@mui/material/Grid';


import { Outlet } from 'react-router-dom';



export default function Layout() {

    return <>
        <Header />
        <Grid container>
            <Outlet />
        </Grid>
    </>
}