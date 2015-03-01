(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.DotScreenShader = factory();
  }
}(this, function() {
var DotScreenShader, THREE;

THREE = require('threejs');

DotScreenShader = (function() {
  function DotScreenShader() {}

  DotScreenShader.prototype.uniforms = {
    "tDiffuse": {
      type: "t",
      value: null
    },
    "tSize": {
      type: "v2",
      value: new THREE.Vector2(256, 256)
    },
    "center": {
      type: "v2",
      value: new THREE.Vector2(0.5, 0.5)
    },
    "angle": {
      type: "f",
      value: 1.57
    },
    "scale": {
      type: "f",
      value: 1.0
    }
  };

  DotScreenShader.prototype.vertexShader = ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n");

  DotScreenShader.prototype.fragmentShader = ["uniform vec2 center;", "uniform float angle;", "uniform float scale;", "uniform vec2 tSize;", "uniform sampler2D tDiffuse;", "varying vec2 vUv;", "float pattern() {", "float s = sin( angle ), c = cos( angle );", "vec2 tex = vUv * tSize - center;", "vec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * scale;", "return ( sin( point.x ) * sin( point.y ) ) * 4.0;", "}", "void main() {", "vec4 color = texture2D( tDiffuse, vUv );", "float average = ( color.r + color.g + color.b ) / 3.0;", "gl_FragColor = vec4( vec3( average * 10.0 - 5.0 + pattern() ), color.a );", "}"].join("\n");

  return DotScreenShader;

})();

return DotScreenShader;
}));
