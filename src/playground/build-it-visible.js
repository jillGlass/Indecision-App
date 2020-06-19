const app = {
    title: "Visibility Toggle",
    subTitle: "These are some details you can now see"
  };

let visibility = true;

const appRoot = document.getElementById("app");

const toggleVis  =() => {
    visibility = !visibility;
    renderVisibilityApp()

}

const renderVisibilityApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVis}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div>
                    <p>{app.subTitle}</p>
                    </div>
            )}
            
            
        </div>
    );
    
    ReactDOM.render(template, appRoot);
}
renderVisibilityApp();