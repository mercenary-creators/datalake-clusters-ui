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

import {IOperation} from './pages/DemoPage';

const queryOperation = (path: string, label: string): IOperation => {
    return {
        path,
        label
    }
};

export const clusterOperations: IOperation[] = [
    queryOperation('/open/clusters/todos', 'Todos'),
    queryOperation('/open/clusters/roles', 'Roles')
];

export const datalakeOperations: IOperation[] = [
    queryOperation('/open/datalake/posts', 'Posts'),
    queryOperation('/open/datalake/users', 'Users')
];

export const servicesOperations: IOperation[] = [
    queryOperation('/open/services/node', 'Nodes'),
    queryOperation('/open/services/list', 'Servers')
];