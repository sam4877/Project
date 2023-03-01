import React, {Component} from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import FormInput5 from './FormInput5';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => this.scrollBox=ref}/>
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨 밑으로
//         </button>
//       </div>
//     );
//   }
// }
   
const App = () => {
  return <FormInput5 />;
};

// function App() {
//   return <Counter />;
// }

// function App() {
//   return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
// }

export default App;
