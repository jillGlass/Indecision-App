class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePickOptions = this.handlePickOptions.bind(this);
    this.state = {
      options: ["thing one", "thing two", "thing three"],
    };
  }
  handleDeleteOptions() {
      this.setState(()=>{
          return {
              options: []
          }
      })
  }
  handlePickOptions() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum]
          alert(option)
     
  }
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hands of your computer";

    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePickOptions={this.handlePickOptions}
         />
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  
  render() {
    return (
      <button 
      disabled={!this.props.hasOptions} 
      onClick={this.props.handlePickOptions}>
        What should I do?
      </button>
    );
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>

        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    // option = where the event took place, ie the form where text was entered
    const option = e.target.elements.option.value.trim();
    const optionList = [];

    if (option) {
      // optionList.push(option);
      // e.target.elements.option.value = '';
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
