import React from 'react';

import {Header} from "./components";
import {Home, Cart} from "./components/pages/";
import {Route} from "react-router-dom";

export default function App() {
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
    )
}

//вариант получения данных через fetch
// React.useEffect(() => {
//     fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
//         setPizzas(json.pizzas)
//     })
// }, []);