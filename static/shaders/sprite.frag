precision mediump float;

varying mediump vec2 v_texcoords;

uniform sampler2D u_sprite;
uniform vec4 u_color;

void main() {
    gl_FragColor = texture2D( u_sprite, v_texcoords ) * u_color;
}