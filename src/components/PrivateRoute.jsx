import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ authorized, ...rest }) {
    return authorized ? <>
        <Route {...rest}></Route>
    </> :
        <>
            <Route element={<Navigate to="/login"></Navigate>}></Route>
        </>
}
