(function() {
  
  var canvas = document.getElementById('canvas')
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

  drawStripes(100, 0.6, 'red', 'blue');

})()
