import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/FlickPict">
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/all" />}
              />

              <Route
                path="/all"
                render={() => <Item searchTerm="all" />}
              />
              <Route path="/city" render={() => <Item searchTerm="city" />} />
              <Route path="/village" render={() => <Item searchTerm="village" />} />
              <Route path="/people" render={() => <Item searchTerm="people" />} />
              <Route path="/healthy" render={() => <Item searchTerm="healthy" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;