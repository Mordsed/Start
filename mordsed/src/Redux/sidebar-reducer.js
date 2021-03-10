let initialState = {
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

const sidebarReducer = (state = initialState) => {
    return state;
}

export default sidebarReducer