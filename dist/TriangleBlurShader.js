(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.TriangleBlurShader = factory();
  }
}(this, function() {

/*
 * @author zz85 / http://www.lab4games.net/zz85/blog
 *
 * Triangle blur shader
 * based on glfx.js triangle blur shader
 * https://github.com/evanw/glfx.js
 *
 * A basic blur filter, which convolves the image with a
 * pyramid filter. The pyramid filter is separable and is applied as two
 * perpendicular triangle filters.
 */
var THREE, TriangleBlurShader;

THREE = require('threejs');

TriangleBlurShader = (function() {
  function TriangleBlurShader() {}

  TriangleBlurShader.prototype.uniforms = {
    "texture": {
      type: "t",
      value: null
    },
    "delta": {
      type: "v2",
      value: new THREE.Vector2(1, 1)
    }
  };

  TriangleBlurShader.prototype.vertexShader = ["varying vec2 vUv;", "void main() {", "vUv = uv;", "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n");

  TriangleBlurShader.prototype.fragmentShader = ["#define ITERATIONS 10.0", "uniform sampler2D texture;", "uniform vec2 delta;", "varying vec2 vUv;", "float random( vec3 scale, float seed ) {", "return fract( sin( dot( gl_FragCoord.xyz + seed, scale ) ) * 43758.5453 + seed );", "}", "void main() {", "vec4 color = vec4( 0.0 );", "float total = 0.0;", "float offset = random( vec3( 12.9898, 78.233, 151.7182 ), 0.0 );", "for ( float t = -ITERATIONS; t <= ITERATIONS; t ++ ) {", "float percent = ( t + offset - 0.5 ) / ITERATIONS;", "float weight = 1.0 - abs( percent );", "color += texture2D( texture, vUv + delta * percent ) * weight;", "total += weight;", "}", "gl_FragColor = color / total;", "}"].join("\n");

  return TriangleBlurShader;

})();

return TriangleBlurShader;
}));