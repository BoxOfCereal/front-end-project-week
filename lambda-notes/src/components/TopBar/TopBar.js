import React from "react";
import { Route, Link } from "react-router-dom";

//https://reacttraining.com/react-router/web/example/sidebar
const TopBar = props => {
  const routes = [
    {
      path: "/",
      exact: true,
      TopBarContent: () => <h2>Your Notes:</h2>
    },
    {
      path: "/create",
      TopBarContent: () => <h2>Create New Note:</h2>
    },
    {
      path: "/note/:id",
      exact: true,
      TopBarContent: () => (
        <div>
          <h2>{props.note.title}</h2>
          {/*  for what ever reason props.match.id is undefined */}
          <Link to={`/note/${props._id}/edit`}>edit</Link>
          <Link to={`/note/delete`}>delete</Link>
        </div>
      )
    },
    {
      path: "/note/:id/edit",
      TopBarContent: () => <h2>Edit Note:</h2>
    }
  ];

  return (
    <div>
      {routes.map((route, index) => (
        <Route
          {...props}
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.TopBarContent}
        />
      ))}
    </div>
  );
};

export default TopBar;
