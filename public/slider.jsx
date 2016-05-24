window.Slider = React.createClass({
  getDefaultProps() {
    return {
      min: 0,
      max: 100,
      step: 1,
      value: 0
    };
  },

  handleInputChange(e) {
    this.props.onChange(Number(e.target.value));
  },
  
  render() {
    return (
      <label>{this.props.name}
        <input type='range'
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.props.value}
          onChange={this.handleInputChange} />
      </label>
    );
  }
});