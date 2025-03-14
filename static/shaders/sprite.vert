attribute vec4 a_position;
attribute vec2 a_texcoord;

uniform mat4 u_matrix;

varying vec2 v_texcoords;

void main() {
    gl_Position = u_matrix * a_position;
    v_texcoords = a_texcoord;
}