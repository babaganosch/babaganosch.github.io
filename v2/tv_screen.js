"use strict";

const { WebGLUtils } = require("three");

main();

function main() {

    var gl = document.querySelector("#webgl_canvas").getContext("webgl");
    if (!gl) {
        return;
    }
    
}