import { useSelector, useDispatch } from "react-redux"

export default function Profile() {
    const profileName = useSelector(state => state.username)
    const active = useSelector(state => state.active)
    const dispatch = useDispatch();
    return <>
        <p>
            {profileName}
            {active ? ' Online' : ' Offline'}
            <input type="checkbox" checked={active} onChange={() => { dispatch({ type: 'changeActive' }) }} />
        </p>
    </>
}