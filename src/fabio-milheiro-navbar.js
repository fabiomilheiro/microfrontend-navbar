import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Navbar } from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Navbar,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return <div>Could not render the navbar.</div>;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
