import React from 'react';
import {Header, Content} from "./components";

export default class App extends React.Component{
    render() {
        return (
            <div className="App">
                <div className="wrapper">
                    <Header/>
                    <Content/>
                </div>
            </div>
        );
    }
}

