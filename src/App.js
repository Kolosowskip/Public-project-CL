import React from 'react';
import {HashRouter, Route} from "react-router-dom";

import {Home} from "./components/main_page/Home";
import {RegisterPage} from "./components/authorization/RegisterPage";
import {LoginPage} from "./components/authorization/LoginPage";
import {LogoutPage} from "./components/authorization/LogoutPage";
import {AuthProvider} from "./providers/AuthProvider";
import {GivePage} from "./components/oddaj/GivePage";


export const App = () => {
    return (
        <AuthProvider>
            <div className="App">
                <HashRouter>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/rejestracja' component={RegisterPage}/>
                    <Route exact path='/logowanie' component={LoginPage}/>
                    <Route exact path='/wylogowano' component={LogoutPage}/>
                    <Route exact path='/oddaj-rzeczy' component={GivePage}/>
                </HashRouter>
            </div>
        </AuthProvider>
    );
}
