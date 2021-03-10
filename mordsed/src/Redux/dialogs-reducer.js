const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initialState = {
    dialogs: [
        {id: 1, Name: "Dima"},
        {id: 2, Name: "Kate"},
        {id: 3, Name: "Vanya"},
        {id: 4, Name: "Kaban"},
        {id: 5, Name: "Idea"}
    ],
    messages: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?!"},
        {id: 3, message: "Уёбок"},
        {id: 4, message: "How are you?!"},
        {id: 5, message: "How are you?!"}
    ],
    newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: text}],
                newMessageText: ''
            }

        case
        UPDATE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.updateText
            }
        default:
            return state;
    }
}

export const addMessageCreator = () => {
    return (
        {type: ADD_MESSAGE}
    )
}

export const updateMessageTextCreator = (text) => {
    return (
        {type: UPDATE_MESSAGE_TEXT, updateText: text}
    )
}

export default dialogReducer