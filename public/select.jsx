window.Select = React.createClass({
  handleInputChange(e) {
    this.props.onChange(e.target.value);
  },
  
  render() {
    var options = this.props.options.map(function(option) {
      return <option key={option}>{option}</option>;
    });
    return (
      <div className='control'>
        <label>{this.props.name}</label>
        <select value={this.props.value}
          onChange={this.handleInputChange}>{options}</select>
      </div>
    );
  }
});