import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Messages from './Message/Message';
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.Name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Messages message={m.message}/>)
    let newMessageText = state.newMessageText


    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateMessageText(text);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <div>
                        <textarea onChange={onMessageChange} value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onAddMessage}>Отправить</button>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Dialogs;