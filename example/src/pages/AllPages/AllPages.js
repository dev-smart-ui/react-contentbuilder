import React from 'react';

import {TableCell} from "../../components/tableCell/TableCell";
import "./AllPages.css";

const AllPages = ({allPagesData}) => {

    return (
        <div className="all-pages-box">
            <table>
                <thead>
                <tr>
                    <th>Page name</th>
                    <th>View page</th>
                    <th>Source page</th>
                </tr>
                </thead>
                <tbody>
                {allPagesData.map((page, index) => {
                        const url = `/page-example/${page.page}`;
                        const pageValue = page.page.split("page=")[1];
                        return (
                            <React.Fragment key={index}>
                                <TableCell link={url} namePage={pageValue}/>
                            </React.Fragment>
                        );
                    }
                )}
                </tbody>
            </table>
        </div>
    );
};

export default AllPages;
