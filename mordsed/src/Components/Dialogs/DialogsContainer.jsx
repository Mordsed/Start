import React from 'react';
import {addMessageCreator, updateMessageTextCreator} from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        updateMessageText: (text) => {
            dispatch(updateMessageTextCreator(text))
        }
    }
}

export default compose (connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)
(Dialogs)
