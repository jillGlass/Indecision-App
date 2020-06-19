"use strict";

var app = {
    title: "Visibility Toggle",
    subTitle: "These are some details you can now see"
};

var visibility = true;

var appRoot = document.getElementById("app");

var toggleVis = function toggleVis() {
    visibility = !visibility;
    renderVisibilityApp();
};

var renderVisibilityApp = function renderVisibilityApp() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "button",
            { onClick: toggleVis },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
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
