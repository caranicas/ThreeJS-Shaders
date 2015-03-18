(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.MirrorShader = factory();
  }
}(this, function() {

/*
 *@author alteredq / http://alteredqualia.com/
 *
 *Dot screen shader
 *based on glfx.js sepia shader
 *https://github.com/evanw/glfx.js
 */
var MirrorShader, THREE;

THREE = require('threejs');

MirrorShader = (function() {
  function MirrorShader() {}

  MirrorShader.prototype.uniforms = {
    "tDiffuse": {
      type: "t",
      value: null
    },
    "side": {
      type: "i",
      value: 1
    }
  };

  MirrorShader.prototype.vertexShader = ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n");

  MirrorShader.prototype.fragmentShader = ["uniform sampler2D tDiffuse;", "uniform int side;", "varying vec2 vUv;", "void main() {", "vec2 p = vUv;", "if (side == 0){", "if (p.x > 0.5) p.x = 1.0 - p.x;", "}else if (side == 1){", "if (p.x < 0.5) p.x = 1.0 - p.x;", "}else if (side == 2){", "if (p.y < 0.5) p.y = 1.0 - p.y;", "}else if (side == 3){", "if (p.y > 0.5) p.y = 1.0 - p.y;", "} ", "vec4 color = texture2D(tDiffuse, p);", "gl_FragColor = color;", "}"].join("\n");

  return MirrorShader;

})();

return MirrorShader;
}));
