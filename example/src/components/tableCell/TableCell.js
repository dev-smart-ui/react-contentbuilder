import React from 'react';
import {Link} from "react-router-dom";

export const TableCell = ({link, namePage}) => {
    return (
        <tr>
            <td>{namePage}</td>
            <td><Link to={link}>View page</Link></td>
            <td><Link to={link}>View source</Link></td>
        </tr>
    );
};
