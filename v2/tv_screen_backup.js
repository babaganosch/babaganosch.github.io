"use strict";

fetch = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, Boolean(callback));
    if (callback != null) {
        xhr.onload = function() {
            callback(xhr.responseText);
        };
    }
    xhr.send();
    return xhr.responseText;
};

function resizeCanvasToDisplaySize(canvas, multiplier) {
    multiplier = multiplier || 1;
    const width  = canvas.clientWidth  * multiplier | 0;
    const height = canvas.clientHeight * multiplier | 0;
    if (canvas.width !== width ||  canvas.height !== height) {
        canvas.width  = width;
        canvas.height = height;
        return true;
    }
    return false;
}

function createShader(gl, type, source) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }
   
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

function createProgram(gl, vertexShader, fragmentShader) {
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    var success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }
   
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

function main() {

    var gl = document.querySelector("#webgl_canvas").getContext("webgl");
    if (!gl) {
        return;
    }
    
    var vertexShader = createShader(gl, gl.VERTEX_SHADER, fetch("/v2/shaders/quad.vert"));
    var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fetch("/v2/shaders/noise.frag"));
    var program = createProgram(gl, vertexShader, fragmentShader);

    var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    var timeUniformLocation = gl.getUniformLocation(program, "u_time");

    var positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    var positions = [
         1.0,  1.0, 0.0, 1.0,  // Polygon 1 (quad BG)
         1.0, -1.0, 0.0, 1.0,
        -1.0, -1.0, 0.0, 1.0,
         1.0,  1.0, 0.0, 1.0,  // Polygon 2 (quad BG)
        -1.0, -1.0, 0.0, 1.0,
        -1.0,  1.0, 0.0, 1.0,

         1.0,  1.0, 0.0, 1.0,  // Polygon 1 (quad Menu)
         1.0, -1.0, 0.0, 1.0,
        -1.0, -1.0, 0.0, 1.0,
         1.0,  1.0, 0.0, 1.0,  // Polygon 2 (quad Menu)
        -1.0, -1.0, 0.0, 1.0,
        -1.0,  1.0, 0.0, 1.0,
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    // Draw the scene.
    requestAnimationFrame(drawScene);

    var then = 0;
    function drawScene(time) {
        // convert to seconds
        time *= 0.001;
        var deltaTime = time - then;
        then = time;

        resizeCanvasToDisplaySize(gl.canvas);
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.enable(gl.DEPTH_TEST);

        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);

        // Turn on the position attribute
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        gl.uniform1f(timeUniformLocation, Math.random());

        // Turn on the attribute
        gl.enableVertexAttribArray(positionAttributeLocation);

        // Bind the position buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
        var size = 4;          // 4 components per iteration
        var type = gl.FLOAT;   // the data is 32bit floats
        var normalize = false; // don't normalize the data
        var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        var offset = 0;        // start at the beginning of the buffer
        gl.vertexAttribPointer(
            positionAttributeLocation, size, type, normalize, stride, offset);

        var primitiveType = gl.TRIANGLES;
        var offset = 0;
        var count = 2 * 3;   // 2 triangles, 3 vertices each
        gl.drawArrays(primitiveType, offset, count);

        requestAnimationFrame(drawScene);
    }
}

main();
