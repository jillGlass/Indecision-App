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
    render() {
        return (
            <button>What should I do?</button>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <p>Options Component</p>
                {this.props.option.map(option => 
                     <Option key={option} optionText={option}/>)}
            
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component</p>
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


