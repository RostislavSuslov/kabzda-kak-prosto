import React from 'react';
import moduleCSS from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = props.state.messagesData.map(message => <Message id={message.id} message={message.message}/>)

    return (
        <div className={moduleCSS.dialogs}>
            <div className={moduleCSS.DialogItem}>
                {dialogsElements}
            </div>
            <div className={moduleCSS.Message}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;