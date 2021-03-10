import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

let store = {
    _state:
        {
            profilePage: {
                posts: [
                    {id: 1, message: 'Hello, my name is Dima!', likeCount: "5"},
                    {id: 2, message: 'I from in Vologda, Russia', likeCount: "13"},
                    {id: 3, message: 'Hello, my name is Dima!', likeCount: "2"},
                    {id: 4, message: 'I from in Vologda, Russia', likeCount: "9"},
                    {id: 5, message: 'Hello, my name is Dima!', likeCount: "1"},
                    {id: 6, message: 'I from in Vologda, Russia', likeCount: "3"}
                ],
                newPostText: ''
            },
            dialogsPage: {
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

            },
            sidebarPage: {
                sidebar: [
                    {
                        id: 1,
                        name: "Dima",
                        img: "https://инквизиция-в.рф/pluginfile.php/2548/course/overviewfiles/react%404x.png"
                    },
                    {
                        id: 2,
                        name: "Vanya",
                        img: "https://www.nastol.com.ua/download.php?img=201407/1920x1200/nastol.com.ua-105611.jpg"
                    },
                    {id: 3, name: "Kaban", img: "https://www.ejin.ru/wp-content/uploads/2019/05/kanada.jpg"}
                ]
            }
        },
    _callSubscriber(_state) {

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage,action)
        this._callSubscriber(this._state)
    }
}




export default store;




