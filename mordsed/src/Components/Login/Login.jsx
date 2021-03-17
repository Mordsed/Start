import React from "react";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validator";
import {Input} from "../Common/FormsControl/FormsControl";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../Common/FormsControl/FormsControl.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Input} name={"email"} placeholder={"Login"}
                        validate={[required]}/></div>
            <div><Field component={Input} name={"password"} placeholder={"Password"} type={"password"}
                        validate={[required]}/></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/> Remember me
            </div>
            {props.error &&
            <div className={s.formSummaryError}>{props.error}</div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)



const Login = (props) => {
    if (props.isAuth) return <Redirect to={"/profile"}/>
    const onSubmit = (formData) => {
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>)
}
const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps,{login})(Login)