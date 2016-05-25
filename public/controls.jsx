window.Controls = React.createClass({
  handlePitchChange(value) {
    this.props.onChange({pitch: value});
  },

  handleSizeChange(value) {
    this.props.onChange({size: value});
  },

  handleColorAChange(value) {
    this.props.onChange({colorA: value});
  },

  handleColorBChange(value) {
    this.props.onChange({colorB: value});
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
        <Color name='Color A'
          value={this.props.colorA}
          onChange={this.handleColorAChange} />
        <Color name='Color B'
          value={this.props.colorB}
          onChange={this.handleColorBChange} />
      </div>
    );
  }
});