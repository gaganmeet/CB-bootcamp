import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Project from "./components/Projects";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 bg-pattern">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero} />
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Project}></Route>
      </Switch>
    </div>
  );
}
export default App;
