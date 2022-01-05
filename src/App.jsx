import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {
  Home, 
  Movies,
  SingleMovie,
  SingleShow,
  TvShow,
  SingleTopRated,
  TopRated,
  UpComing,
  SingleUpComing,
  SingleActor
} from './pages'
import Error from './components/ErrorPage/Error'
import Search from './components/Search/Search'

import './assets/styles/main.scss'
import Header from './containers/Header'

function App() {
  return (
    <>
    <Router>
      <Header />
    <Switch>
    <Route exact path='/' component={Home} /> 
    <Route  path='/movies' component={Movies} /> 
    <Route  path='/latestMovies' component={TopRated} /> 
    <Route  path='/tvshows' component={TvShow} /> 
    <Route  path='/upcoming' component={UpComing} /> 
    <Route  path='/upcoming/:id' component={SingleUpComing} /> 
    <Route  path='/movie/:id' component={SingleMovie} />
    <Route  path='/movie/actor/:id' component={SingleActor} />
    <Route  path='/tvshow/:id' component={SingleShow} /> 
    <Route  path='/latestMovie/:id' component={SingleTopRated} /> 
    <Route  path="/search/:searchQuery" component={Search} />
    <Route  path='*' component={Error} />
    </Switch>
    </Router>
    </>
    );
  }
  
  export default App;
  