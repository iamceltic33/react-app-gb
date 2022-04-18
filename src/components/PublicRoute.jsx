import { Route, Navigate } from "react-router-dom";

export default function PublicRoute({ authorized, ...rest }) {
    return !authorized ? <>
        <Route {...rest}></Route>
    </> :
        <>
            <Route element={<Navigate to="/home"></Navigate>} />
        </>
}