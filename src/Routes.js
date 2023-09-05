import React, {useEffect, useState} from "react";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import Home from "./containers/Home";
import Edit from "./containers/Edit";
import HeadInput from "./components/headInput/headInput";

export default function Routes() {
    const history = useHistory();
    const location = useLocation();
    const [queryPageParam, setQueryPageParam] = useState(null);

    useEffect(() => {
        const parsedQuery = location.search;
        setQueryPageParam(parsedQuery);
    }, [location]);

    return (
        <>
            <HeadInput/>
            <Switch>
                <Route exact path="/">
                    <Home queryPageParam={queryPageParam}/>
                </Route>
                <Route path="/edit">
                    <Edit queryPageParam={queryPageParam} history={history}/>
                </Route>
            </Switch>
        </>

    );
}