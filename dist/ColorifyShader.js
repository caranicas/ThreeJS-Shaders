(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.ColorifyShader = factory();
  }
}(this, function() {

/*
 * @author alteredq / http://alteredqualia.com/
 *
 * Colorify shader
 */
var ColorifyShader, Three;

Three = require('threejs');

ColorifyShader = (function() {
  function ColorifyShader() {}

  ColorifyShader.prototype.uniforms = {
    "tDiffuse": {
      type: "t",
      value: null
    },
    "color": {
      type: "c",
      value: new THREE.Color(0xffffff)
    }
  };

  ColorifyShader.prototype.vertexShader = ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n");

  ColorifyShader.prototype.fragmentShader = ["uniform vec3 color;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "void main() {", "vec4 texel = texture2D( tDiffuse, vUv );", "vec3 luma = vec3( 0.299, 0.587, 0.114 );", "float v = dot( texel.xyz, luma );", "gl_FragColor = vec4( v * color, texel.w );", "}"].join("\n");

  return ColorifyShader;

})();

return ColorifyShader;
}));
