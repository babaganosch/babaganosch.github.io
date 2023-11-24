precision mediump float;

varying highp vec2 v_texcoords;

//uniform mediump vec3 u_tint;
uniform vec2 u_resolution;
uniform sampler2D u_sprite;

void main() {
    //vec2 uv = v_texcoords;//(vec2(v_texcoords.x, v_texcoords.y) + 1.0) / 2.0;
         //uv = vec2(uv.x, 1.0 - uv.y);
    //vec2 tex_size = vec2(332.0, 20.0);
    gl_FragColor = texture2D( u_sprite, v_texcoords );
}