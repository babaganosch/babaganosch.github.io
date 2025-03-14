precision highp float;

varying highp vec2 v_texcoords;
uniform sampler2D u_image;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_random;

const float aberration = 1.4;
const vec2 curvature = vec2(4.0);
const vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

vec2 curveRemapUV(vec2 uv)
{
    uv = uv * 2.0 - 1.0;
    vec2 offset = abs(uv.yx) / vec2(curvature.x, curvature.y);
    uv = uv + uv * offset * offset;
    uv = uv * 0.5 + 0.5;
    return uv;
}

vec4 vignetteIntensity(vec2 uv, vec2 resolution, float opacity)
{
    float intensity = uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y);
    return vec4(vec3(clamp(pow((resolution.x / 4.0) * intensity, opacity), 0.0, 1.0)), 1.0);
}

void main() {
    //vec2(v_coords.x / 2.0, v_coords.y / 2.0) + 0.5;
    vec2 uv = (vec2(v_texcoords.x, v_texcoords.y) + 1.0) / 2.0;
    uv = curveRemapUV(uv);

    vec2 p_size = vec2( 1.0 / u_resolution.x, 1.0 / u_resolution.y );

    //vec2 strength =  (uv - 0.5) * 2.0 * (1.0 / u_resolution) * aberration;
    vec2 strength =  vec2(p_size.x * aberration, 0.0);

    float dist_y = (mod(u_time * 20.0, u_resolution.y) / u_resolution.y) + (u_random / 50.0);
    float dist_w = p_size.y * 120.0;
    vec2 distortion = vec2(0.0, 0.0);
    //bool distortion_line = uv.y >= dist_y - dist_w && uv.y <= dist_y + dist_w ;

    //if ( distortion_line ) distortion.x = p_size.x * 5.0;

    vec4 base_col = vec4(1.0);
    base_col.r = texture2D( u_image, uv + strength + distortion ).r;
    base_col.g = texture2D( u_image, uv + distortion ).g;
    base_col.b = texture2D( u_image, uv - strength + distortion ).b; 
    //vec4 base_col   = texture2D( u_image, uv + distortion );
	//base_col.rgb	= texture2D( u_image, uv + strength + distortion ).rgb * vec3(1.0, 0.0, 0.5) +
	//				  texture2D( u_image, uv - strength + distortion ).rgb * vec3(0.0, 1.0, 0.5);

    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0)
    {
        base_col = black;
    }

    /*
    if ( distortion_line ) {
        base_col /= 2.0;
    }*/

    base_col *= vignetteIntensity(uv, u_resolution * 22.0, 1.5);

    gl_FragColor = base_col;// mix(black, base_col, vig_disable);
}