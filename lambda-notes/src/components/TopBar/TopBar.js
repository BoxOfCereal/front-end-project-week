import React from "react";
import { Route } from "react-router-dom";

//https://reacttraining.com/react-router/web/example/sidebar
const TopBar = props => {
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
      topbar: () => <h2>{props.note.title}</h2>
    },
    {
      path: "/note/:id/edit",
      topbar: () => <h2>Edit Note:</h2>
    }
  ];

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
