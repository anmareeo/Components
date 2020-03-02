import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

export default function MainRouter(){

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/signup">
                        <SignUp initialMessage="Start Up Message Function"></SignUp>
                    </Route>
                    <Route path="/">
                        <Login initialMessage="Start Up Message Class"></Login>
                    </Route>
                 </Switch>
            </Router>
        </div>

    )
}
