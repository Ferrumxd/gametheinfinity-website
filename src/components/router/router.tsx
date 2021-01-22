import * as React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { NavBar } from '../navbar';
import { ServerContent } from '../servercontent';
import { Login } from '../login'

export const Router = () => {
    return ( 
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/test">
                    <NavBar />
                    <br/>
                    <ServerContent />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}