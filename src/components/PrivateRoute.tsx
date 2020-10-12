import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({
  children,
  auth,
  path,
  ...rest
}: {
  children: any;
  auth: boolean;
  path?: string;
}) {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      path={path}
      render={(props) =>
        auth === true ? (
          children
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}
