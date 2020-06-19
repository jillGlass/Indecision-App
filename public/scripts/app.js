"use strict";

console.log("app.js is running");

var app = {
    title: "Indecision App",
    subTitle: "Put your life in the hands of a computer",
    options: []
};

var appRoot = document.getElementById("app");

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    // option = where the event took place, ie the form where text was entered
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderJSX();
    }
};
var removeAll = function removeAll() {
    app.options = [];
    renderJSX();
};

var renderJSX = function renderJSX() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            "p",
            null,
            app.subTitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            "button",
            null,
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: removeAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (opt) {
                return React.createElement(
                    "li",
                    { key: opt },
                    opt
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderJSX();
