
attribute vec4 a_position;
varying vec2 v_coords;

void main() {
    gl_Position = a_position;
    v_coords = a_position.xy;
}