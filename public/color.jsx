window.Color = React.createClass({
  handleInputChange(e) {
    this.props.onChange(e.target.value);
  },
  
  render() {
    return (
      <div className='control'>
        <label>{this.props.name}</label>
        <input type='color' value={this.props.value}
          onChange={this.handleInputChange} />
      </div>
    );
  }
});