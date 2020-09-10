import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import AdminLandingPage from '../Admin/pages/AdminLandingPage/AdminLandingPage';
import HomeMobile from '../HomeMobile/HomeMobile';
import InfoPage from '../InfoPage/InfoPage';
import EmotionalHome from '../EmotionalHome/EmotionalHome';
import ViewSectionsPage from '../Admin/pages/ViewSectionsPage/ViewSectionsPage';
import AddNewSectionPage from '../Admin/pages/AddNewSectionPage/AddNewSectionPage.js';
import PreviewSectionPage from "../Admin/pages/PreviewSectionPage/PreviewSectionPage";
import EditSectionPage from '../Admin/pages/EditSectionPage/EditSectionPage';
import ViewRealmsPage from '../Admin/pages/ViewRealmsPage/ViewRealmsPage';
import AddNewRealmPage from '../Admin/pages/AddNewRealmPage/AddNewRealmPage';
import ViewClientsPage from '../Admin/pages/ViewClientsPage/ViewClientsPage';
import AddNewClientPage from '../Admin/pages/AddNewClientPage/AddNewClientPage';
import EditClientPage from '../Admin/pages/EditClientPage/EditClientPage';
import AddSectionsToNewRealm from '../Admin/pages/AddSectionsToNewRealmPage/AddSectionsToNewRealmPage';
import OrganizeSections from "../Admin/pages/OrganizeNewRealmSectionsPage/OrganizeNewRealmSectionsPage";
import Section from '../Section/Section';
import EmotionalFormIntro from '../EmotionalFormIntro/EmotionalFormIntro';
import EmotionalForm from '../EmotionalForm/EmotionalForm';
import EmotionalFormFinished from '../EmotionalFormFinished/EmotionalFormFinished';
import EmotionalSec1 from '../EmotionalSec1/EmotionalSec1';
import EmotionalSec2 from '../EmotionalSec2/EmotionalSec2';
import EmotionalSec3 from '../EmotionalSec3/EmotionalSec3';
import RealmHome from '../RealmHome/RealmHome';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          {this.props.user.id ? <Nav /> : <span />}
          {/* <Nav /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage} />
            {/* ROUTES BELOW ARE UNPROTECTED FOR TESTING PURPOSES ONLY */}
            <Route exact path="/add-section" component={AddNewSectionPage} />
            <Route exact path="/add-realm" component={AddNewRealmPage} />
            <Route
              exact
              path="/add-sections-to-realm"
              component={AddSectionsToNewRealm}
            />
            <Route exact path="/admin-landing" component={AdminLandingPage} />
            <Route
              exact
              path="/organize-realm-sections"
              component={OrganizeSections}
            />
            <Route exact path="/preview/:id" component={PreviewSectionPage} />
            <Route exact path="/edit-section" component={EditSectionPage} />
            <Route exact path="/view-realms" component={ViewRealmsPage} />
            <Route exact path="/view-sections" component={ViewSectionsPage} />
            <Route exact path="/add-client" component={AddNewClientPage} />
            <Route exact path="/view-clients" component={ViewClientsPage} />
            <Route exact path="/edit-client" component={EditClientPage} />

            <Route exact path="/realm-home" component={RealmHome} />
            {/* eventually the paths to sections will be like this
             <ProtectedRoute exact path="/realm/:realm/section/:section" component={Section} /> */}
            <Route exact path="/section/:section" component={Section} />
            {/* <ProtectedRoute exact path="/realm/:realm/section/:section" component={Section} /> */}

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
            <ProtectedRoute
              exact
              path="/EmotionalSec1"
              component={EmotionalSec1}
            />
            <ProtectedRoute
              exact
              path="/EmotionalSec2"
              component={EmotionalSec2}
            />
            <ProtectedRoute
              exact
              path="/EmotionalSec3"
              component={EmotionalSec3}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          {/* {this.props.user.id ? <Footer /> : <span />} We aren't rendering the footer anyway*/}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
