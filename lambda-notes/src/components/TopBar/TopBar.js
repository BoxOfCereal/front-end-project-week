import React from "react";
import { Route } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    topbar: () => <h2>Your Notes:</h2>
  },
  {
    path: "/create",
    topbar: () => <h2>Create New Note:</h2>
  },
  {
    path: "/note/:id",
    topbar: () => <h2>Note Title</h2>
  },
  {
    path: "/note/:id/edit",
    topbar: () => <h2>Edit Note:</h2>
  }
];

//https://reacttraining.com/react-router/web/example/sidebar
const TopBar = props => {
  return (
    <div>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.topbar}
        />
      ))}
    </div>
  );
};

export default TopBar;
