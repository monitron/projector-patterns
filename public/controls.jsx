window.Controls = React.createClass({
  getInitialState() {
    return {hidden: false};
  },
  
  componentWillMount() {
    $(document).on('keydown', function(e) {
      if(e.which == 27) // esc
        this.setState({hidden: !this.state.hidden});
    }.bind(this));
    // Ideally we should remove this later, but this component never dies
  },
  
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

  handleKindChange(value) {
    this.props.onChange({kind: value});
  },
  
  render() {
    var classes = this.state.hidden ? 'hidden' : '';
    return (
      <div id='controls' className={classes}>
        <Select name='Style'
          options={['vertstripe', 'horizstripe', 'grid', 'dots']}
          value={this.props.kind}
          onChange={this.handleKindChange} />
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
