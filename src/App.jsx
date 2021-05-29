import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";

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

