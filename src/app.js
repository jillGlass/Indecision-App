class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subTitle = "Put your life in the hands of your computer";
        const option = ['thing one', 'thing two', 'thing three'];
        return(
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options option={option}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        )
    }

}

class Action extends React.Component {
    handlePick() {
alert('handlepick')
    }
    render() {
        return (
            <button onClick={this.handlePick}>What should I do?</button>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.option)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
            
                {this.props.option.map(option => 
                     <Option key={option} optionText={option}/>)}
            
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault()
        // option = where the event took place, ie the form where text was entered
        const option = e.target.elements.option.value.trim();
        const optionList = []
        
        if(option){
            // optionList.push(option);
            // e.target.elements.option.value = '';
            alert(option)
            
        }
        }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
              <input type='text' name='option'/>
              <button>Add Option</button>
          </form>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))


