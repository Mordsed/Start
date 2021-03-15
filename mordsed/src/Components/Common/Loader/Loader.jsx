import React from "react";
import preloader from "../../../assets/images/loader.gif"
import s from "./Loader.module.css"

let Preloader = () => {
    return <div  >
        <img alt={"Preloader"} className={s.preloader} src={preloader} />
    </div>
}

export default Preloader