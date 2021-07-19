import React from 'react';
import axios from "axios";
import {useDispatch} from "react-redux";

import {Header} from "./components";
import {Home, Cart} from "./components/pages/";
import {Route} from "react-router-dom";
import {setPizzas} from "./redux/actions/pizzas";

export default function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('http://localhost:3001/db.json').then(({data}) => {
            dispatch(setPizzas(data.pizzas))
        });
    })

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