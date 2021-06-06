import React from 'react';
import moduleCSS from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();
    let creatMessage = ()=>{
        let textMessage = newMessageElement.current.value;
        alert(textMessage)
    }


    let messagesElements = props.state.messagesData.map(message => <Message id={message.id} message={message.message}/>)
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src}/>);

    return (
        <div className={moduleCSS.dialogs}>
            <div className={moduleCSS.DialogItem}>
                {dialogsElements}
            </div>
            <div className={moduleCSS.Message}>
                {messagesElements}
            </div>

            <textarea ref={newMessageElement}></textarea>
            <button onClick={ creatMessage }>Add post</button>
        </div>
    )
}

export default Dialogs;