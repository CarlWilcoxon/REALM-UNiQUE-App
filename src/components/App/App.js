import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

import AboutPage from '../AboutPage/AboutPage';
import StatisticsPage from '../Admin/pages/StatisticsPage/StatisticsPage';
import HomeMobile from '../HomeMobile/HomeMobile';
import ViewSectionsPage from '../Admin/pages/ViewSectionsPage/ViewSectionsPage';
import AddNewSectionPage from '../Admin/pages/AddNewSectionPage/AddNewSectionPage.js';
import PreviewSectionPage from '../Admin/pages/PreviewSectionPage/PreviewSectionPage';
import PreviewRealmPage from '../Admin/pages/PreviewRealmPage/PreviewRealmPage';
import ViewRealmsPage from '../Admin/pages/ViewRealmsPage/ViewRealmsPage';
import AddNewRealmPage from '../Admin/pages/AddNewRealmPage/AddNewRealmPage';
// Client management features were scraped due to lack of time.
// import ViewClientsPage from '../Admin/pages/ViewClientsPage/ViewClientsPage';
// import AddNewClientPage from '../Admin/pages/AddNewClientPage/AddNewClientPage';
// import EditClientPage from '../Admin/pages/EditClientPage/EditClientPage';
import AddSectionsToNewRealm from '../Admin/pages/AddSectionsToNewRealmPage/AddSectionsToNewRealmPage';
import Section from '../Section/Section';
import RealmFormIntro from '../RealmFormIntro/RealmFormIntro';
import RealmForm from '../RealmForm/RealmForm';
import RealmFormFinished from '../RealmFormFinished/RealmFormFinished';
import RealmFeedback from '../RealmFeedback/RealmFeedback';
import RealmHome from '../RealmHome/RealmHome';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <div>
          {this.props.user.id ? <Nav /> : <span />}
          {/* <Nav /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* <Redirect
              exact
              from="home"
              to={
                this.props.user.id && this.props.user.admin
                  ? '/admin-landing'
                  : '/home'
              }
            /> */}
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route exact path="/about" component={AboutPage} />
            {/* AdminRoutes test to see if the user is a admin before displaying the page */}
            <AdminRoute
              exact
              path="/add-section"
              component={AddNewSectionPage}
            />
            <AdminRoute exact path="/add-realm" component={AddNewRealmPage} />
            <AdminRoute
              exact
              path="/add-sections-to-realm"
              component={AddSectionsToNewRealm}
            />
            <AdminRoute exact path="/statistics" component={StatisticsPage} />
            <AdminRoute
              exact
              path="/preview/realm/:id"
              component={PreviewRealmPage}
            />
            <AdminRoute
              exact
              path="/preview/section/:id"
              component={PreviewSectionPage}
            />
            <AdminRoute exact path="/view-realms" component={ViewRealmsPage} />
            <AdminRoute
              exact
              path="/view-sections"
              component={ViewSectionsPage}
            />
            {/* <AdminRoute exact path="/add-client" component={AddNewClientPage} />
                <AdminRoute exact path="/view-clients" component={ViewClientsPage} />
                <AdminRoute exact path="/edit-client" component={EditClientPage} /> */}

            <ProtectedRoute
              exact
              path="/realm-home/:realm"
              component={RealmHome}
            />
            <ProtectedRoute
              exact
              path="/section/:realm/:section"
              component={Section}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute exact path="/home" component={HomeMobile} />

            <ProtectedRoute
              exact
              path="/realm-feedback/:realm"
              component={RealmFeedback}
            />

            <ProtectedRoute
              exact
              path="/realm-form-intro/:realm/:section"
              component={RealmFormIntro}
            />
            <ProtectedRoute
              exact
              path="/realm-form/:realm/:section"
              component={RealmForm}
            />
            <ProtectedRoute
              exact
              path="/realm-form-finished/:realm/:section"
              component={RealmFormFinished}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(App);
