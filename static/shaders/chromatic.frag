precision highp float;

varying highp vec2 v_texcoords;
uniform sampler2D u_image;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_curv;
uniform float u_strength;

const vec4 black = vec4(0.0, 0.0, 0.0, 1.0);

//Contrast amount
#define CONTRAST 2.0
//Must be an even number
#define SAMPLES 30.0

vec2 curveRemapUV(vec2 uv)
{
    uv = uv * 2.0 - 1.0;
    vec2 offset = abs(uv.yx) / vec2(u_curv, u_curv);
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
    
    vec2 uv = (vec2(v_texcoords.x, v_texcoords.y) + 1.0) / 2.0;
    uv = curveRemapUV(uv);

    vec2 v = vec2( 1.0 / u_resolution.x * u_strength, 0.0);
	vec4 color_sum = vec4(0);
    vec4 weight_sum = vec4(0);
    
    //Iterate 20 times from 0 to 1
	for(float i = 0.0; i<=1.0; i+=1.0/SAMPLES)
    {
        vec2 coord = uv+0.04*(i-.5)*v;

        vec4 weight = vec4(i,1.-abs(i+i-1.),1.-i,.5);
        weight = mix(vec4(.5), weight,  CONTRAST);
        
        vec4 color = texture2D(u_image, coord);
		color_sum += color * color * weight;
        weight_sum += weight;
    }
    vec4 base_col = sqrt(color_sum / weight_sum);

    

    vec4 vignette = vignetteIntensity(uv, u_resolution * 22.0, 1.5);
    base_col.a = max(1.0 - vignette.r, base_col.a);
    base_col *= vignette;

    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0)
    {
        base_col = black;
    }

    gl_FragColor = base_col;
}