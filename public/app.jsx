window.App = React.createClass({
  getInitialState() {
    return {
      pattern: {
        kind: 'vertstripe',
        pitch: 100,
        size: 0.6,
        colorA: '#dddddd',
        colorB: '#666666'
      }
    };
  },

  handleControlsChange(values) {
    this.setState({pattern: Object.assign({}, this.state.pattern, values)});
  },
  
  render() {
    return (
      <div id='app'>
        <Controls {...this.state.pattern} onChange={this.handleControlsChange} />
        <PatternCanvas {...this.state.pattern} />
      </div>
    );
  }
});