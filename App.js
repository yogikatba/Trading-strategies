import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Bear_spread_using_call from './Bear_spread_using_call';
import Bear_spread_using_put from './Bear_spread_using_put';
import Bull_spread_using_call from './Bull_spread_using_call';
import Bull_spread_using_put from './Bull_spread_using_put';
import Butterfly_spread from './Butterfly_spread';
import Navbar from './Navbar'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route path='/bear_spread_call' component={Bear_spread_using_call} />
                    <Route path='/bear_spread_put' component={Bear_spread_using_put} />
                    <Route path='/bull_spread_call' component={Bull_spread_using_call} />
                    <Route path='/bull_spread_put' component={Bull_spread_using_put} />
                    <Route path='/butterfly_spread' component={Butterfly_spread} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App