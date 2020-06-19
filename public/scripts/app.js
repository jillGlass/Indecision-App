"use strict";

var app = {
  title: "Visibility Toggle",
  subTitle: "Toggle between light and dark mode"
};

var white = '#FFFFFF';
var black = '#161617';
var grey = '#F8F8F9';

var themeLight = {
  background: grey,
  copy: black
};
var themeDark = {
  background: black,
  copy: white
};

var theme = function theme(mode) {
  return mode === 'dark' ? themeDark : themeLight;
};

var visibilityWhite = true;

var appRoot = document.getElementById("app");

var toggleVis = function toggleVis() {
  visibility = !visibility;
  renderVisibilityApp();
};

var renderVisibilityApp = function renderVisibilityApp() {
  var template = React.createElement(
    "div",
    { style: { theme: theme } },
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "button",
      { onClick: toggleVis },
      visibilityWhite ? "Dark Mode" : "Light Mode"
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        app.subTitle
      )
    )
  );

  ReactDOM.render(template, appRoot);
};
renderVisibilityApp();
