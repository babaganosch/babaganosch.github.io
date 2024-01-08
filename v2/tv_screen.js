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

/*
var fontInfo = {
    letterHeight: 60,
    spaceWidth: 43,
    spacing: 5,
    textureWidth: 387,
    textureHeight: 299,
    glyphInfos: {
        'a': { x:   0, y:   0, width: 43, },
        'b': { x:  43, y:   0, width: 43, },
        'c': { x:  86, y:   0, width: 43, },
        'd': { x: 129, y:   0, width: 43, },
        'e': { x: 172, y:   0, width: 43, },
        'f': { x: 215, y:   0, width: 43, },
        'g': { x: 258, y:   0, width: 43, },
        'h': { x: 301, y:   0, width: 43, },
        'i': { x: 344, y:   0, width: 23, },

        'j': { x:   0, y:  60, width: 43, },
        'k': { x:  43, y:  60, width: 43, },
        'l': { x:  86, y:  60, width: 43, },
        'm': { x: 129, y:  60, width: 43, },
        'n': { x: 172, y:  60, width: 43, },
        'o': { x: 216, y:  60, width: 43, },
        'p': { x: 258, y:  60, width: 43, },
        'q': { x: 301, y:  60, width: 43, },
        'r': { x: 344, y:  60, width: 43, },

        's': { x:   0, y: 120, width: 43, },
        't': { x:  43, y: 120, width: 43, },
        'u': { x:  86, y: 120, width: 43, },
        'v': { x: 129, y: 120, width: 43, },
        'w': { x: 172, y: 120, width: 43, },
        'x': { x: 215, y: 120, width: 43, },
        'y': { x: 258, y: 120, width: 43, },
        'z': { x: 301, y: 120, width: 43, },
        '0': { x: 344, y: 120, width: 43, },

        '1': { x:   0, y: 180, width: 43, },
        '2': { x:  43, y: 180, width: 43, },
        '3': { x:  86, y: 180, width: 43, },
        '4': { x: 129, y: 180, width: 43, },
        '5': { x: 172, y: 180, width: 43, },
        '6': { x: 215, y: 180, width: 43, },
        '7': { x: 258, y: 180, width: 43, },
        '8': { x: 301, y: 180, width: 43, },
        '9': { x: 344, y: 180, width: 43, },

        '!': { x:   0, y: 240, width: 43, },
        '?': { x:  43, y: 240, width: 43, },
        '#': { x:  86, y: 240, width: 43, },
        '.': { x: 129, y: 240, width: 43, },
        ',': { x: 172, y: 240, width: 43, },
        '-': { x: 215, y: 240, width: 43, },
        '>': { x: 258, y: 240, width: 43, },
        ':': { x: 301, y: 240, width: 43, },
        '/': { x: 344, y: 240, width: 43, },
    },
};
*/

var fontInfo = {
    letterHeight: 29,
    spaceWidth: 20,
    spacing: 4,
    textureWidth: 198,
    textureHeight: 150,
    glyphInfos: {
        'a': { x:   1, y:   1, width: 21, },
        'b': { x:  23, y:   1, width: 21, },
        'c': { x:  45, y:   1, width: 21, },
        'd': { x:  67, y:   1, width: 21, },
        'e': { x:  89, y:   1, width: 21, },
        'f': { x: 111, y:   1, width: 21, },
        'g': { x: 133, y:   1, width: 21, },
        'h': { x: 155, y:   1, width: 21, },
        'i': { x: 177, y:   1, width: 12 },

        'j': { x:   1, y:  31, width: 21, },
        'k': { x:  23, y:  31, width: 21, },
        'l': { x:  45, y:  31, width: 21, },
        'm': { x:  67, y:  31, width: 21, },
        'n': { x:  89, y:  31, width: 21, },
        'o': { x: 111, y:  31, width: 21, },
        'p': { x: 133, y:  31, width: 21, },
        'q': { x: 155, y:  31, width: 21, },
        'r': { x: 177, y:  31, width: 21, },

        's': { x:   1, y:  61, width: 21, },
        't': { x:  23, y:  61, width: 21, },
        'u': { x:  45, y:  61, width: 21, },
        'v': { x:  67, y:  61, width: 21, },
        'w': { x:  89, y:  61, width: 21, },
        'x': { x: 111, y:  61, width: 21, },
        'y': { x: 133, y:  61, width: 21, },
        'z': { x: 155, y:  61, width: 21, },
        '0': { x: 177, y:  61, width: 21, },

        '1': { x:   1, y:  91, width: 21, },
        '2': { x:  23, y:  91, width: 21, },
        '3': { x:  45, y:  91, width: 21, },
        '4': { x:  67, y:  91, width: 21, },
        '5': { x:  89, y:  91, width: 21, },
        '6': { x: 111, y:  91, width: 21, },
        '7': { x: 133, y:  91, width: 21, },
        '8': { x: 155, y:  91, width: 21, },
        '9': { x: 177, y:  91, width: 21, },

        '!': { x:   1, y: 121, width: 21, },
        '?': { x:  23, y: 121, width: 21, },
        '#': { x:  45, y: 121, width: 21, },
        '.': { x:  67, y: 121, width: 21, },
        ',': { x:  89, y: 121, width: 21, },
        '-': { x: 111, y: 121, width: 21, },
        '>': { x: 133, y: 121, width: 21, },
        ':': { x: 155, y: 121, width: 21, },
        '/': { x: 177, y: 121, width: 21, },
    },
};

function makeVerticesForString(fontInfo, s) {
    var len = s.length;
    var numVertices = len * 6;
    var positions = new Float32Array(numVertices * 2);
    var texcoords = new Float32Array(numVertices * 2);
    var offset = 0;
    var x = 0;
    var maxX = fontInfo.textureWidth;
    var maxY = fontInfo.textureHeight;
    for (var ii = 0; ii < len; ++ii) {
        var letter = s[ii];
        var glyphInfo = fontInfo.glyphInfos[letter];
        if (glyphInfo) {
            var x2 = x + glyphInfo.width;
            var u1 = glyphInfo.x / maxX;
            var v1 = (glyphInfo.y + fontInfo.letterHeight - 1) / maxY;
            var u2 = (glyphInfo.x + glyphInfo.width - 1) / maxX;
            var v2 = glyphInfo.y / maxY;
    
            // 6 vertices per letter
            positions[offset + 0] = x;
            positions[offset + 1] = 0;
            texcoords[offset + 0] = u1;
            texcoords[offset + 1] = v1;
    
            positions[offset + 2] = x2;
            positions[offset + 3] = 0;
            texcoords[offset + 2] = u2;
            texcoords[offset + 3] = v1;
    
            positions[offset + 4] = x;
            positions[offset + 5] = fontInfo.letterHeight;
            texcoords[offset + 4] = u1;
            texcoords[offset + 5] = v2;
    
            positions[offset + 6] = x;
            positions[offset + 7] = fontInfo.letterHeight;
            texcoords[offset + 6] = u1;
            texcoords[offset + 7] = v2;
    
            positions[offset + 8] = x2;
            positions[offset + 9] = 0;
            texcoords[offset + 8] = u2;
            texcoords[offset + 9] = v1;
    
            positions[offset + 10] = x2;
            positions[offset + 11] = fontInfo.letterHeight;
            texcoords[offset + 10] = u2;
            texcoords[offset + 11] = v2;
    
            x += glyphInfo.width + fontInfo.spacing;
            offset += 12;
        } else {
            // we don't have this character so just advance
            x += fontInfo.spaceWidth;
        }
    }
  
    // return ArrayBufferViews for the portion of the TypedArrays
    // that were actually used.
    return {
        arrays: {
            position: new Float32Array(positions.buffer, 0, offset),
            texcoord: new Float32Array(texcoords.buffer, 0, offset),
        },
        numVertices: offset / 2,
    };
}

var m4 = {

    projection: function(width, height, depth) {
        // Note: This matrix flips the Y axis so 0 is at the top.
        return [
             2 / width, 0, 0, 0,
             0, -2 / height, 0, 0,
             0, 0, 2 / depth, 0,
            -1, 1, 0, 1,
        ];
    },

    identity: function() {
        return [
            1,  0,  0,  0,
            0,  1,  0,  0,
            0,  0,  1,  0,
            0,  0,  0,  1,
        ];
    },
  
    multiply: function(a, b) {
        var a00 = a[0 * 4 + 0];
        var a01 = a[0 * 4 + 1];
        var a02 = a[0 * 4 + 2];
        var a03 = a[0 * 4 + 3];
        var a10 = a[1 * 4 + 0];
        var a11 = a[1 * 4 + 1];
        var a12 = a[1 * 4 + 2];
        var a13 = a[1 * 4 + 3];
        var a20 = a[2 * 4 + 0];
        var a21 = a[2 * 4 + 1];
        var a22 = a[2 * 4 + 2];
        var a23 = a[2 * 4 + 3];
        var a30 = a[3 * 4 + 0];
        var a31 = a[3 * 4 + 1];
        var a32 = a[3 * 4 + 2];
        var a33 = a[3 * 4 + 3];
        var b00 = b[0 * 4 + 0];
        var b01 = b[0 * 4 + 1];
        var b02 = b[0 * 4 + 2];
        var b03 = b[0 * 4 + 3];
        var b10 = b[1 * 4 + 0];
        var b11 = b[1 * 4 + 1];
        var b12 = b[1 * 4 + 2];
        var b13 = b[1 * 4 + 3];
        var b20 = b[2 * 4 + 0];
        var b21 = b[2 * 4 + 1];
        var b22 = b[2 * 4 + 2];
        var b23 = b[2 * 4 + 3];
        var b30 = b[3 * 4 + 0];
        var b31 = b[3 * 4 + 1];
        var b32 = b[3 * 4 + 2];
        var b33 = b[3 * 4 + 3];
        return [
            b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
            b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
            b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
            b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
            b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
            b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
            b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
            b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
            b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
            b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
            b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
            b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
            b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
            b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
            b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
            b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
        ];
    },
  
    translation: function(tx, ty, tz) {
        return [
            1,  0,  0,  0,
            0,  1,  0,  0,
            0,  0,  1,  0,
            tx, ty, tz, 1,
        ];
    },
  
    xRotation: function(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
  
        return [
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1,
        ];
    },
  
    yRotation: function(angleInRadians) {
        var c = Math.cos(angleInRadians);
        var s = Math.sin(angleInRadians);
  
        return [
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1,
        ];
    },
  
    zRotation: function(angleInRadians) {
      var c = Math.cos(angleInRadians);
      var s = Math.sin(angleInRadians);
  
        return [
             c, s, 0, 0,
            -s, c, 0, 0,
             0, 0, 1, 0,
             0, 0, 0, 1,
        ];
    },
  
    scaling: function(sx, sy, sz) {
        return [
            sx, 0,  0,  0,
            0, sy,  0,  0,
            0,  0, sz,  0,
            0,  0,  0,  1,
        ];
    },
  
    translate: function(m, tx, ty, tz) {
        return m4.multiply(m, m4.translation(tx, ty, tz));
    },
  
    xRotate: function(m, angleInRadians) {
        return m4.multiply(m, m4.xRotation(angleInRadians));
    },
  
    yRotate: function(m, angleInRadians) {
        return m4.multiply(m, m4.yRotation(angleInRadians));
    },
  
    zRotate: function(m, angleInRadians) {
        return m4.multiply(m, m4.zRotation(angleInRadians));
    },
  
    scale: function(m, sx, sy, sz) {
        return m4.multiply(m, m4.scaling(sx, sy, sz));
    },
  
  };

function degToRad(d) {
    return d * Math.PI / 180;
}

const SG_SCALE_MAGIC = 2000;
const SG_HALIGN_LEFT = 0;
const SG_HALIGN_RIGHT = 1;
const SG_HALIGN_CENTER = 2;
const SG_VALIGN_TOP = 0;
const SG_VALIGN_BOT = 1;

const IDENTITY_MATRIX = m4.identity();

class StringGlyphs {
    constructor(context, str, info) {
        this.gl = context.gl;
        this.vertices = makeVerticesForString(fontInfo, str);
        this.info = info;

        this.a_position = context.array();
        this.a_texcoord = context.array();
        this.u_matrix;

        this.update();

    }

    update = function() {
        const gl = this.gl;

        this.scale = Math.min(this.info.scale * (this.gl.canvas.width / SG_SCALE_MAGIC), 6.0);
        if (this.gl.canvas.width < 768) this.scale *= 2.0;
        this.w = this.vertices.arrays.position[(this.vertices.numVertices * 2) - 2] * this.scale;
        this.h = fontInfo.letterHeight * this.scale;
        this.x = (gl.canvas.width * this.info.x);
        this.y = (gl.canvas.height * this.info.y);

        switch (this.info.halign) {
            case (SG_HALIGN_CENTER): {
                this.x -= (this.w / 2);
            }; break;
            case (SG_HALIGN_RIGHT): {
                this.x -= this.w;
            }; break;
            default: break;
        }

        switch (this.info.valign) {
            case (SG_VALIGN_TOP): {
                this.y += this.h;
            }; break;
            default: break;
        }

        this.a_position.update(this.vertices.arrays.position, gl.STATIC_DRAW);
        this.a_texcoord.update(this.vertices.arrays.texcoord, gl.STATIC_DRAW);

        this.u_matrix = m4.projection(gl.canvas.clientWidth, gl.canvas.clientHeight, 400);
        this.u_matrix = m4.translate(this.u_matrix, this.x, this.y, 0);
        this.u_matrix = m4.xRotate(this.u_matrix, degToRad(180));
        this.u_matrix = m4.scale(this.u_matrix, this.scale, this.scale, 1);

        return this;
    };

    draw = function(program) {
        program.use()
            .attrib('a_position', this.a_position, 2)
            .attrib('a_texcoord', this.a_texcoord, 2)
            .matrix('u_matrix', this.u_matrix)
            .uniform('u_color', this.info.color)
            .uniformi('u_sprite', 1)
            .draw(this.gl.TRIANGLES, this.vertices.numVertices );

        return this;
    }
}

const months = ["jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec"
];

function main() {
    const canvas = document.querySelector("#webgl_canvas");

    var options = {
        antialias: false,
        depth: false,
        preserveDrawingBuffer: true,
        stencil: false,
        powerPreference: "high-performance"
    };

    const igloo = new Igloo(canvas, options);
    const gl = igloo.gl;
    gl.disable(gl.DEPTH_TEST);

    resizeCanvasToDisplaySize(gl.canvas);

    function texture() {
        return igloo.texture(null, gl.RGBA, gl.CLAMP_TO_EDGE, gl.LINEAR);
    }

    const programs = {
        tv_noise:  igloo.program('/v2/shaders/quad.vert', '/v2/shaders/noise.frag'),
        color:     igloo.program('/v2/shaders/quad.vert', '/v2/shaders/color.frag'),
        chromatic: igloo.program('/v2/shaders/quad.vert', '/v2/shaders/chromatic.frag'),
        text_program:    igloo.program('/v2/shaders/sprite.vert', '/v2/shaders/sprite.frag')
    };

    const textures = {
        tmp: texture(),
        glyphTex: igloo.texture($("#test_image")[0], gl.RGBA, gl.CLAMP_TO_EDGE, gl.NEAREST)
    };

    const framebuffers = {
        tmp: igloo.framebuffer().attach(textures.tmp)
    };

    /* 2  3
    *  0  1
    */
    const buffers = {
        quad: igloo.array(Igloo.QUAD2)
    };

    var strings = {
        lars_andersson: new StringGlyphs(igloo, "----- lars andersson -----", { 
            scale: 1.5, 
            color: [1.0, 1.0, 1.0, 1.0],
            halign: SG_HALIGN_CENTER,
            valign: SG_VALIGN_TOP,
            x: 0.5,
            y: 0.15
        }),
        linkedin: new StringGlyphs(igloo, "linkedin", { 
            scale: 1, 
            color: [1.0, 1.0, 1.0, 1.0],
            halign: SG_HALIGN_LEFT,
            valign: SG_VALIGN_TOP,
            x: 0.425,
            y: 0.25
        }),
        github: new StringGlyphs(igloo, "> github", { 
            scale: 1,
            color: [0.0, 0.0, 230/255, 1.0],
            halign: SG_HALIGN_LEFT,
            valign: SG_VALIGN_TOP,
            x: 0.425,
            y: 0.30
        }),
        twitter: new StringGlyphs(igloo, "twitter", { 
            scale: 1,
            color: [1.0, 1.0, 1.0, 1.0],
            halign: SG_HALIGN_LEFT,
            valign: SG_VALIGN_TOP,
            x: 0.425,
            y: 0.35
        }),
        resume: new StringGlyphs(igloo, "resume", { 
            scale: 1,
            color: [1.0, 1.0, 1.0, 1.0],
            halign: SG_HALIGN_LEFT,
            valign: SG_VALIGN_TOP,
            x: 0.425,
            y: 0.40
        }),
        portfolio: new StringGlyphs(igloo, "portfolio", { 
            scale: 1,
            color: [1.0, 1.0, 1.0, 1.0],
            halign: SG_HALIGN_LEFT,
            valign: SG_VALIGN_TOP,
            x: 0.425,
            y: 0.50
        }),
        menu: new StringGlyphs(igloo, "menu", { 
            scale: 1.75,
            color: [0.0, 1.0, 0.0, 1.0],
            halign: SG_HALIGN_LEFT,
            valign: SG_VALIGN_TOP,
            x: .05,
            y: .05
        }),
        date: new StringGlyphs(igloo, "x", { 
            scale: 1.2,
            color: [0.0, 1.0, 0.0, 1.0],
            halign: SG_HALIGN_LEFT,
            valign: SG_VALIGN_BOT,
            x: .05,
            y: .95
        })
    };

    var noise_constant = Math.random();
    var noise_timer = 0.0;
    var last_frame = 0;

    function draw(time) {
        var dt = time - last_frame;
        last_frame = time;
        noise_timer = noise_timer + dt;
        if ( noise_timer >= 16 ) {
            noise_timer = 0;
            noise_constant = Math.random();
        }

        resizeCanvasToDisplaySize(gl.canvas);

        if (true)
        {
            var today = new Date();
            var date =  months[today.getMonth()] + "-" + String(today.getDate()).padStart(2, "0") + "-" + today.getFullYear();
            var now = String(today.getHours()).padStart(2, "0") + ":" + String(today.getMinutes()).padStart(2, "0") + ":" + String(today.getSeconds()).padStart(2, "0");
            strings.date.vertices = makeVerticesForString(fontInfo, date + "  " + now);
        }

        strings.lars_andersson.update();
        strings.linkedin.update();
        strings.github.update();
        strings.twitter.update();
        strings.resume.update();
        strings.portfolio.update();

        strings.menu.update();
        strings.date.update();

        textures.tmp.blank(gl.canvas.width, gl.canvas.height);
        framebuffers.tmp.bind();

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);

        var resolution = [gl.canvas.width, gl.canvas.height];

        var menu_matrix = IDENTITY_MATRIX;
        menu_matrix = m4.translate(menu_matrix, 0, 0.15, 0);
        menu_matrix = m4.scale(menu_matrix, gl.canvas.width < 768 ? 1.0 : 0.5, 0.6, 1);

        var item_bg_matrix = m4.projection(gl.canvas.width, gl.canvas.height, 400);
        item_bg_matrix = m4.translate(item_bg_matrix, (gl.canvas.width * 0.11) + (gl.canvas.width * strings.github.info.x), (strings.github.info.y * gl.canvas.height) + (strings.github.h / 2), 0);
        item_bg_matrix = m4.scale(item_bg_matrix, gl.canvas.width * 0.12, (strings.github.h / 2) * 1.25, 1);
        

        /*
        var item_bg_matrix = IDENTITY_MATRIX;
        item_bg_matrix = m4.translate(item_bg_matrix, 0, strings.github.info.y, 0);
        item_bg_matrix = m4.scale(item_bg_matrix, 0.25, 0.05, 1);
        */
        

        // Draw TV noise background
        programs.tv_noise.use()
            .attrib('a_position', buffers.quad, 2)
            .matrix('u_matrix', IDENTITY_MATRIX)
            .uniform('u_resolution', resolution)
            .uniform('u_time', noise_constant)
            .draw(gl.TRIANGLE_STRIP, Igloo.QUAD2.length / 2);

        // Draw blue quad
        programs.color.use()
            .attrib('a_position', buffers.quad, 2)
            .matrix('u_matrix', menu_matrix)
            .uniform('u_resolution', resolution)
            .uniform('u_tint', [ .0, .0,  230/255 ])
            .draw(gl.TRIANGLE_STRIP, Igloo.QUAD2.length / 2);

        // Draw marked menu item BG
        programs.color.use()
            .attrib('a_position', buffers.quad, 2)
            .matrix('u_matrix', item_bg_matrix)
            .uniform('u_resolution', resolution)
            .uniform('u_tint', [ 1.0, 1.0, 1.0 ])
            .draw(gl.TRIANGLE_STRIP, Igloo.QUAD2.length / 2);

        // Draw text
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        textures.glyphTex.bind(1);
        strings.lars_andersson.draw(programs.text_program);
        strings.linkedin.draw(programs.text_program);
        strings.github.draw(programs.text_program);
        strings.twitter.draw(programs.text_program);
        strings.resume.draw(programs.text_program);
        strings.portfolio.draw(programs.text_program);
        strings.date.draw(programs.text_program);

        if ((time % 2000) < 1000) {
            strings.menu.draw(programs.text_program);
        }

        // Draw post FX
        igloo.defaultFramebuffer.bind();
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        textures.tmp.bind(0);
        programs.chromatic.use()
            .attrib('a_position', buffers.quad, 2)
            .matrix('u_matrix', IDENTITY_MATRIX)
            .uniform('u_resolution', resolution)
            .uniform('u_random', Math.random())
            .uniform('u_time', time)
            .uniformi('u_image', 0)
            .draw(gl.TRIANGLE_STRIP, Igloo.QUAD2.length / 2);

        gl.disable(gl.BLEND);
        requestAnimationFrame(draw);
    };

    draw(0.0);
}

main();
