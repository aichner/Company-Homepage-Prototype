//> React
// Contains all the functionality necessary to define React components
import React from 'react';
// DOM bindings for React Router
import { Route, Switch } from 'react-router-dom';

//> Components
/**
 * HomePage: The start page
 * BrandingPage: A page telling how to use our logos and branding
 * BlogPage: Our blog (based on Google Blogger)
 * BlogListPage: An overview of all our blogs (based on Google Blogger)
 * BlogListPageLabel: An overview of all blogs sorted by a label (based on Google Blogger)
 * PrintingPage: A page promoting the 3D printing services
 */
import {
  HomePage,
  BrandingPage,
  BlogPage,
  BlogListPage,
  BlogListPageLabel,
  PrintingPage,
  LocationPage,
} from './components/pages';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route
        exact
        path='/'
        component={(props) => <HomePage globalStore={this.props} {...props} />}
        />
        <Route
        exact
        path='/branding'
        component={(props) => <BrandingPage globalStore={this.props} {...props} />}
        />
        <Route
        exact
        path='/printing'
        component={(props) => <PrintingPage globalStore={this.props} {...props} />}
        />
        <Route
        exact
        path='/location'
        component={(props) => <LocationPage globalStore={this.props} {...props} />}
        />
        <Route
        exact
        path='/news'
        component={(props) => <BlogListPage globalStore={this.props} {...props} />}
        />
        <Route
        exact
        path='/news/:label'
        component={(props) => <BlogListPageLabel globalStore={this.props} {...props} />}
        />
        <Route
        exact
        path='/news/article/:id'
        component={(props) => <BlogPage globalStore={this.props} {...props} />}
        />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;

/** 
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Werbeagentur Christian Aichner
 */
