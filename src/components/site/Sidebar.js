import React from 'react'

import{
    Route,
    Link,
    Switch
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import TimePiecesApp from '../../components/apps/timer-apps/TimePiecesApp'

import NytApp from "../../components/apps/nyt-app/NytApp"

const Sidebar = () => ( 
    // return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/functionalcomponent">Functional Component</Link></li>
                    <li><Link to="/resources">Resources</Link></li>
                    <li><Link to="/timer">Timers</Link></li>
                    <li><Link to="/nytapp">New York Times</Link></li>
                    
                    
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/home"><Home /></Route>
                    <Route exact path="/resources"><Resources /></Route>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                    <Route exact path="/timer"><TimePiecesApp /></Route>

                    <Route exact path="/nytapp"><NytApp /></Route>
                </Switch>
            </div>      
        </div>
    );


export default Sidebar;