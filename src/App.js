import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HomeScreen from './HomeScreen';
import ChatRoomScreen from './ChatRoomScreen';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/home'>
                    <HomeScreen/>
                </Route>
                <Route exact path='/:roomId'>
                    <ChatRoomScreen/>
                </Route>
            </Switch>
        </Router>
    )
};


export default App;
