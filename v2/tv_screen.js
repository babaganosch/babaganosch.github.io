"use strict";

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

function main() {
    const canvas = document.querySelector("#webgl_canvas");

    var options = {
        antialias: false,
        depth: false,
        preserveDrawingBuffer: true,
        stencil: false,
        powerPreference: "high-performance"
    };

    const igloo = new Igloo(canvas, {});
    const gl = igloo.gl;
    gl.disable(gl.DEPTH_TEST);

    resizeCanvasToDisplaySize(gl.canvas);

    function texture() {
        return igloo.texture(null, gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST);
    }

    const programs = {
        tv_noise:  igloo.program('/v2/shaders/quad.vert', '/v2/shaders/noise.frag'),
        menu:      igloo.program('/v2/shaders/quad.vert', '/v2/shaders/menu.frag'),
        chromatic: igloo.program('/v2/shaders/quad.vert', '/v2/shaders/chromatic.frag')
    };

    const textures = {
        tmp: texture()
    };

    const framebuffers = {
        tmp: igloo.framebuffer().attach(textures.tmp)
    };

    /* 2  3
    *  0  1
    */
    const buffers = {
        quad: igloo.array(Igloo.QUAD2),
        menu: igloo.array(new Float32Array([-.5, -.5,
                                             .5, -.5, 
                                            -.5,  .75, 
                                             .5,  .75])),
        box: igloo.array(new Float32Array( [-.25,  .60,
                                             .25,  .60, 
                                            -.25,  .65, 
                                             .25,  .65]))
    };

    function draw() {
        resizeCanvasToDisplaySize(gl.canvas);
        
        textures.tmp.blank(gl.canvas.width, gl.canvas.height);
        framebuffers.tmp.bind();

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
    
        // Draw TV noise background
        programs.tv_noise.use()
            .attrib('a_position', buffers.quad, 2)
            .uniform('u_time', Math.random())
            .draw(gl.TRIANGLE_STRIP, Igloo.QUAD2.length / 2);

        // Draw Menu
        programs.menu.use()
            .attrib('a_position', buffers.menu, 2)
            .uniform('u_tint', [0.0, 0.0, 1.0])
            .draw(gl.TRIANGLE_STRIP, Igloo.QUAD2.length / 2);

        programs.menu.use()
            .attrib('a_position', buffers.box, 2)
            .uniform('u_tint', [1.0, 1.0, 1.0])
            .draw(gl.TRIANGLE_STRIP, Igloo.QUAD2.length / 2);

        // Draw Chromatic
        igloo.defaultFramebuffer.bind();
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        textures.tmp.bind(0);
        programs.chromatic.use()
            .attrib('a_position', buffers.quad, 2)
            .uniform('u_resolution', [gl.canvas.width, gl.canvas.height])
            .uniformi('u_image', 0)
            .draw(gl.TRIANGLE_STRIP, Igloo.QUAD2.length / 2);
        
        requestAnimationFrame(draw);
    };

    draw();
}

main();
