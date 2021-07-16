//App.jsx написанный на классах

// import React from 'react';
// import axios from "axios";
// import {connect} from "react-redux";
//
// import {Header} from "./components";
// import {Home, Cart} from "./components/pages/";
// import {Route} from "react-router-dom";
// import {setPizzas as setPizzasAction} from "./redux/actions/pizzas";
//
// class App extends React.Component {
//
//     componentDidMount() {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//             this.props.setPizzas(data.pizzas)
//         });
//     };
//
//     render() {
//         console.log(this.props)
//         return (
//             <div className="App">
//                 <div className="wrapper">
//                     <Header/>
//                     <div className="content">
//                         <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
//                         <Route path="/cart" component={Cart}/>
//                     </div>
//                 </div>
//             </div>
//         )
//     };
// };
//
// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items,
//     };
// };
//
// const mapDispatchToProps = dispatch => {
//     return {
//         setPizzas: (items) => dispatch(setPizzasAction(items)),
//     };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App)