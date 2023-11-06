precision mediump float;

varying mediump vec2 v_coords;
uniform mediump float u_time;

float getRandomValue(vec2 coords)
{
    return fract(sin(fract(u_time) / 10.0 * dot(coords, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    float noise = (getRandomValue(v_coords) + 0.2);
    gl_FragColor = vec4(noise, noise, noise, 1.0);
}