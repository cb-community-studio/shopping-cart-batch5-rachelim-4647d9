import React from "react";
import { Panel } from "primereact/panel";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import { Card } from "primereact/card";
import { Menubar } from 'primereact/menubar';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MyHomePage from "./MyRouting1"
import MyAboutPage from "./MyRouting2"
import MyContactPageCss from "./MyRouting3"
import MyLogin from "./MyLogin"
import MyReg from "./MyReg"
import MyForget from "./MyForgetPass"


const MyMain = () => {

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-home',
            url: "/home"
        },
        {
            label: 'About',
            icon: 'pi pi-fw pi-user',
            url: "/about"
        },
        {
            label: 'Contact',
            icon: 'pi pi-fw pi-phone',
            url: "/contact"
        },
        {
            label: 'Login',
            icon: 'pi pi-fw pi-lock-open',
            url: "/login"
        },
        {
            label: 'Register',
            icon: 'pi pi-fw pi-pencil',
            url: "/reg"
        },
        {
            label: 'Forget Password',
            icon: 'pi pi-fw pi-key',
            url: "/forgetPassword"
        }
    ];

    return (
        <BrowserRouter>
            <div className="p-3">
                <div className="card">
                    <Menubar model={items} />
                </div>
                <Route exact path="/home" component={MyHomePage} />
                <Route path="/about" component={MyAboutPage} />
                <Route path="/contact" component={MyContactPageCss} />
                <Route path="/login" component={MyLogin} />
                <Route path="/reg" component={MyReg} />
                <Route path="/forgetPassword" component={MyForget} />
                <div className="layout-footer">
                    <img src={"assets/logo/cb-logo.svg"} alt="Logo" height="20" className="mr-2" />
                    <small>
                        by
                        <span className="font-bold ml-1">CodeBridge</span>
                    </small>
                </div>
            </div>

        </BrowserRouter>
    )

};




export default MyMain;