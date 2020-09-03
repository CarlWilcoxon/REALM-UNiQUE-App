import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import HomeMobile from '../HomeMobile/HomeMobile';
import InfoPage from '../InfoPage/InfoPage';
import EmotionalHome from '../EmotionalHome/EmotionalHome';
import AddNewSectionPage from "../Admin/pages/AddNewSectionPage/AddNewSectionPage.js";
import AddNewRealmPage from "../Admin/pages/AddNewRealmPage/AddNewRealmPage";
import AddSectionsToNewRealm from "../Admin/pages/AddSectionsToNewRealmPage/AddSectionsToNewRealmPage";
import EmotionalFormIntro from '../EmotionalFormIntro/EmotionalFormIntro'
import EmotionalForm from '../EmotionalForm/EmotionalForm'
import EmotionalFormFinished from '../EmotionalFormFinished/EmotionalFormFinished'
import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage} />
            <Route
              exact
              path="/add-section"
              component={AddNewSectionPage}
            />
            <Route
              exact
              path="/add-realm"
              component={AddNewRealmPage}
            />
            <Route
              exact
              path="/add-sections-to-realm"
              component={AddSectionsToNewRealm}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/home" component={HomeMobile} />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute exact path="/info" component={InfoPage} />
            <ProtectedRoute
              exact
              path="/EmotionalHome"
              component={EmotionalHome}
            />
            <ProtectedRoute
              exact
              path="/EmotionalFormIntro"
              component={EmotionalFormIntro}
            />
            <ProtectedRoute
              exact
              path="/EmotionalForm"
              component={EmotionalForm}
            />
             <ProtectedRoute
              exact
              path="/EmotionalFormFinished"
              component={EmotionalFormFinished}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );}
}

export default connect()(App);
