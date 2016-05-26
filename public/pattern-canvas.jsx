window.PatternCanvas = React.createClass({
  getInitialState() {
    return {shown: true};
  },
  
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
      this.ccontext.fillStyle = colorA;
      this.ccontext.fillRect(x, 0, size * pitch, this.cheight);
      this.ccontext.fillStyle = colorB;
      this.ccontext.fillRect(x + (size * pitch), 0,
        (1 - size) * pitch, this.cheight);
    }
  },

  drawHorizontalStripes(skipB) {
    var { pitch, size, colorA, colorB } = this.props;
    for(var y = 0; y < this.cheight; y = y + pitch) {
      this.ccontext.fillStyle = colorA;
      this.ccontext.fillRect(0, y, this.cwidth, size * pitch);
      if(!skipB) {
        this.ccontext.fillStyle = colorB;
        this.ccontext.fillRect(0, y + (size * pitch),
        this.cwidth, (1 - size) * pitch);
      }
    }
  },

  drawGrid() {
    this.drawVerticalStripes();
    this.drawHorizontalStripes(true);
  },

  drawDots() {
    var { pitch, size, colorA, colorB } = this.props;
    var xoffset = 0;
    this.ccontext.fillStyle = colorA;
    this.ccontext.fillRect(0, 0, this.cwidth, this.cheight);
    this.ccontext.fillStyle = colorB;
    for(var y = 0; y < this.cheight; y = y + (pitch * .862)) {
      if(xoffset == 0)
        xoffset = pitch / 2;
      else
        xoffset = 0;
      for(var x = 0; x < this.cwidth; x = x + pitch) {
        this.ccontext.beginPath();
        this.ccontext.arc(x + xoffset, y, size * pitch / 2, 0, Math.PI * 2);
        this.ccontext.closePath();
        this.ccontext.fill();
      }
    }
  },
  
  doDraw() {
    console.log("drawing");
    switch(this.props.kind) {
      case 'vertstripe' : this.drawVerticalStripes(); break;
      case 'horizstripe': this.drawHorizontalStripes(); break;
      case 'grid'       : this.drawGrid(); break;
      case 'dots'       : this.drawDots(); break;
    }
  },
  
  render() {
    return (
      <canvas width='1280px' height='720px' ref='canvas'>
      </canvas>
    );
  }
});
