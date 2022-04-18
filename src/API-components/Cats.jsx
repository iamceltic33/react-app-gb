import { Button, CircularProgress, Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getTagsThunk, getImageThunk } from "../redux/actions";

export default function Cats() {
    const tags = useSelector(state => state.cats.tags);
    const status = useSelector(state => state.cats.status);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTagsThunk())
    }, [dispatch])
    const requestTags = () => {
        dispatch(getTagsThunk());
    }
    const requestImage = (tag) => {
        dispatch(getImageThunk(tag))
    }
    if (status === "pending") {
        return <>
            <h1>Загрузка</h1>
            <CircularProgress />
        </>
    }
    if (status === "error") {
        return <>
            <Container><h1>Ошибка</h1></Container>
            <Button variant="contained" onClick={requestTags}>Повторить</Button>
        </>
    }
    return <>
        <h1>Теги</h1>
        <CatImage />
        <Container>
            {tags.map((value, index) => <Button key={index} onClick={() => { requestImage(value) }}>{value}</Button>)}
        </Container>
    </>
}

const CatImage = function () {
    const image = useSelector(state => state.cats.image);
    const status = useSelector(state => state.cats.statusImage);
    if (!image) return <></>
    if (status === "error") return <p>Попробуйте ещё раз</p>
    if (status === "pending") return <CircularProgress />
    return <Container>
        <img src={URL.createObjectURL(image)} alt="cat" />
    </Container>
}