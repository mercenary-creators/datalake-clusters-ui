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

import React from 'react';
import {createStyles, Theme, WithStyles, withStyles} from '@material-ui/core/styles';
import {routes} from '../routes';
import {Route, Switch} from 'react-router';
import {AppBar, Button, Tabs} from '@material-ui/core';
import {LinkTab} from '../components/LinkTab';
import Toolbar from '@material-ui/core/Toolbar';

const styles = (theme: Theme) => createStyles({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

interface State {
    selected: string;
}

interface Properties {
    main?: boolean
}

interface StyleProperties extends WithStyles<typeof styles> {
}

const Index = withStyles(styles)(
    class extends React.Component<Properties & StyleProperties, State> {

        constructor(props: Properties & StyleProperties) {
            super(props);
            const currentRoute = routes.find((r) => {
                return r.path === document.location.pathname
            });
            let defaultSelection = routes[0].label;
            if (currentRoute) {
                defaultSelection = currentRoute.label;
            }
            this.state = {
                selected: defaultSelection
            };
        }

        private onTabChange = (event: React.ChangeEvent<{}>, value: any) => {
            this.setState({selected: value})
        };

        render() {
            const {selected} = this.state;
            return <div>
                <AppBar position='static'>
                    <Toolbar>
                        <Button color="inherit">9.3.5-SNAPSHOT</Button>
                        <Tabs variant='fullWidth' value={selected} onChange={this.onTabChange}>
                            {routes.map((r, i) => <LinkTab key={i} label={r.label} value={r.label} to={r.path}/>)}
                        </Tabs>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route {...routes[0]} path='/' exact={true}/>
                    {routes.map((r, i) => <Route key={i} {...r}/>)}
                </Switch>
            </div>;
        }
    }
);

export default Index;