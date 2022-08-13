import logo from './logo.svg';
import './App.css';
import Fireauth from './Fireauth'
import Firestorage from './Firestorage'
import Buy from './Buy'
import GetData from './GetData'
import Firebase1 from './Firebase1'
import Firelogin from './Firelogin'
import Pay from './Pay'
import Favourites from './Favourites';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Firebase1}/>
          <Route exact path="/pay" component={Pay}/>
          <Route exact path="/" component={Firebase1}/>
          <Route exact path="/buy" component={Buy}/>
          <Route exact path="/url" component={Firestorage}/>
          <Route exact path="/login" component={Firelogin}/>
          <Route exact path="/favourites" component={Favourites}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
