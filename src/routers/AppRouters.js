import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Registro from "../components/Registro"
import App from "../containers/App"
import Peliculas  from '../components/Peliculas';


export default class AppRouters extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/registro" component={Registro} />
                    <Route exact path="/peliculas" component={Peliculas} />
                    <Route exact path="/"   component={App} />
                </Switch>
            </Router>
        )}
}
