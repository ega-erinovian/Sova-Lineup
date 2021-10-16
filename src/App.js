import "./App.css";
import LandingPage from "./components/Landing-Page/LandingPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VidList from "./components/Lineup-Page/VidList";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/vidlist/:id" exact component={VidList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
