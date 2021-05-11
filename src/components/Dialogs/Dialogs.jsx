import React from 'react';
import moduleCSS from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Rost'},
        {id: 2, name: 'Анна'},
        {id: 3, name: 'Арина'},
        {id: 4, name: 'Том'},
        {id: 5, name: 'Snikers'},
        {id: 6, name: 'Pivko'},
        {id: 7, name: 'RAP/HIP-HOP'},
        {id: 8, name: 'Rom'},
        {id: 9, name: 'Tekilla'},
    ]


    let messagesData = [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'Love:)'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'You?'},
        {id: 5, message: 'wtfc'},
        {id: 6, message: 'ебнврт?'},
        {id: 7, message: 'fack off!'},
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElements = messagesData.map(message => <Message id={message.id} message={message.message}/>)

    return (
        <div className={moduleCSS.dialogs}>
            <div className={moduleCSS.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={moduleCSS.message}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;