import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./containers/Home";
import Edit from "./containers/Edit";

export default function Routes() {
    const history = useHistory();
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/edit">
                <Edit history={history}/>
            </Route>
        </Switch>
    );
}