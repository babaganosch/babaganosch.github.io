precision mediump float;

uniform mediump vec3 u_tint;

void main() {
    gl_FragColor = vec4(u_tint, 1.0);
}