import{gB as x,bn as Ie,bi as Me,G as Ce,gU as Ue,bE as V,gA as J,cf as j,lW as Le,gG as ae,gH as ke,gE as $e,ls as Ne,lt as He,M as Q,k6 as qe,eA as oe,k8 as Ge,o as We,ou as Ve,ov as je,bq as Ke,jP as le,ow as Ye,ae as Xe,b7 as de,du as Qe,E as Je,bk as Ze,l as K,x as et,ao as ue,bh as tt,ag as he,ox as it}from"./index-a6c97245.js";import{h as rt}from"./CIMResourceManager-24be3cf1.js";import{t as st,a as nt,o as ce,h as _e,i as at}from"./Container-d687363b.js";import{i as ot}from"./BufferPool-17520c3d.js";import{T as P,E as C,S as L}from"./color-070b46a1.js";import{f as lt,n as $,g as q,w as A,b as dt,m as ut}from"./WGLContainer-0259ebc3.js";import{L as B}from"./enums-fb086c25.js";import{e as ht,a as W}from"./ProgramTemplate-bb165b15.js";import{n as U}from"./programUtils-21d4aebf.js";import{e as fe,r as ct,t as _t,a as ft,m as pt,Y as mt,n as gt,b as vt,c as bt}from"./MagnifierPrograms-11018748.js";import{d as Vr,y as jr}from"./MagnifierPrograms-11018748.js";import{u as Z,c as ee,x as M,i as te,n as xt}from"./VertexArrayObject-d7a3254f.js";import{R as v,E as H,F as ie,O as Y,I as re,L as D,C as pe,D as E,B as se,G as T,U as ne,P as wt}from"./enums-b14466b3.js";import{o as me,P as yt}from"./RenderingContext-583e952e.js";import{z as Tt,q as Ft,Q as Bt,E as Et,F as Ot,L as N,M as Rt,_ as Se,R as ge}from"./definitions-93bd9194.js";import{t as ve}from"./VertexElementDescriptor-2925c6af.js";import{e as O,T as k}from"./Texture-31c4f382.js";import{e as Pt}from"./imageUtils-c2d0d1ae.js";import{o as Yr}from"./GraphicsView2D-59288940.js";import{i as Qr}from"./GraphicContainer-64ab0250.js";import{t as be}from"./requestImageUtils-2f3ee55b.js";import"./fontUtils-543e6eef.js";import"./Rasterizer-0ccaf640.js";import"./cimAnalyzer-bcf3cdca.js";import"./BidiEngine-9a40f2f4.js";import"./GeometryUtils-984e8446.js";import"./enums-f1a6a48a.js";import"./alignmentUtils-ae955d28.js";import"./number-e491b09e.js";import"./Rect-ea14f53a.js";import"./callExpressionWithFeature-65793346.js";import"./quantizationUtils-13d96edf.js";import"./floatRGBA-f2fcae6c.js";import"./rasterizingUtils-4607c15e.js";import"./imageutils-fc337d4e.js";import"./EffectView-b76003f0.js";import"./AttributeStoreView-a75a8afe.js";import"./TiledDisplayObject-962ea01b.js";import"./visualVariablesUtils-78808dfe.js";import"./GeometryUtils-19fdb7c0.js";import"./ExpandedCIM-87f47b3e.js";import"./util-7b977ae4.js";import"./vec4f32-0d1b2306.js";import"./StyleDefinition-29c49b98.js";import"./config-1337d16e.js";import"./earcut-15ea0d28.js";import"./NestedMap-1b5db22e.js";import"./Matcher-d1c53dbe.js";import"./tileUtils-c2f19f52.js";import"./TurboLine-01d55ff3.js";import"./CircularArray-ef508845.js";import"./testSVGPremultipliedAlpha-f5b66613.js";import"./ComputedAttributeStorage-edb2e1e7.js";import"./arcadeTimeUtils-69f0c442.js";import"./centroid-8e8cfa47.js";import"./OrderIndependentTransparency-0ab46cc4.js";import"./basicInterfaces-bb952591.js";import"./doublePrecisionUtils-e3c3d0d8.js";import"./normalizeUtilsSync-377676c0.js";import"./projectionSupport-862a59d2.js";import"./json-48e3ea08.js";import"./BaseGraphicContainer-7b4806e9.js";import"./FeatureContainer-bace7d73.js";import"./TileContainer-88c4ebf1.js";import"./vec3f32-ad1dc57f.js";const Mt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};function Ct(l){let e=Mt;return l.split("/").forEach(t=>{e&&(e=e[t])}),e}const St=new ht(Ct);function R(l){return St.resolveIncludes(l)}const xe=l=>U({ID:l.id,PATTERN:l.pattern}),At={shaders:l=>({vertexShader:xe(l)+R("background/background.vert"),fragmentShader:xe(l)+R("background/background.frag")})},we=l=>U({ID:l.id}),Dt={shaders:l=>({vertexShader:we(l)+R("circle/circle.vert"),fragmentShader:we(l)+R("circle/circle.frag")})},ye=l=>U({ID:l.id,PATTERN:l.pattern}),zt={shaders:l=>({vertexShader:ye(l)+R("fill/fill.vert"),fragmentShader:ye(l)+R("fill/fill.frag")})},Te=l=>U({ID:l.id}),It={shaders:l=>({vertexShader:Te(l)+R("outline/outline.vert"),fragmentShader:Te(l)+R("outline/outline.frag")})},Fe=l=>U({ID:l.id,SDF:l.sdf}),Ut={shaders:l=>({vertexShader:Fe(l)+R("icon/icon.vert"),fragmentShader:Fe(l)+R("icon/icon.frag")})},Be=l=>U({ID:l.id,PATTERN:l.pattern,SDF:l.sdf}),Lt={shaders:l=>({vertexShader:Be(l)+R("line/line.vert"),fragmentShader:Be(l)+R("line/line.frag")})},Ee=l=>U({ID:l.id}),kt={shaders:l=>({vertexShader:Ee(l)+R("text/text.vert"),fragmentShader:Ee(l)+R("text/text.frag")})};let $t=class{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,t,i){const r=t.key<<3|this._getMaterialOptionsValue(t.type,i);if(this._programByKey.has(r))return this._programByKey.get(r);const n=this._getProgramTemplate(t.type),{shaders:s}=n,{vertexShader:a,fragmentShader:o}=s(i),d=t.getShaderHeader(),u=t.getShaderMain(),h=a.replace("#pragma header",d).replace("#pragma main",u),_=e.programCache.acquire(h,o,t.getAttributeLocations());return this._programByKey.set(r,_),_}_getMaterialOptionsValue(e,t){switch(e){case B.BACKGROUND:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case B.FILL:{const i=t;return(i.pattern?1:0)<<1|(i.id?1:0)}case B.OUTLINE:return t.id?1:0;case B.LINE:{const i=t;return(i.sdf?1:0)<<2|(i.pattern?1:0)<<1|(i.id?1:0)}case B.ICON:{const i=t;return(i.sdf?1:0)<<1|(i.id?1:0)}case B.CIRCLE:return t.id?1:0;case B.TEXT:return t.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case B.BACKGROUND:return At;case B.CIRCLE:return Dt;case B.FILL:return zt;case B.ICON:return Ut;case B.LINE:return Lt;case B.OUTLINE:return It;case B.TEXT:return kt;default:return null}}},Ae=class{constructor(){this._initialized=!1}dispose(){this._program=x(this._program),this._vertexArrayObject=x(this._vertexArrayObject)}render(e,t,i,r){e&&(this._initialized||this._initialize(e),e.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),e.bindVAO(this._vertexArrayObject),e.useProgram(this._program),t.setSamplingMode(i),e.bindTexture(t,0),this._program.setUniform1i("u_tex",0),this._program.setUniform1f("u_opacity",r),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindTexture(null,0),e.bindVAO())}_initialize(e){if(this._initialized)return!0;const t=W(e,fe);if(!t)return!1;const i=new Int8Array(16);i[0]=-1,i[1]=-1,i[2]=0,i[3]=0,i[4]=1,i[5]=-1,i[6]=1,i[7]=0,i[8]=-1,i[9]=1,i[10]=0,i[11]=1,i[12]=1,i[13]=1,i[14]=1,i[15]=1;const r=fe.attributes,n=new Z(e,r,lt,{geometry:ee.createVertex(e,ie.STATIC_DRAW,i)});return this._program=t,this._vertexArrayObject=n,this._initialized=!0,!0}};const De=l=>l===P.HITTEST||l===P.LABEL_ALPHA,Nt=l=>(De(l)?1:0)|(l===P.HIGHLIGHT?2:0),Ht=({rendererInfo:l,drawPhase:e},t,i)=>`${t.getVariationHash()}-${Nt(e)}-${l.getVariationHash()}-${i!=null&&i.join(".")}`,qt=(l,e,t,i={})=>{if(i={...i,...e.getVariation(),...l.rendererInfo.getVariation(),highlight:l.drawPhase===P.HIGHLIGHT,id:De(l.drawPhase)},t!=null)for(const r of t)i[r]=!0;return i};let Gt=class{constructor(e){this._rctx=e,this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getProgram(e,t=[]){const i=e.vsPath+"."+e.fsPath+JSON.stringify(t);if(this._programByKey.has(i))return this._programByKey.get(i);const r={...t.map(u=>typeof u=="string"?{name:u,value:!0}:u).reduce((u,h)=>({...u,[h.name]:h.value}),{})},{vsPath:n,fsPath:s,attributes:a}=e,o=me(n,s,a,r),d=this._rctx.programCache.acquire(o.shaders.vertexShader,o.shaders.fragmentShader,o.attributes);if(!d)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(i,d),d}getMaterialProgram(e,t,i,r,n){const s=Ht(e,t,n);if(this._programByKey.has(s))return this._programByKey.get(s);const a=qt(e,t,n,{ignoresSamplerPrecision:e.context.driverTest.ignoresSamplerPrecision.result}),o=me(i,i,r,a),d=this._rctx.programCache.acquire(o.shaders.vertexShader,o.shaders.fragmentShader,o.attributes);if(!d)throw new Error("Unable to get program for key: ${key}");return this._programByKey.set(s,d),d}},Wt=class{constructor(e,t){this._queue=[],this._context=e,this._refreshable=t}destroy(){this._queue=[]}enqueueTextureUpdate(e,t){const i=Ie(),r=e,n=Ft,s=Math.ceil(r.height/n);if(Me(t),this._context.type===Ce.WEBGL1)this._queue.push({type:"no-chunk",request:e,resolver:i,options:t});else for(let a=0;a<s;a++){const o=a*n,d=a===s-1,u=d?r.height-n*a:n;this._queue.push({type:"chunk",request:e,resolver:i,chunk:a,chunkOffset:o,destHeight:u,chunkIsLast:d,options:t})}return Ue(t,a=>i.reject(a)),i.promise}upload(){let e=0;for(;this._queue.length;){const t=performance.now(),i=this._queue.shift();if(i){if(i.options.signal!=null&&i.options.signal.aborted)continue;switch(i.type){case"chunk":this._uploadChunk(i);break;case"no-chunk":this._uploadNoChunk(i)}const r=performance.now()-t;if(e+=r,e+r>=Tt)break}}this._queue.length&&this._refreshable.requestRender()}_uploadChunk(e){const{request:t,resolver:i,chunkOffset:r,chunkIsLast:n,destHeight:s}=e,{data:a,texture:o,width:d}=t;a!=null&&(o.updateData(0,0,r,d,s,a,r),n&&i.resolve())}_uploadNoChunk(e){const{request:t,resolver:i}=e,{data:r,texture:n}=t;n.setData(r),i.resolve()}};const Vt=Ne(-.5,-.5);let jt=class{constructor(){this._centerNdc=V(),this._pxToNdc=V(),this._worldDimensionsPx=V(),this._mat3=J(),this._initialized=!1}dispose(){this._program=x(this._program),this._quad=x(this._quad)}render(e,t){const{context:i}=e;return!!this._updateGeometry(e,t)&&(this._initialized||this._initialize(i),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setColorMask(!1,!1,!1,!1),i.setBlendingEnabled(!1),i.setStencilOp(Y.KEEP,Y.KEEP,Y.REPLACE),i.setStencilFunction(re.ALWAYS,1,255),i.setStencilTestEnabled(!0),i.useProgram(this._program),this._program.setUniformMatrix3fv("u_worldExtent",this._mat3),this._quad.draw(),this._quad.unbind(),!0)}_initialize(e){if(this._initialized)return;const t=W(e,ct);t&&(this._program=t,this._quad=new $(e,[0,0,1,0,0,1,1,1]),this._initialized=!0)}_updateGeometry(e,t){const{state:i,pixelRatio:r}=e,{size:n,rotation:s}=i,a=Math.round(n[0]*r),o=Math.round(n[1]*r);if(!i.spatialReference.isWrappable)return!1;const d=He(s),u=Math.abs(Math.cos(d)),h=Math.abs(Math.sin(d)),_=Math.round(a*u+o*h),m=Math.round(i.worldScreenWidth);if(_<=m)return!1;const f=a*h+o*u,p=m*r,b=(t.left-t.right)*r/a,g=(t.bottom-t.top)*r/o;j(this._worldDimensionsPx,p,f,1),j(this._pxToNdc,2/a,-2/o,1),j(this._centerNdc,b,g,1);const c=this._mat3;return Le(c,this._centerNdc),ae(c,c,this._pxToNdc),s!==0&&ke(c,c,d),ae(c,c,this._worldDimensionsPx),$e(c,c,Vt),!0}},Kt=class extends q{constructor(){super(...arguments),this.defines=[],this._desc={vsPath:"fx/integrate",fsPath:"fx/integrate",attributes:new Map([["a_position",0]])}}dispose(){this._quad&&this._quad.dispose()}bind(){}unbind(){}draw(e,t){if(!(t!=null&&t.size))return;const{context:i,renderingOptions:r}=e;this._quad||(this._quad=new $(i,[0,0,1,0,0,1,1,1]));const n=i.getBoundFramebufferObject(),{x:s,y:a,width:o,height:d}=i.getViewport();t.bindTextures(i);const u=t.getBlock(Bt);if(u==null)return;const h=u.getFBO(i),_=u.getFBO(i,1);i.setViewport(0,0,t.size,t.size),this._computeDelta(e,_,r.labelsAnimationTime),this._updateAnimationState(e,_,h),i.bindFramebuffer(n),i.setViewport(s,a,o,d)}_computeDelta(e,t,i){const{context:r,painter:n,displayLevel:s}=e,a=n.materialManager.getProgram(this._desc,["delta"]);r.bindFramebuffer(t),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),r.useProgram(a);const o=Q("featurelayer-animation-enabled")?i:1;a.setUniform1i("u_maskTexture",Et),a.setUniform1i("u_sourceTexture",Ot),a.setUniform1f("u_timeDelta",e.deltaTime),a.setUniform1f("u_animationTime",o),a.setUniform1f("u_zoomLevel",Math.round(10*s)),this._quad.draw()}_updateAnimationState(e,t,i){const{context:r,painter:n}=e,s=n.materialManager.getProgram(this._desc,["update"]);r.bindTexture(t.colorTexture,1),r.useProgram(s),s.setUniform1i("u_sourceTexture",1),r.bindFramebuffer(i),r.setClearColor(0,0,0,0),r.clear(r.gl.COLOR_BUFFER_BIT),this._quad.draw()}};class Oe extends q{constructor(e){super(),this.name=this.constructor.name,this.defines=[e]}dispose(){}bind({context:e,painter:t}){this._prev=e.getBoundFramebufferObject();const{width:i,height:r}=e.getViewport(),n=t.getFbos(i,r).effect0;e.bindFramebuffer(n),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind(){}draw(e,t){const{context:i,painter:r}=e,n=r.getPostProcessingEffects(t),s=i.getBoundFramebufferObject();for(const{postProcessingEffect:a,effect:o}of n)a.draw(e,s,o);i.bindFramebuffer(this._prev),i.setStencilTestEnabled(!1),r.blitTexture(i,s.colorTexture,D.NEAREST),i.setStencilTestEnabled(!0)}}let Yt=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources=null)}preBlur(e,t){e.bindTexture(t,N),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",st),e.bindVAO(this._resources.quadVAO),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindVAO()}finalBlur(e,t){e.bindTexture(t,N),e.useProgram(this._resources.blurProgram),this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]),this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",nt),e.bindVAO(this._resources.quadVAO),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindVAO()}renderHighlight(e,t,i){e.bindTexture(t,N),e.useProgram(this._resources.highlightProgram),i.applyHighlightOptions(e,this._resources.highlightProgram),e.bindVAO(this._resources.quadVAO),e.setBlendingEnabled(!0),e.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),e.drawArrays(H.TRIANGLE_STRIP,0,4),e.bindVAO()}_initialize(e,t,i){this._width=t,this._height=i;const r=ee.createVertex(e,ie.STATIC_DRAW,new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]).buffer),n=new Z(e,new Map([["a_position",0],["a_texcoord",1]]),{geometry:[new ve("a_position",2,pe.BYTE,0,4),new ve("a_texcoord",2,pe.UNSIGNED_BYTE,2,4)]},{geometry:r}),s=W(e,_t),a=W(e,ft);e.useProgram(s),s.setUniform1i("u_texture",N),s.setUniform1i("u_shade",Rt),s.setUniform1f("u_sigma",ce),e.useProgram(a),a.setUniform1i("u_texture",N),a.setUniform1f("u_sigma",ce),this._resources={quadGeometry:r,quadVAO:n,highlightProgram:s,blurProgram:a}}setup(e,t,i){this._resources?(this._width=t,this._height=i):this._initialize(e,t,i)}};function Re(l,e,t){const i=new O(e,t);return i.wrapMode=E.CLAMP_TO_EDGE,new M(l,i,new te(se.STENCIL_INDEX8,e,t))}let Xt=class{constructor(){this._width=void 0,this._height=void 0,this._resources=null}dispose(){this._resources&&(this._resources.sharedBlur1Fbo.dispose(),this._resources.sharedBlur2Fbo.dispose(),this._resources=qe(this._resources))}_initialize(e,t,i){this._width=t,this._height=i;const r=Re(e,t,i),n=Re(e,t,i);this._resources={sharedBlur1Fbo:r,sharedBlur2Fbo:n}}setup(e,t,i){!this._resources||this._width===t&&this._height===i||this.dispose(),this._resources||this._initialize(e,t,i)}get sharedBlur1Tex(){return this._resources.sharedBlur1Fbo.colorTexture}get sharedBlur1Fbo(){return this._resources.sharedBlur1Fbo}get sharedBlur2Tex(){return this._resources.sharedBlur2Fbo.colorTexture}get sharedBlur2Fbo(){return this._resources.sharedBlur2Fbo}};const I=4,G=4/I;let Qt=class extends q{constructor(){super(...arguments),this.defines=["highlight"],this._hlRenderer=new Yt,this._width=void 0,this._height=void 0,this._boundFBO=null,this._hlSurfaces=new Xt,this._adjustedWidth=void 0,this._adjustedHeight=void 0,this._blitRenderer=new Ae}dispose(){var e,t;(e=this._hlSurfaces)==null||e.dispose(),(t=this._hlRenderer)==null||t.dispose(),this._boundFBO=null}bind(e){const{context:t,painter:i}=e,{width:r,height:n}=t.getViewport(),s=i.getFbos(r,n).effect0;this.setup(e,r,n),t.bindFramebuffer(s),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT)}unbind(){}setup({context:e},t,i){this._width=t,this._height=i;const r=t%I,n=i%I;t+=r<I/2?-r:I-r,i+=n<I/2?-n:I-n,this._adjustedWidth=t,this._adjustedHeight=i,this._boundFBO=e.getBoundFramebufferObject();const s=Math.round(t*G),a=Math.round(i*G);this._hlRenderer.setup(e,s,a),this._hlSurfaces.setup(e,s,a)}draw(e){const{context:t,highlightGradient:i}=e;if(!i)return;const r=t.getBoundFramebufferObject();t.setViewport(0,0,this._adjustedWidth*G,this._adjustedHeight*G),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setStencilTestEnabled(!1),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._blitRenderer.render(t,r.colorTexture,D.NEAREST,1),t.setStencilTestEnabled(!1),t.setBlendingEnabled(!1),t.setColorMask(!1,!1,!1,!0),t.bindFramebuffer(this._hlSurfaces.sharedBlur2Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.preBlur(t,this._hlSurfaces.sharedBlur1Tex),t.bindFramebuffer(this._hlSurfaces.sharedBlur1Fbo),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT),this._hlRenderer.finalBlur(t,this._hlSurfaces.sharedBlur2Tex),t.bindFramebuffer(this._boundFBO),t.setBlendingEnabled(!0),t.setColorMask(!0,!0,!0,!0),t.setViewport(0,0,this._width,this._height),this._hlRenderer.renderHighlight(t,this._hlSurfaces.sharedBlur1Tex,i),this._boundFBO=null}},Jt=class extends q{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["hittest"]}dispose(){this._fbo!=null&&this._fbo.dispose()}createOptions({pixelRatio:e},t,i=Se){if(!t.length)return null;const r=t.shift(),n=r.x,s=r.y;return this._outstanding=r,{type:"hittest",distance:i*e,position:[n,s]}}bind(e){const{context:t,attributeView:i}=e;if(!i.size)return;const r=i.getBlock(ge);if(r==null)return;const n=r.getFBO(t);t.setViewport(0,0,i.size,i.size),t.bindFramebuffer(n),t.setColorMask(!0,!0,!0,!0),t.setClearColor(0,0,0,0),t.clear(t.gl.COLOR_BUFFER_BIT|t.gl.DEPTH_BUFFER_BIT)}unbind(e){}draw(e){if(this._outstanding==null)return;const t=this._outstanding;this._outstanding=null,this._resolve(e,t.resolvers)}async _resolve(e,t){const{context:i,attributeView:r}=e,n=r.getBlock(ge);if(n==null)return void t.forEach(u=>u.resolve([]));const s=n.getFBO(i),a=new Uint8Array(s.width*s.height*4);try{await s.readPixelsAsync(0,0,s.width,s.height,T.RGBA,ne.UNSIGNED_BYTE,a)}catch{return void t.forEach(h=>h.resolve([]))}const o=[];for(let u=0;u<a.length;u+=4){const h=a[u],_=a[u+3];h&&o.push({id:u/4,directHits:_})}o.sort((u,h)=>h.directHits===u.directHits?h.id-u.id:h.directHits-u.directHits);const d=o.map(u=>u.id);t.forEach(u=>u.resolve(d))}},Zt=class extends q{constructor(){super(...arguments),this.name=this.constructor.name,this.defines=["id"],this._lastSize=0,this._boundFBO=null}dispose(){this._fbo!=null&&this._fbo.dispose()}bind({context:e,painter:t}){const{width:i,height:r}=e.getViewport();this._boundFBO=e.getBoundFramebufferObject();const n=t.getFbos(i,r).effect0;e.bindFramebuffer(n),e.setColorMask(!0,!0,!0,!0),e.setClearColor(0,0,0,0),e.clear(e.gl.COLOR_BUFFER_BIT)}unbind({context:e}){e.bindFramebuffer(this._boundFBO),this._boundFBO=null}draw(e,t,i=2*Se){this._resolve(e,t,i)}async _resolve({context:e,state:t,pixelRatio:i},r,n){const s=e.getBoundFramebufferObject(),a=t.size[1]*i,o=Math.round(n*i),d=o/2,u=o/2;this._ensureBuffer(o),r.forEach(async(h,_)=>{const m=new Map,f=Math.floor(_.x*i-o/2),p=Math.floor(a-_.y*i-o/2);await s.readPixelsAsync(f,p,o,o,T.RGBA,ne.UNSIGNED_BYTE,this._buf);for(let g=0;g<this._buf32.length;g++){const c=this._buf32[g];if(c!==4294967295&&c!==0){const S=g%o,w=o-Math.floor(g/o),y=(d-S)*(d-S)+(u-w)*(u-w),F=m.has(c)?m.get(c):4294967295;m.set(c,Math.min(y,F))}}const b=Array.from(m).sort((g,c)=>g[1]-c[1]).map(g=>g[0]);h.resolve(b),r.delete(_)})}_ensureBuffer(e){this._lastSize!==e&&(this._lastSize=e,this._buf=new Uint8Array(4*e*e),this._buf32=new Uint32Array(this._buf.buffer))}};const X=5,ei=[1,0],ti=[0,1],ii=[1,.8,.6,.4,.2],ri=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];let si=class{constructor(){this._intensityFBO=null,this._compositeFBO=null,this._mipsFBOs=new Array(X),this._nMips=X,this._kernelSizeArray=[3,5,7,9,11],this._size=[0,0],this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){if(this._quad=x(this._quad),this._intensityFBO=x(this._intensityFBO),this._compositeFBO=x(this._compositeFBO),this._mipsFBOs){for(let e=0;e<this._nMips;e++)this._mipsFBOs[e]&&(this._mipsFBOs[e].horizontal.dispose(),this._mipsFBOs[e].vertical.dispose());this._mipsFBOs=null}}draw(e,t,i){const{width:r,height:n}=t,{context:s,painter:a}=e,{materialManager:o}=a,d=s.gl,u=this._programDesc,{strength:h,radius:_,threshold:m}=i;this._quad||(this._quad=new $(s,[-1,-1,1,-1,-1,1,1,1])),this._createOrResizeResources(e,r,n),s.setStencilTestEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setStencilWriteMask(0);const f=this._quad;f.bind(),s.bindFramebuffer(this._intensityFBO);const p=o.getProgram(u.luminosityHighPass);s.useProgram(p),s.bindTexture(t.colorTexture,0),p.setUniform1i("u_texture",0),p.setUniform3fv("u_defaultColor",[0,0,0]),p.setUniform1f("u_defaultOpacity",0),p.setUniform1f("u_luminosityThreshold",m),p.setUniform1f("u_smoothWidth",.01);const b=[Math.round(r/2),Math.round(n/2)];s.setViewport(0,0,b[0],b[1]),s.setClearColor(0,0,0,0),s.clear(d.COLOR_BUFFER_BIT),f.draw(),s.setBlendingEnabled(!1);let g=this._intensityFBO.colorTexture;for(let w=0;w<this._nMips;w++){const y=o.getProgram(u.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[w]}]);s.useProgram(y),s.bindTexture(g,w+1),y.setUniform1i("u_colorTexture",w+1),y.setUniform2fv("u_texSize",b),y.setUniform2fv("u_direction",ei),s.setViewport(0,0,b[0],b[1]);const F=this._mipsFBOs[w];s.bindFramebuffer(F.horizontal),f.draw(),g=F.horizontal.colorTexture,s.bindFramebuffer(F.vertical),s.bindTexture(g,w+1),y.setUniform2fv("u_direction",ti),f.draw(),g=F.vertical.colorTexture,b[0]=Math.round(b[0]/2),b[1]=Math.round(b[1]/2)}s.setViewport(0,0,r,n);const c=o.getProgram(u.composite,[{name:"nummips",value:X}]);s.bindFramebuffer(this._compositeFBO),s.useProgram(c),c.setUniform1f("u_bloomStrength",h),c.setUniform1f("u_bloomRadius",_),c.setUniform1fv("u_bloomFactors",ii),c.setUniform3fv("u_bloomTintColors",ri),s.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1),c.setUniform1i("u_blurTexture1",1),s.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2),c.setUniform1i("u_blurTexture2",2),s.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3),c.setUniform1i("u_blurTexture3",3),s.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4),c.setUniform1i("u_blurTexture4",4),s.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5),c.setUniform1i("u_blurTexture5",5),f.draw(),s.bindFramebuffer(t),s.setBlendingEnabled(!0);const S=o.getProgram(u.blit);s.useProgram(S),s.bindTexture(this._compositeFBO.colorTexture,6),S.setUniform1i("u_texture",6),s.setBlendFunction(v.ONE,v.ONE),f.draw(),f.unbind(),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0)}_createOrResizeResources(e,t,i){const{context:r}=e;if(this._compositeFBO&&this._size[0]===t&&this._size[1]===i)return;this._size[0]=t,this._size[1]=i;const n=[Math.round(t/2),Math.round(i/2)];if(this._compositeFBO)this._compositeFBO.resize(t,i);else{const s=new O(t,i);s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,this._compositeFBO=new M(r,s)}if(this._intensityFBO)this._intensityFBO.resize(n[0],n[1]);else{const s=new O(n[0],n[1]);s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,this._intensityFBO=new M(r,s)}for(let s=0;s<this._nMips;s++){if(this._mipsFBOs[s])this._mipsFBOs[s].horizontal.resize(n[0],n[1]),this._mipsFBOs[s].vertical.resize(n[0],n[1]);else{const a=new O(n[0],n[1]);a.internalFormat=T.RGBA,a.wrapMode=E.CLAMP_TO_EDGE,this._mipsFBOs[s]={horizontal:new M(r,a),vertical:new M(r,a)}}n[0]=Math.round(n[0]/2),n[1]=Math.round(n[1]/2)}}};const ni=[1,0],ai=[0,1];let oi=class{constructor(){this._blurFBO=null,this._size=[0,0],this._programDesc={gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},radialBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/radial-blur",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._blurFBO&&(this._blurFBO.dispose(),this._blurFBO=null)}draw(e,t,i){const{context:r}=e,{type:n,radius:s}=i;if(s===0)return;this._createOrResizeResources(e),this._quad||(this._quad=new $(r,[-1,-1,1,-1,-1,1,1,1]));const a=this._quad;a.bind(),n==="blur"?this._gaussianBlur(e,t,s):this._radialBlur(e,t),a.unbind()}_gaussianBlur(e,t,i){const{context:r,state:n,painter:s,pixelRatio:a}=e,{size:o}=n,{materialManager:d}=s,u=this._programDesc,h=this._quad,_=[Math.round(a*o[0]),Math.round(a*o[1])],m=this._blurFBO,f=d.getProgram(u.gaussianBlur,[{name:"radius",value:Math.ceil(i)}]);r.useProgram(f),r.setBlendingEnabled(!1),r.bindFramebuffer(m),r.bindTexture(t.colorTexture,4),f.setUniform1i("u_colorTexture",4),f.setUniform2fv("u_texSize",_),f.setUniform2fv("u_direction",ni),f.setUniform1f("u_sigma",i),h.draw(),r.bindFramebuffer(t),r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.bindTexture(m==null?void 0:m.colorTexture,5),f.setUniform1i("u_colorTexture",5),f.setUniform2fv("u_direction",ai),h.draw(),r.setBlendingEnabled(!0),r.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),r.setStencilTestEnabled(!0)}_radialBlur(e,t){const{context:i,painter:r}=e,{materialManager:n}=r,s=this._programDesc,a=this._quad,o=this._blurFBO;i.bindFramebuffer(o);const d=n.getProgram(s.radialBlur);i.useProgram(d),i.setBlendingEnabled(!1),i.bindTexture(t.colorTexture,4),d.setUniform1i("u_colorTexture",4),a.draw(),i.bindFramebuffer(t),i.setStencilWriteMask(0),i.setStencilTestEnabled(!1),i.setDepthWriteEnabled(!1),i.setDepthTestEnabled(!1),i.setBlendingEnabled(!0);const u=n.getProgram(s.blit);i.useProgram(u),i.bindTexture(o==null?void 0:o.colorTexture,5),u.setUniform1i("u_texture",5),i.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),a.draw()}_createOrResizeResources(e){const{context:t,state:i,pixelRatio:r}=e,{size:n}=i,s=Math.round(r*n[0]),a=Math.round(r*n[1]);if(!this._blurFBO||this._size[0]!==s||this._size[1]!==a)if(this._size[0]=s,this._size[1]=a,this._blurFBO)this._blurFBO.resize(s,a);else{const o=new O(s,a);o.internalFormat=T.RGBA,o.wrapMode=E.CLAMP_TO_EDGE,this._blurFBO=new M(t,o)}}};class li{constructor(){this._layerFBOTexture=null,this._size=[0,0],this._programDesc={vsPath:"post-processing/pp",fsPath:"post-processing/filterEffect",attributes:new Map([["a_position",0]])}}dispose(){this._layerFBOTexture=x(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:a}=e,{materialManager:o}=a,d=this._programDesc,u=this._quad,h=i.colorMatrix;u.bind();const _=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,_),s.setBlendingEnabled(!1),s.setStencilTestEnabled(!1);const m=o.getProgram(d);s.useProgram(m),s.bindTexture(_,2),m.setUniformMatrix4fv("u_coefficients",h),m.setUniform1i("u_colorTexture",2),u.draw(),s.setBlendingEnabled(!0),s.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),s.setStencilTestEnabled(!0),u.unbind()}_createOrResizeResources(e,t,i){const{context:r}=e;if(!this._layerFBOTexture||this._size[0]!==t||this._size[1]!==i){if(this._size[0]=t,this._size[1]=i,this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const n=new O;n.internalFormat=T.RGBA,n.wrapMode=E.CLAMP_TO_EDGE,n.width=t,n.height=i,this._layerFBOTexture=new k(r,n)}this._quad||(this._quad=new $(r,[-1,-1,1,-1,-1,1,1,1]))}}}const di=[1,0],ui=[0,1];class hi{constructor(){this._layerFBOTexture=null,this._horizontalBlurFBO=null,this._verticalBlurFBO=null,this._size=[0,0],this._quad=null,this._programDesc={blur:{vsPath:"post-processing/pp",fsPath:"post-processing/blur/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/drop-shadow/composite",attributes:new Map([["a_position",0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}dispose(){this._layerFBOTexture=x(this._layerFBOTexture),this._horizontalBlurFBO=x(this._horizontalBlurFBO),this._verticalBlurFBO=x(this._verticalBlurFBO)}draw(e,t,i){const{context:r,state:n,painter:s}=e,{materialManager:a}=s,o=this._programDesc,d=t.width,u=t.height,h=[Math.round(d),Math.round(u)],{blurRadius:_,offsetX:m,offsetY:f,color:p}=i,b=[oe(m),oe(f)];this._createOrResizeResources(e,d,u,h);const g=this._horizontalBlurFBO,c=this._verticalBlurFBO;r.setStencilWriteMask(0),r.setStencilTestEnabled(!1),r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1);const S=this._layerFBOTexture;t.copyToTexture(0,0,d,u,0,0,S),this._quad||(this._quad=new $(r,[-1,-1,1,-1,-1,1,1,1])),r.setViewport(0,0,h[0],h[1]);const w=this._quad;w.bind(),r.setBlendingEnabled(!1);const y=a.getProgram(o.blur,[{name:"radius",value:Math.ceil(_)}]);r.useProgram(y),r.bindFramebuffer(g),r.bindTexture(t.colorTexture,4),y.setUniform1i("u_colorTexture",4),y.setUniform2fv("u_texSize",h),y.setUniform2fv("u_direction",di),y.setUniform1f("u_sigma",_),w.draw(),r.bindFramebuffer(c),r.bindTexture(g==null?void 0:g.colorTexture,5),y.setUniform1i("u_colorTexture",5),y.setUniform2fv("u_direction",ui),w.draw(),r.bindFramebuffer(t),r.setViewport(0,0,d,u);const F=a.getProgram(o.composite);r.useProgram(F),r.bindTexture(c==null?void 0:c.colorTexture,2),F.setUniform1i("u_blurTexture",2),r.bindTexture(S,3),F.setUniform1i("u_layerFBOTexture",3),F.setUniform4fv("u_shadowColor",[p[3]*(p[0]/255),p[3]*(p[1]/255),p[3]*(p[2]/255),p[3]]),F.setUniformMatrix3fv("u_displayViewMat3",n.displayMat3),F.setUniform2fv("u_shadowOffset",b),w.draw(),r.setBlendingEnabled(!0),r.setStencilTestEnabled(!0),r.setBlendFunction(v.ONE,v.ONE_MINUS_SRC_ALPHA),w.unbind()}_createOrResizeResources(e,t,i,r){const{context:n}=e;if(!this._horizontalBlurFBO||this._size[0]!==t||this._size[1]!==i){if(this._size[0]=t,this._size[1]=i,this._horizontalBlurFBO)this._horizontalBlurFBO.resize(r[0],r[1]);else{const s=new O(r[0],r[1]);s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,this._horizontalBlurFBO=new M(n,s)}if(this._verticalBlurFBO)this._verticalBlurFBO.resize(r[0],r[1]);else{const s=new O(r[0],r[1]);s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,this._verticalBlurFBO=new M(n,s)}if(this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const s=new O;s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,s.width=t,s.height=i,this._layerFBOTexture=new k(n,s)}}}}class ci{constructor(){this._size=[0,0],this._layerFBOTexture=null}dispose(){this._layerFBOTexture=x(this._layerFBOTexture)}draw(e,t,i){const{width:r,height:n}=t;this._createOrResizeResources(e,r,n);const{context:s,painter:a}=e,{amount:o}=i,d=s.gl,u=this._layerFBOTexture;s.bindFramebuffer(t),t.copyToTexture(0,0,r,n,0,0,u),s.setBlendingEnabled(!0),s.setStencilTestEnabled(!1),s.setDepthTestEnabled(!1),s.setClearColor(0,0,0,0),s.clear(d.COLOR_BUFFER_BIT),a.blitTexture(s,u,D.NEAREST,o)}_createOrResizeResources(e,t,i){const{context:r}=e;if(!this._layerFBOTexture||this._size[0]!==t||this._size[1]!==i)if(this._size[0]=t,this._size[1]=i,this._layerFBOTexture)this._layerFBOTexture.resize(t,i);else{const n=new O;n.internalFormat=T.RGBA,n.wrapMode=E.CLAMP_TO_EDGE,n.samplingMode=D.NEAREST,n.width=t,n.height=i,this._layerFBOTexture=new k(r,n)}}}function _i(l){switch(l){case"bloom":case"blur":case"opacity":case"drop-shadow":return l;default:return"colorize"}}const fi={colorize:()=>new li,blur:()=>new oi,bloom:()=>new si,opacity:()=>new ci,"drop-shadow":()=>new hi};class pi{constructor(){this._effectMap=new Map}dispose(){this._effectMap.forEach(e=>e.dispose()),this._effectMap.clear()}getPostProcessingEffects(e){if(!e||e.length===0)return[];const t=[];for(const i of e){const r=_i(i.type);let n=this._effectMap.get(r);n||(n=fi[r](),this._effectMap.set(r,n)),t.push({postProcessingEffect:n,effect:i})}return t}}class mi{constructor(e,t){this.brushes=e,this.name=t.name,this.drawPhase=t.drawPhase||P.MAP,this._targetFn=t.target,this.effects=t.effects||[],this.enableDefaultDraw=t.enableDefaultDraw??(()=>!0),this.forceDrawByDisplayOrder=!!t.forceDrawByDisplayOrder}render(e){const{context:t,profiler:i}=e,r=this._targetFn(),n=this.drawPhase&e.drawPhase;if(i.recordPassStart(this.name),n){this.enableDefaultDraw()&&this._doRender(e,r),i.recordPassEnd();for(const s of this.effects){if(!s.enable())continue;const a=s.apply,o=s.args&&s.args(),d=t.getViewport(),u=t.getBoundFramebufferObject(),h=e.passOptions;this._bindEffect(e,a,o),this._doRender(e,r,a.defines),this._drawAndUnbindEffect(e,a,d,u,h,o)}}}_doRender(e,t,i){if(t==null)return;const{profiler:r,context:n}=e;if(this.forceDrawByDisplayOrder){for(const o of this.brushes){if(r.recordBrushStart(o.name),o.brushEffect!=null){const d=n.getViewport(),u=n.getBoundFramebufferObject(),h=e.passOptions;this._bindEffect(e,o.brushEffect),this._drawWithBrush(o,e,t,i),this._drawAndUnbindEffect(e,o.brushEffect,d,u,h)}else this._drawWithBrush(o,e,t,i);r.recordBrushEnd()}const s=t,a=e;a.attributeView.bindTextures(e.context);for(const o of s){if(!o.visible)continue;o.commit(a),a.context.setStencilFunction(re.EQUAL,o.stencilRef,255);const d=o.getGeometry(C.MARKER),u=o.getGeometry(C.TEXT);if(d!=null&&d.records&&u!=null&&u.records){const h=new Map,_=d.records.getCursor();for(;_.next();)h.set(_.id,[_.getDrawInfo(d,C.MARKER)]);const m=u.records.getCursor();for(;m.next();){const p=h.get(m.id),b=m.getDrawInfo(u,C.TEXT);p?p.push(b):h.set(m.id,[b])}const f=Array.from(h.entries()).sort(([p,b],[g,c])=>g-p);for(const[p,b]of f)for(const g of b){const c=a.painter.getBrush(g.geometryType,L.DEFAULT);c.prepareState(a,i),c.drawGeometry(a,o,g,i)}}else if(d){const h=a.painter.getBrush(C.MARKER,L.DEFAULT);h.prepareState(a,i),d.forEachCommand(_=>{h.drawGeometry(a,o,_,i)})}else if(u){const h=a.painter.getBrush(C.TEXT,L.DEFAULT);h.prepareState(a,i),u.forEachCommand(_=>{h.drawGeometry(a,o,_,i)})}}}else for(const s of this.brushes){if(r.recordBrushStart(s.name),s.brushEffect!=null){const a=n.getViewport(),o=n.getBoundFramebufferObject(),d=e.passOptions;this._bindEffect(e,s.brushEffect),this._drawWithBrush(s,e,t,i),this._drawAndUnbindEffect(e,s.brushEffect,a,o,d)}else this._drawWithBrush(s,e,t,i);r.recordBrushEnd()}}_drawWithBrush(e,t,i,r){Ge(i)?(e.prepareState(t,r),e.drawMany(t,i,r)):i.visible&&(e.prepareState(t,r),e.draw(t,i,r))}_bindEffect(e,t,i){const{profiler:r}=e;r.recordPassStart(this.name+"."+t.name),t.bind(e,i);const n=t.createOptions(e,i);e.passOptions=n}_drawAndUnbindEffect(e,t,i,r,n,s){const{profiler:a,context:o}=e;e.passOptions=n,a.recordBrushStart(t.name),t.draw(e,s),t.unbind(e,s),o.bindFramebuffer(r);const{x:d,y:u,width:h,height:_}=i;o.setViewport(d,u,h,_),a.recordBrushEnd(),a.recordPassEnd()}}function gi(l,e){switch(l){case C.LINE:return A.line;case C.TEXT:return A.text;case C.LABEL:return A.label;case C.FILL:return e===L.DOT_DENSITY?A.dotDensity:A.fill;case C.MARKER:switch(e){case L.HEATMAP:return A.heatmap;case L.PIE_CHART:return A.pieChart;default:return A.marker}}}class vi{constructor(e,t,i){this.context=e,this._blitRenderer=new Ae,this._worldExtentClipRenderer=new jt,this._isClippedToWorldExtent=!1,this._brushCache=new Map,this._lastWidth=null,this._lastHeight=null,this._prevFBO=null,this._vtlMaterialManager=new $t,this._blendEffect=new pt,this._stencilBuf=null,this._fbos=null,this._fboPool=[],this._renderTarget=null,this.effects={highlight:new Qt,hittest:new Jt,hittestVTL:new Zt,integrate:new Kt,insideEffect:new Oe("inside"),outsideEffect:new Oe("outside")},this.materialManager=new Gt(e),this.textureManager=new mt(t,i,e.type===Ce.WEBGL2),this.textureUploadManager=new Wt(e,t),this._effectsManager=new pi}get vectorTilesMaterialManager(){return this._vtlMaterialManager}getRenderTarget(){return this._renderTarget}setRenderTarget(e){this._renderTarget=e}getFbos(e,t){if(e!==this._lastWidth||t!==this._lastHeight){if(this._lastWidth=e,this._lastHeight=t,this._fbos){let n;for(n in this._fbos)this._fbos[n].resize(e,t);return this._fbos}const i=new O(e,t);i.samplingMode=D.NEAREST,i.wrapMode=E.CLAMP_TO_EDGE;const r=new te(se.DEPTH_STENCIL,e,t);this._stencilBuf=new xt(this.context,r),this._fbos={output:new M(this.context,i,this._stencilBuf),blend:new M(this.context,i,this._stencilBuf),effect0:new M(this.context,i,this._stencilBuf)}}return this._fbos}acquireFbo(e,t){let i;if(this._fboPool.length>0)i=this._fboPool.pop();else{const r=new O(e,t);r.samplingMode=D.NEAREST,r.wrapMode=E.CLAMP_TO_EDGE,i=new M(this.context,r,this._stencilBuf)}return i.width===e&&i.height===t||i.resize(e,t),i}releaseFbo(e){this._fboPool.push(e)}getSharedStencilBuffer(){return this._stencilBuf}beforeRenderLayers(e,t=null){const{width:i,height:r}=e.getViewport();this._prevFBO=e.getBoundFramebufferObject();const n=this.getFbos(i,r);if(e.bindFramebuffer(n==null?void 0:n.output),e.setColorMask(!0,!0,!0,!0),t!=null){const{r:s,g:a,b:o,a:d}=t;e.setClearColor(d*s/255,d*a/255,d*o/255,d)}else e.setClearColor(0,0,0,0);e.setDepthWriteEnabled(!0),e.setClearDepth(1),e.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.setDepthWriteEnabled(!1)}beforeRenderLayer(e,t,i){var d;const{context:r,blendMode:n,effects:s,requireFBO:a,drawPhase:o}=e;if(a||Pe(o,n,s,i))r.bindFramebuffer((d=this._fbos)==null?void 0:d.blend),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.setDepthWriteEnabled(!0),r.setClearDepth(1),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT),r.setDepthWriteEnabled(!1);else{const u=this._getOutputFBO();r.bindFramebuffer(u)}r.setDepthWriteEnabled(!1),r.setDepthTestEnabled(!1),r.setStencilTestEnabled(!0),r.setClearStencil(t),r.setStencilWriteMask(255),r.clear(r.gl.STENCIL_BUFFER_BIT)}compositeLayer(e,t){const{context:i,blendMode:r,effects:n,requireFBO:s,drawPhase:a}=e;if(s||Pe(a,r,n,t)){n!=null&&n.length>0&&a===P.MAP&&this._applyEffects(e,n);const o=this._getOutputFBO();i.bindFramebuffer(o),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),i.setBlendingEnabled(!0),i.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),i.setColorMask(!0,!0,!0,!0);const d=r==null||a===P.HIGHLIGHT?"normal":r,u=this._fbos;u!=null&&u.blend.colorTexture&&this._blendEffect.draw(e,u.blend.colorTexture,D.NEAREST,d,t)}}renderLayers(e){e.bindFramebuffer(this._prevFBO);const t=this._getOutputFBO();t&&(e.setDepthTestEnabled(!1),e.setStencilWriteMask(0),this._isClippedToWorldExtent?(e.setStencilTestEnabled(!0),e.setStencilFunction(re.EQUAL,1,255)):e.setStencilTestEnabled(!1),this.blitTexture(e,t.colorTexture,D.NEAREST))}prepareDisplay(e,t,i){const{context:r}=e;if(r.bindFramebuffer(this._prevFBO),r.setColorMask(!0,!0,!0,!0),t!=null){const{r:n,g:s,b:a,a:o}=t;r.setClearColor(o*n/255,o*s/255,o*a/255,o)}else r.setClearColor(0,0,0,0);r.setStencilWriteMask(255),r.setClearStencil(0),r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.STENCIL_BUFFER_BIT),this._isClippedToWorldExtent=this._worldExtentClipRenderer.render(e,i)}dispose(){if(this.materialManager.dispose(),this.textureManager.dispose(),this.textureUploadManager.destroy(),this._blitRenderer=x(this._blitRenderer),this._worldExtentClipRenderer=x(this._worldExtentClipRenderer),this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache.clear(),this._brushCache=null),this._fbos){let e;for(e in this._fbos)this._fbos[e]&&this._fbos[e].dispose()}for(const e of this._fboPool)e.dispose();if(this._fboPool.length=0,this.effects){let e;for(e in this.effects)this.effects[e]&&this.effects[e].dispose()}this._effectsManager.dispose(),this._vtlMaterialManager=x(this._vtlMaterialManager),this._prevFBO=null}getBrush(e,t){const i=gi(e,t);let r=this._brushCache.get(i);return r===void 0&&(r=new i,this._brushCache.set(i,r)),r}renderObject(e,t,i,r){const n=A[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.prepareState(e,r),s.draw(e,t,r)}renderObjects(e,t,i,r){const n=A[i];if(!n)return;let s=this._brushCache.get(n);s===void 0&&(s=new n,this._brushCache.set(n,s)),s.drawMany(e,t,r)}registerRenderPass(e){const t=e.brushes.map(i=>(this._brushCache.has(i)||this._brushCache.set(i,new i),this._brushCache.get(i)));return new mi(t,e)}blitTexture(e,t,i,r=1){e.setBlendingEnabled(!0),e.setBlendFunctionSeparate(v.ONE,v.ONE_MINUS_SRC_ALPHA,v.ONE,v.ONE_MINUS_SRC_ALPHA),e.setColorMask(!0,!0,!0,!0),this._blitRenderer.render(e,t,i,r)}getPostProcessingEffects(e){return this._effectsManager.getPostProcessingEffects(e)}_getOutputFBO(){var e;return this._renderTarget!=null?this._renderTarget:((e=this._fbos)==null?void 0:e.output)??null}_applyEffects(e,t){var s;const i=(s=this._fbos)==null?void 0:s.blend;if(!i)return;const{context:r}=e,n=this._effectsManager.getPostProcessingEffects(t);for(const{postProcessingEffect:a,effect:o}of n)r.bindFramebuffer(i),a.draw(e,i,o)}}function Pe(l,e,t,i){return l!==P.HIGHLIGHT&&(i!==1||e!=null&&e!=="normal"||t!=null&&t.length>0)}const bi=2e3;class Hr extends _e{constructor(e,t){super(),this._trash=new Set,this._renderRemainingTime=0,this._lastFrameRenderTime=0,this.renderRequested=!1,this.stage=this,this._stationary=!0;const{canvas:i=document.createElement("canvas"),alpha:r=!0,stencil:n=!0,contextOptions:s={}}=t;this._canvas=i;const a=We("2d",i,{alpha:r,antialias:!1,depth:!0,stencil:n});this.context=new yt(a??null,s),this.resourceManager=new rt,this.painter=new vi(this.context,this,this.resourceManager),Q("esri-2d-profiler")&&(this._debugOutput=document.createElement("div"),this._debugOutput.setAttribute("style","margin: 24px 64px; position: absolute; color: red;"),e.appendChild(this._debugOutput));const o=()=>this._highlightGradient;this._renderParameters={drawPhase:0,state:this.state,pixelRatio:window.devicePixelRatio,stationary:!1,globalOpacity:1,blendMode:null,deltaTime:-1,time:0,inFadeTransition:!1,effects:null,context:this.context,painter:this.painter,timeline:t.timeline||new Ve,renderingOptions:t.renderingOptions,requestRender:()=>this.requestRender(),allowDelayedRender:!1,requireFBO:!1,profiler:new gt(this.context,this._debugOutput),dataUploadCounter:0,get highlightGradient(){return o()}},this._taskHandle=je({render:d=>this.renderFrame(d)}),this._taskHandle.pause(),this._lostWebGLContextHandle=Ke(i,"webglcontextlost",d=>{this.emit("webgl-error",{error:new Xe("webgl-context-lost",d.statusMessage)})}),this._bufferPool=new ot,i.setAttribute("style","width: 100%; height:100%; display:block;"),e.appendChild(i)}destroy(){var e,t,i;this.removeAllChildren(),this._emptyTrash(),this._taskHandle=le(this._taskHandle),this._lostWebGLContextHandle=le(this._lostWebGLContextHandle),(e=this._canvas.parentNode)==null||e.removeChild(this._canvas),(i=(t=this._debugOutput)==null?void 0:t.parentNode)==null||i.removeChild(this._debugOutput),this._bufferPool.destroy(),this.resourceManager.destroy(),this.painter.dispose(),this.context.dispose(),this._canvas=null}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=e,this.requestRender()}get bufferPool(){return this._bufferPool}get renderingOptions(){return this._renderingOptions}set renderingOptions(e){this._renderingOptions=e,this.requestRender()}get state(){return this._state}set state(e){this._state=e,this.requestRender()}get stationary(){return this._stationary}set stationary(e){this._stationary!==e&&(this._stationary=e,this.requestRender())}trashDisplayObject(e){this._trash.add(e),this.requestRender()}untrashDisplayObject(e){return this._trash.delete(e)}requestRender(){this._renderRemainingTime=bi,this.renderRequested||(this.renderRequested=!0,this.emit("will-render"),this._taskHandle.resume())}renderFrame(e){const t=this._lastFrameRenderTime?e.time-this._lastFrameRenderTime:0;this._renderRemainingTime-=t,this._renderRemainingTime<=0&&this._taskHandle.pause(),this._lastFrameRenderTime=e.time,this.renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this._renderParameters.globalOpacity=1,this._renderParameters.time=e.time,this._renderParameters.deltaTime=e.deltaTime,this._renderParameters.effects=null,this.processRender(this._renderParameters),this._emptyTrash(),this.emit("post-render")}_createTransforms(){return{dvs:J()}}renderChildren(e){for(const t of this.children)t.beforeRender(e);this._renderChildren(this.children,e);for(const t of this.children)t.afterRender(e)}_renderChildren(e,t){const i=this.context;this.painter.textureUploadManager.upload(),i.resetInfo(),t.profiler.recordStart("drawLayers"),t.dataUploadCounter=0,t.drawPhase=P.MAP,this.painter.beforeRenderLayers(i,this.backgroundColor);for(const r of e)r.processRender(t);this.painter.prepareDisplay(t,this.backgroundColor,this.state.padding),this.painter.renderLayers(i),t.drawPhase=P.HIGHLIGHT,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);if(this.painter.renderLayers(i),this._isLabelDrawPhaseRequired(e)){t.drawPhase=P.LABEL,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);this.painter.renderLayers(i)}if(Q("esri-tiles-debug")){t.drawPhase=P.DEBUG,this.painter.beforeRenderLayers(i);for(const r of e)r.processRender(t);this.painter.renderLayers(i)}t.profiler.recordEnd("drawLayers"),i.logInfo()}doRender(e){const t=this.context,{state:i,pixelRatio:r}=e;this._resizeCanvas(e),t.setViewport(0,0,r*i.size[0],r*i.size[1]),t.setDepthWriteEnabled(!0),t.setStencilWriteMask(255),super.doRender(e)}async takeScreenshot(e){const t=Math.round(this.state.size[0]*e.resolutionScale),i=Math.round(this.state.size[1]*e.resolutionScale),r=e.resolutionScale,n=this.context,s=this._state.clone();if(e.rotation!=null){const b=s.viewpoint;s.viewpoint.rotation=e.rotation,s.viewpoint=b}const a={...this._renderParameters,drawPhase:null,globalOpacity:1,stationary:!0,state:s,pixelRatio:r,time:performance.now(),deltaTime:0,blendMode:null,effects:null,inFadeTransition:!1},o=dt(n.gl),d=new O(t,i);d.wrapMode=E.CLAMP_TO_EDGE,d.internalFormat=o?wt.RGBA8:T.RGBA,d.isImmutable=o;const u=new M(n,d,new te(se.DEPTH_STENCIL,t,i)),h=n.getBoundFramebufferObject(),_=n.getViewport();n.bindFramebuffer(u),n.setViewport(0,0,t,i),this._renderChildren(e.children,a);const m=this._readbackScreenshot(u,{...e.cropArea,y:i-(e.cropArea.y+e.cropArea.height)});n.bindFramebuffer(h),n.setViewport(_.x,_.y,_.width,_.height),this.requestRender();const f=await m;let p;return e.outputScale===1?p=f:(p=new ImageData(Math.round(f.width*e.outputScale),Math.round(f.height*e.outputScale)),Ye(f,p,!0)),u.dispose(),p}async _readbackScreenshot(e,t){const i=Pt(t.width,t.height,document.createElement("canvas"));return await e.readPixelsAsync(t.x,t.y,t.width,t.height,T.RGBA,ne.UNSIGNED_BYTE,new Uint8Array(i.data.buffer)),i}_resizeCanvas(e){const t=this._canvas,i=t.style,{state:{size:r},pixelRatio:n}=e,s=r[0],a=r[1],o=Math.round(s*n),d=Math.round(a*n);t.width===o&&t.height===d||(t.width=o,t.height=d),i.width=s+"px",i.height=a+"px"}_emptyTrash(){for(;this._trash.size>0;){const e=Array.from(this._trash);this._trash.clear();for(const t of e)t.processDetach()}}_isLabelDrawPhaseRequired(e){let t=!1;for(const i of e){if(!(i instanceof _e)){t=t||!1;break}if("hasLabels"in i&&i.hasLabels)return!0;t=t||this._isLabelDrawPhaseRequired(i.children)}return t}}async function xi(l){const e=de(()=>import("./mask-svg-023bbc42.js"),[]),t=de(()=>import("./overlay-svg-d62383f3.js"),[]),i=be((await e).default,{signal:l}),r=be((await t).default,{signal:l}),n={mask:await i,overlay:await r};return Me(l),n}class qr extends at{constructor(){super(),this._handles=new Qe,this._resourcePixelRatio=1,this.visible=!1}destroy(){this._handles=Je(this._handles),this._disposeRenderResources(),this._resourcesTask=Ze(this._resourcesTask)}get backgroundColor(){return this._backgroundColor}set backgroundColor(e){this._backgroundColor=e,this.requestRender()}get magnifier(){return this._magnifier}set magnifier(e){this._magnifier=e,this._handles.removeAll(),this._handles.add([K(()=>e.version,()=>{this.visible=e.visible&&e.position!=null&&e.size>0,this.requestRender()},et),K(()=>[e.maskUrl,e.overlayUrl],()=>this._reloadResources()),K(()=>e.size,()=>{this._disposeRenderResources(),this.requestRender()})])}_createTransforms(){return{dvs:J()}}doRender(e){const t=e.context;if(!this._resourcesTask)return void this._reloadResources();if(e.drawPhase!==P.MAP||!this._canRender())return;this._updateResources(e);const i=this._magnifier;if(i.position==null)return;const r=e.pixelRatio,n=i.size*r,s=1/i.factor,a=Math.ceil(s*n);this._readbackTexture.resize(a,a);const{size:o}=e.state,d=r*o[0],u=r*o[1],h=.5*a,_=.5*a,m=ue(r*i.position.x,h,d-h-1),f=ue(u-r*i.position.y,_,u-_-1);t.setBlendingEnabled(!0);const p=m-h,b=f-_,g=this._readbackTexture;t.bindTexture(g,0),t.gl.copyTexImage2D(g.descriptor.target,0,g.descriptor.pixelFormat,p,b,a,a,0);const c=this.backgroundColor,S=c?[c.a*c.r/255,c.a*c.g/255,c.a*c.b/255,c.a]:[1,1,1,1],w=(m+i.offset.x*r)/d*2-1,y=(f-i.offset.y*r)/u*2-1,F=n/d*2,ze=n/u*2,z=this._program;t.bindVAO(this._vertexArrayObject),t.bindTexture(this._overlayTexture,6),t.bindTexture(this._maskTexture,7),t.useProgram(z),z.setUniform4fv("u_background",S),z.setUniform1i("u_readbackTexture",0),z.setUniform1i("u_overlayTexture",6),z.setUniform1i("u_maskTexture",7),z.setUniform4f("u_drawPos",w,y,F,ze),z.setUniform1i("u_maskEnabled",i.maskEnabled?1:0),z.setUniform1i("u_overlayEnabled",i.overlayEnabled?1:0),t.setStencilTestEnabled(!1),t.setColorMask(!0,!0,!0,!0),t.drawArrays(H.TRIANGLE_STRIP,0,4),t.bindVAO()}_canRender(){return this.mask&&this.overlay&&this._magnifier!=null}_reloadResources(){this._resourcesTask&&this._resourcesTask.abort();const e=this._magnifier!=null?this._magnifier.maskUrl:null,t=this._magnifier!=null?this._magnifier.overlayUrl:null;this._resourcesTask=tt(async i=>{const r=e==null||t==null?xi(i):null,n=e!=null?he(e,{responseType:"image",signal:i}).then(d=>d.data):r.then(d=>d.mask),s=t!=null?he(t,{responseType:"image",signal:i}).then(d=>d.data):r.then(d=>d.overlay),[a,o]=await Promise.all([n,s]);this.mask=a,this.overlay=o,this._disposeRenderResources(),this.requestRender()})}_disposeRenderResources(){this._readbackTexture=x(this._readbackTexture),this._overlayTexture=x(this._overlayTexture),this._maskTexture=x(this._maskTexture),this._vertexArrayObject=x(this._vertexArrayObject),this._program=x(this._program)}_updateResources(e){if(e.pixelRatio!==this._resourcePixelRatio&&this._disposeRenderResources(),this._readbackTexture)return;const t=e.context;this._resourcePixelRatio=e.pixelRatio;const i=Math.ceil(this._magnifier.size*e.pixelRatio);this._program=vt(t);const r=new Uint16Array([0,1,0,0,1,1,1,0]),n=bt.attributes;this._vertexArrayObject=new Z(t,n,ut,{geometry:ee.createVertex(t,ie.STATIC_DRAW,r)}),this.overlay.width=i,this.overlay.height=i;const s=new O;s.internalFormat=T.RGBA,s.wrapMode=E.CLAMP_TO_EDGE,s.samplingMode=D.NEAREST,s.flipped=!0,s.preMultiplyAlpha=!it(this.overlay.src)||!e.context.driverTest.svgPremultipliesAlpha.result,this._overlayTexture=new k(t,s,this.overlay),this.mask.width=i,this.mask.height=i,s.pixelFormat=s.internalFormat=T.ALPHA,this._maskTexture=new k(t,s,this.mask);const a=1/this._magnifier.factor;s.pixelFormat=s.internalFormat=T.RGBA,s.width=s.height=Math.ceil(a*i),s.samplingMode=D.LINEAR,s.flipped=!1,this._readbackTexture=new k(t,s)}}export{Qr as GraphicContainer,Yr as GraphicsView2D,Vr as LabelManager,qr as MagnifierView2D,jr as MapViewNavigation,Hr as Stage};
