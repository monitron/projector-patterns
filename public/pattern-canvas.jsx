window.PatternCanvas = React.createClass({
  componentDidUpdate() {
    this.doDraw();
  },

  componentDidMount() {
    this.ccontext = this.refs.canvas.getContext('2d');
    this.cwidth = 1280;
    this.cheight = 720;
    this.doDraw();
  },

  drawVerticalStripes() {
    var { pitch, size, colorA, colorB } = this.props;
    for(var x = 0; x < this.cwidth; x = x + pitch) {
      this.ccontext.beginPath();
      this.ccontext.fillStyle = colorA;
      this.ccontext.fillRect(x, 0, size * pitch, this.cheight);
      this.ccontext.fillStyle = colorB;
      this.ccontext.fillRect(x + (size * pitch), 0,
        (1 - size) * pitch, this.cheight);
    }
  },

  drawHorizontalStripes() {
    var { pitch, size, colorA, colorB } = this.props;
    for(var y = 0; y < this.cheight; y = y + pitch) {
      this.ccontext.beginPath();
      this.ccontext.fillStyle = colorA;
      this.ccontext.fillRect(0, y, this.cwidth, size * pitch);
      this.ccontext.fillStyle = colorB;
      this.ccontext.fillRect(0, y + (size * pitch),
        this.cwidth, (1 - size) * pitch);
    }
  },
  
  doDraw() {
    console.log("drawing");
    switch(this.props.kind) {
      case 'vertstripe' : this.drawVerticalStripes(); break;
      case 'horizstripe': this.drawHorizontalStripes(); break;
    }
  },
  
  render() {
    return (
      <canvas width='1280px' height='720px' ref='canvas'>
      </canvas>
    );
  }
});
