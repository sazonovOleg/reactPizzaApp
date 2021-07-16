// export default class Categories extends React.Component {
//     state ={
//         activeItem: null
//     }
//
//     onSelectItem = (index) => {
//         this.setState({
//             activeItem: index
//         });
//     };
//
//     render() {
//         const {items} = this.props;
//         return(
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((name, index) =>
//                         <li className={this.state.activeItem === index ? 'active' : ''}
//                             key={`${name}_${index}`}
//                             onClick={() => this.onSelectItem(index)}>
//                             {name}
//                         </li>)}
//                 </ul>
//             </div>
//         )
//     }
// }