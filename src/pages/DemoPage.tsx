/*
 * Copyright (c) 2020, Mercenary Creators Company. All rights reserved.
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

import React, {Component} from 'react';
import axios, {AxiosBasicCredentials, AxiosRequestConfig, Method} from 'axios';
import jp from 'jsonpath';
import {Button} from '@material-ui/core';
import {JsonTable} from '../components/JsonTable';

interface IDemoPageProps {
    title?: string;
    operations: IOperation[];
}

export interface IOperation {
    path: string;
    label: string;
    method?: Method;
    body?: any;
    auth?: AxiosBasicCredentials;
    dataJsonPath?: string;
}

interface IDemoPageState {
    data?: any;
}

export class DemoPage extends Component<IDemoPageProps, IDemoPageState> {
    public state: IDemoPageState = {};
    private getData = async (operation: IOperation) => {
        const config: AxiosRequestConfig = {
            url: operation.path
        };
        config.method = operation.method || 'get';
        if (operation.body) config.data = operation.body;
        if (operation.auth) config.auth = operation.auth;
        let tableData: any;
        try {
            const response = await axios.request(config);
            tableData = operation.dataJsonPath ? jp.query(response.data, operation.dataJsonPath) : response.data;
        } catch (e) {
            console.error(`Error retrieving data using config ${JSON.stringify(config)}`);
        }
        if (Array.isArray(tableData) && tableData.length >= 0) {
            this.setState({
                data: tableData
            })
        } else {
            console.warn(`Unexpected data format for '${operation.label}', could not resolve array from JSON path '${operation.dataJsonPath}' `);
        }
    };

    public render() {
        const {title, operations} = this.props;
        const {data} = this.state;
        return <div>
            {title && <h2>{title}</h2>}
            {data && <JsonTable data={data}/>}
            {operations.map((op) => <Button key={op.label} onClick={() => this.getData(op)}>{op.label}</Button>)}
        </div>
    }
}