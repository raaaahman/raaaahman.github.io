#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.1415926535

uniform vec2 u_resolution;
uniform float u_time;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution.y;

  vec3 colorGreen = vec3(0.1, 0.65, 0.45);
  vec3 colorTeal = vec3(0.05, 0.35, 0.6);
  vec3 colorBlue = vec3(0.1, 0.25, 0.8);
  vec3 colorLightBlue = vec3(0.2, 0.45, 0.85);

  float pct = (cos(uv.x + u_time / 2.0) + sin(uv.y * 3.0 + u_time / 1.5)) / 2.0;
  vec3 color1 = mix(colorLightBlue, colorBlue, pct);
  float alpha1 = 1.0 - uv.y - (0.33 + sin(uv.x + u_time / 3.0) / 4.0);

  pct = 0.5 + cos(uv.x + uv.y + u_time / 2.0) / 2.0;
  vec3 color2 = mix(colorTeal, colorGreen, pct);
  vec2 center = vec2(1.0 + sin(u_time / 1.5), cos(u_time / 2.0) / 2.0);

  pct = uv.y + sin(u_time / 2.0) / 4.0 + cos(uv.x * PI / 2.0 + u_time / 3.0) / 4.0;
  float pct2 = uv.y * 2.0 + cos(u_time / 2.0) / 4.0 + sin(uv.x * PI + u_time / 3.0) / 4.0;
  float alpha2 = clamp(smoothstep(0.15 * (1.0 + sin(u_time / 4.0) / 4.0), 0.25, pct) - smoothstep(0.55, 0.75 * (1.0 + cos(u_time / 1.5) / 8.0), pct2), 0.0, 1.0);
  
  gl_FragColor = (vec4(color1 * alpha1, alpha1) + vec4(color2 * alpha2 / 3.0, alpha2 / 3.0)) / 2.0;
}