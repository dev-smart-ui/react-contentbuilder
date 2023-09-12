import React from 'react';
import {Link} from "react-router-dom";

export const TableCell = ({ link, namePage}) => {
    const url = `/page-example/${link}`;
    const urlSource = `/source/${link}`;
    return (
        <tr>
            <td>{namePage}</td>
            <td><Link to={url}>View page</Link></td>
            <td><Link to={urlSource}>View source</Link></td>
        </tr>
    );
};
