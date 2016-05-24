window.Controls = React.createClass({
  handlePitchChange(value) {
    this.props.onChange({pitch: value});
  },

  handleSizeChange(value) {
    this.props.onChange({size: value});
  },
  
  render() {
    return (
      <div id='controls'>
        <Slider name='Pitch'
          min={5} max={200} value={this.props.pitch}
          onChange={this.handlePitchChange} />
        <Slider name='Size'
          min={0} max={1} step={0.01} value={this.props.size}
          onChange={this.handleSizeChange} />
      </div>
    );
  }
});