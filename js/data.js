var Game = function() {

  this.monies = 0;
  this.moneyRatePerSecond = 1000;
  // Cache a bound onFrame since we need it each frame.
    this.onFrame = this.onFrame.bind(this);

  // Restart the onFrame loop
    this.lastFrame = +new Date() / 1000;
    requestAnimFrame(this.onFrame);
};
Game.prototype.onFrame = function() {

    var now = +new Date() / 1000,
        delta = now - this.lastFrame;
    this.lastFrame = now;

  this.monies += this.moneyRatePerSecond*delta;
  //document.title = ""+Math.round(this.monies);
  document.getElementById('moneyDisplay').innerHTML = Math.round(this.monies);
  console.log(Math.round(this.monies));
    // Request next frame.
    requestAnimFrame(this.onFrame);
};


/**
   * Cross browser RequestAnimationFrame
   */
  var requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(/* function */ callback) {
          window.setTimeout(callback, 1000 / 60);
        };
  })();

var gameInstance = new Game();
