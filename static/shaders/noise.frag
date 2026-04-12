precision mediump float;

varying vec2 v_texcoords;
uniform mediump float u_time;
uniform bool u_noise_on;

float getRandomValue(vec2 coords)
{
    return fract(sin(fract(u_time) / 10.0 * dot(coords, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    if (!u_noise_on)
    {
        gl_FragColor = vec4(0);
        return;
    }
    vec2 uv = (v_texcoords + 1.0) / 2.0;
    float noise = (getRandomValue(uv) + 0.2);
    gl_FragColor = vec4(noise, noise, noise, 1.0);
}