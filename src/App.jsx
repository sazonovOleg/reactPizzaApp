import React from 'react';
import {Header} from "./components";
import {Home, Cart} from "./components/pages/";
import { Route } from "react-router-dom"

export default class App extends React.Component{
    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <div className="content">
                        <Route path="/" component={Home} exact/>
                        <Route path="/cart" component={Cart}/>
                    </div>
                </div>
            </div>
        );
    }
}

