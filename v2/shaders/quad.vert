attribute vec4 a_position;
attribute vec2 a_texcoords;

uniform vec2 u_resolution;

varying vec2 v_texcoords;

void main() {
    gl_Position = a_position;
    //v_texcoords = (vec2(a_position.x, a_position.y) + 1.0) / 2.0;
    v_texcoords = a_position.xy;
}