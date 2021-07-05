import React from 'react';
import {Header} from "./components";
import {Home, Cart} from "./components/pages/";
import {Route} from "react-router-dom"
import axios from "axios";

export default function App() {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        });
    }, []);

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path="/" render={() => <Home items={pizzas}/>} exact/>
                    <Route path="/cart" component={Cart}/>
                </div>
            </div>
        </div>
    );
}

//вариант получения данных через fetch
// React.useEffect(() => {
//     fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
//         setPizzas(json.pizzas)
//     })
// }, []);