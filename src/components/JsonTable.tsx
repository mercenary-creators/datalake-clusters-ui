/*
 * Copyright (c) 2019, Mercenary Creators Company. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {Component, CSSProperties} from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import './JsonTable.css';

interface IJsonTableProps {
    data: any[];
}

const evenRowStyle = {
    backgroundColor: "White"
};

const jsonRowStyle = {
    backgroundColor: "LightGray"
};

export class JsonTable extends Component<IJsonTableProps> {

    even(i: number): CSSProperties {
        return ((i % 2) == 1) ? jsonRowStyle : evenRowStyle;
    }

    public render() {
        const {data} = this.props;
        return <Table>
            <TableHead>
                <TableRow>{Object.keys(data[0]).map((key, i) => <TableCell className={"TableHeadStyle"} key={i}>{key}</TableCell>)}</TableRow>
            </TableHead>
            <TableBody>
                {data.map((row: any, i) => <TableRow style={this.even(i)} key={i}>{Object.values(row).map((c: any, j) => <TableCell key={j}>{c.toString()}</TableCell>)}</TableRow>)}
            </TableBody>
        </Table>
    };
}