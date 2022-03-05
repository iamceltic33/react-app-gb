import './Message.css'

function Message(props) {
    return (
        <div className="message">
            <p>{props.text}</p>
        </div>
    )
}

export default Message;