ThreeJS-Shaders
===============

#### UMD Ports of Three JS Shaders to facilitate inclusion through [Bower](http://bower.io/)

The purpose of the library is to enable a more modern work flow for web sites that feature [three.js](http://threejs.org/) and want to use shaders; Using Bower to manage your shaders as components, instead of having to have scripts loose in the top of html. 

##Current Shaders

- [RBGSHIFT](https://github.com/caranicas/ThreeJS-Shaders/tree/rgbshiftshader)
- [DOTSCREEN](https://github.com/caranicas/ThreeJS-Shaders/tree/dotscreenshader)

##Contributing 

If you are intested in in contributing to this library please follow these instructions
- Look at the offical three.js [shader list](https://github.com/mrdoob/three.js/tree/master/examples/js/shaders) and pick a shader that you would like to port over. 
- Port the code over to [Coffee Script](http://coffeescript.org/) and use my [Coffee Pod](https://github.com/caranicas/Coffee-Pod) module creator to complile it to javascript
- Branch off of my [template branch] (https://github.com/caranicas/ThreeJS-Shaders/tree/template) and replace the placeholder code with the code generated with Coffee Pod
