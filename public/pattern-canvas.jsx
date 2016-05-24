window.PatternCanvas = React.createClass({
  componentDidUpdate() {
    this.doDraw();
  },

  componentDidMount() {
    this.doDraw();
  },

  doDraw() {
    console.log("drawing");
    var canvas = this.refs.canvas;
    var context = canvas.getContext('2d');
    var cwidth = 1280;
    var cheight = 720;

    var drawStripes = function(stripeWidth, thickness, colorA, colorB) {
      for(var x = 0; x < cwidth; x = x + stripeWidth) {
        context.beginPath();
        context.fillStyle = colorA;
        context.fillRect(x, 0, thickness * stripeWidth, cheight);
        context.fillStyle = colorB;
        context.fillRect(x + (thickness * stripeWidth), 0,
          (1 - thickness) * stripeWidth, cheight);
      }
    };

    drawStripes(this.props.pitch, this.props.size,
      this.props.colorA, this.props.colorB);
  },
  
  render() {
    return (
      <canvas width='1280px' height='720px' ref='canvas'>
      </canvas>
    );
  }
});
