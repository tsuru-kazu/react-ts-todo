import React, {ReactFragment} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import firebase from "firebase";

//screens
import Home from './screens/Home';
import Profile from './screens/Profile';
import SignInOrUp from './screens/SignInOrUp';
import SignUp from './screens/SignUp';

import Auth from './Auth';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/signin" component={SignInOrUp}/>
                <Route exact path="/signup" component={SignUp} />
                <Auth>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/profile" component={Profile} />
                        <Route render={() => <p>not found.</p>} />
                    </Switch>
                </Auth>
            </Switch>
        </Router>
    )
}

export default App;