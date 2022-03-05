import './Message.css'

function Message(props) {
    console.log(props.author);
    return (
        <div className="message">
            <p className='author'>От: {props.author}</p>
            <p className='text'>{props.text}</p>
        </div>
    )
}

export default Message;