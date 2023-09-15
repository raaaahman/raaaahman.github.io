#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.1415926535

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.y;

  vec3 color1 = vec3(0.05, 0.35, 0.6);
  vec3 color2 = vec3(0.1, 0.25, 0.8);

  float pct = 0.5 + (cos(uv.x + u_time / 4.0) + sin(uv.y * 3.0 + u_time / 3.0)) / 4.0;
  vec3 color = mix(color1, color2, pct);

  pct = 1.0 - uv.y - (0.5 + sin(uv.x + u_time / 6.0) / 6.0);
  gl_FragColor = vec4(color * pct, pct);
}