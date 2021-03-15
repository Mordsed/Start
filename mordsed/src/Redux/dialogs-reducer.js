const ADD_MESSAGE = "ADD-MESSAGE";

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
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: text}]
            }
        default:
            return state;
    }
}

export const addMessageCreator = (newMessageBody) => {
    return (
        {type: ADD_MESSAGE, newMessageBody}
    )
}

export default dialogReducer