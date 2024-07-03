import { Component } from "react";

const App = () => {
  const texts = ["hello", "world"].map((item, index) => (
    <p key={index} children={item}></p>
  ));
  return <div children={texts}></div>;
};

export default App;

/*
import { Component } from "react";

const App = () => {
  //refactoring map 함수 사용
  // [].map((item, index) =><tag>)
  // const employees = [
  //   { name: "john", id: 1 },
  //   { name: "cindy", id: 2 },
  //   { name: "ruby", id: 3 },
  // ];
  // const elements = employees.map((item, index) => {
  //   return `<div>${item.id} - ${item.name}</div>`;
  // });
  const texts = ["hello", "world"].map((item, index) => (
    <p key={index}>{item}</p>
  ));
  return <div>{texts}</div>;

  
  // const texts = [<p key="1">hello</p>, <p key="2">world</p>];
  // return <div>{texts}</div>;
  
};
export default App;
*/
/*
import { Component } from "react";
import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";



const App = () => {
  return (
    <ul>
      <ClassComponent
        href="http://www.google.com"
        text="go to google"
      ></ClassComponent>
      <ArrowComponent href="http://www.x.com" text="go to X"></ArrowComponent>
    </ul>
  );
};

export default App;
*/
/*
const App = () => {
  return <h1>function Component</h1>;
};

export default App;
*/

/*
export default function App() {
  return <div>Hello Function!</div>;
}
*/

/*
import ClassComponent from "./ClassComponent";

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent
          href="http://www.google.com"
          text="go to google"
        ></ClassComponent>
        <ClassComponent href="http://www.x.com" text="go to x"></ClassComponent>
      </ul>
    );
  }
}
*/
