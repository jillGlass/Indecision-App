class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.visibilityToggle = this.visibilityToggle.bind(this);
    this.state = {
      visibility: false,
    };
  }
  visibilityToggle() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility</h1>
        <button onClick={this.visibilityToggle}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && (
          <div>
            <p>I am visible</p>
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<Visibility />, document.getElementById("app"));

