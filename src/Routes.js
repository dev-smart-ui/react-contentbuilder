import React, {useEffect, useState} from "react";
import {Route, Switch, useHistory, useLocation} from "react-router-dom";
import ListPages from "./containers/ListPages";
import Edit from "./containers/Edit";
import Head from "./components/head/head";

export default function Routes() {
    const history = useHistory();
    const location = useLocation();
    const [queryPageParam, setQueryPageParam] = useState(null);

    useEffect(() => {
        const queryString = location.search
        const searchParams = new URLSearchParams(queryString);
        const parsedQuery = searchParams.get('page')

        setQueryPageParam(parsedQuery);
    }, [location]);

    return (
        <>
            <Head queryPageParam={queryPageParam}/>
            <Switch>
                <Route exact path="/list-pages">
                    <ListPages queryPageParam={queryPageParam}/>
                </Route>
                <Route path="/edit">
                    <Edit queryPageParam={queryPageParam} history={history}/>
                </Route>
            </Switch>
        </>

    );
}