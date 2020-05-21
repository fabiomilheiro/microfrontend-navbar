import "./set-public-path";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const getNavbarElement = () => {
  var navbar = document.getElementsByClassName("navbar");

  if (navbar.length == 1) {
    return navbar[0];
  }

  return undefined;
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter: getNavbarElement,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
