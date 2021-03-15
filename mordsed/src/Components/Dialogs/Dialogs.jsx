import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem';
import Messages from './Message/Message';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validator";
import {TextArea} from "../Common/FormsControl/FormsControl";


const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.Name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Messages message={m.message}/>)

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}
const maxLength300 = maxLength(300)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={TextArea} name={"newMessageBody"} placeholder={"Enter you message"}
                       validate={[required, maxLength300]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;