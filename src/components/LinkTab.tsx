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

import {RouteComponentProps, withRouter} from 'react-router';
import {TabProps} from '@material-ui/core/Tab';
import {Tab} from '@material-ui/core';
import React from 'react';

interface ILinkTabProps extends RouteComponentProps, TabProps {
    to: string;
}

export const LinkTab = withRouter<ILinkTabProps>(({history, to, ...props}) => {
    delete props.staticContext;
    return <Tab component='a' onClick={event => {
        event.preventDefault();
        history.push(to)
    }}{...props}
    />;
});