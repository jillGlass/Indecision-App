console.log("app.js is running");

const app = {
  title: "Indecision App",
  subTitle: "Put your life in the hands of a computer",
  options: []
};

const appRoot = document.getElementById("app");

const onFormSubmit = (e) => {
e.preventDefault()
// option = where the event took place, ie the form where text was entered
const option = e.target.elements.option.value;

if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
    renderJSX();
}
}
const removeAll =() => {
    app.options = [];
    renderJSX()
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
    console.log(randomNum)
};


const renderJSX = () => {
   const template = (
        <div>
          <h1>{app.title}</h1>
          {app.subTitle && <p>{app.subTitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
      <button onClick = {removeAll}>Remove All</button>
      <ol>
      {
          app.options.map(opt => {
              return <li key={opt}>{opt}</li>
          })
          
      }
          
              
          </ol>
          <form onSubmit={onFormSubmit}>
              <input type='text' name='option'/>
              <button>Add Option</button>
          </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
}

renderJSX();


