import{hE as Qe,cm as Rt,hy as Et,u as d,cf as pe,bE as _,ds as he,gA as X,hp as Oe,bF as ue,ji as Dt,b7 as Xe,dz as Se,cc as Vt,cr as Ze,cl as me,ch as Je,cd as Ie,ck as It,dp as zt,M as Bt,op as Ft,oq as Gt,or as Ce,ak as ze,s as kt,jJ as Ke,ag as Ut,fv as Ye,ae as jt,jt as et,os as tt,kK as ve,ot as Wt,cn as Ht,cp as Be,on as Fe,jk as qt}from"./index-fdfa590d.js";import{e as Ae}from"./mat3f64-221ce671.js";import{o as fe,e as Qt}from"./mat4f64-65d35099.js";import{r as u,t as Xt,a as Zt,o as Ge,h as v,u as Jt,e as Kt,P as Yt,b as Le,f as P,g as ot,i as U,p as Y,j as ee,k as te,l as oe,s as B,n as G,q as eo,v as Ne,w as at,x as S,y as to,z as oo,A as ao,B as ae,C as ro,D as io,E as no,O as so,F as lo,G as T,H as Pe,I as co,J as uo,K as rt,L as _e,M as ke,N as mo,Q as po,R as it,S as nt,T as st,U as ge,V as lt,W as ct,X as dt,Y as ut,Z as mt,_ as xe,$ as Te,a0 as pt,a1 as ho,a2 as vo,a3 as fo,a4 as go,a5 as ht,a6 as xo,a7 as To,a8 as yo,a9 as bo,aa as Co,ab as wo,ac as Mo,ad as $o,ae as Oo,af as So,ag as Ao,ah as se,ai as Lo,aj as No,ak as q,al as vt,am as ft,an as le}from"./VertexColor.glsl-49a4fe71.js";import{c as Po,x as gt,L as _o,i as xt,O as Ro,E as Eo}from"./BufferView-bba8d347.js";import{r as Do,n as Vo,u as Ue}from"./vec32-cc735301.js";import{l as Io,n as zo,i as H,o as Bo,j as Fo,k as Go,u as je,t as ko,m as Uo}from"./DefaultMaterial_COLOR_GAMMA-e93f40c1.js";import{t as we}from"./resourceUtils-ebdc7923.js";import{e as jo}from"./byteSizeEstimations-7cf1c05d.js";import{t as Wo}from"./NestedMap-1b5db22e.js";import{t as Ho}from"./requestImageUtils-9d04786e.js";import{i as b,n as F,e as re}from"./basicInterfaces-bb952591.js";import{O as x}from"./VertexAttribute-9f2e53ec.js";import{H as qo}from"./InterleavedLayout-93f1345d.js";import{o as a,a as Q,W as Qo,c as Xo,A as Zo,h as Jo,l as Ko,b as Yo,_ as ea,d as ta,S as oa}from"./OrderIndependentTransparency-0ab46cc4.js";import{o as aa,r as ra}from"./doublePrecisionUtils-e3c3d0d8.js";import{n as z}from"./symbolColorUtils-fc80265f.js";import{I as We,D as He}from"./enums-b14466b3.js";function ia(e,t){const o=e.fragment;switch(o.code.add(a`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case A.None:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case A.View:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case A.WindingOrder:o.code.add(a`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Qe(t.doubleSidedMode);case A.COUNT:}}var A;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(A||(A={}));function na({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:r,emissiveTexture:s,emissiveFactor:i,occlusionTexture:l}){return e==null&&t==null&&s==null&&(i==null||Rt(i,Et))&&l==null&&(r==null||r===1)&&(o==null||o===1||o===0)}const Tt=[1,1,.5],sa=[0,.6,.2],la=[0,1,.2];function yt(e){e.vertex.code.add(a`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}let ca=class extends Xt{constructor(){super(...arguments),this.instancedDoublePrecision=!1}};function bt(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(x.MODELORIGINHI,"vec3"),e.attributes.add(x.MODELORIGINLO,"vec3"),e.attributes.add(x.MODEL,"mat3"),e.attributes.add(x.MODELNORMAL,"mat3"));const o=e.vertex;t.instancedDoublePrecision&&(o.include(Zt,t),o.uniforms.add(new Ge("viewOriginHi",(r,s)=>aa(pe(ce,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),ce)),new Ge("viewOriginLo",(r,s)=>ra(pe(ce,s.camera.viewInverseTransposeMatrix[3],s.camera.viewInverseTransposeMatrix[7],s.camera.viewInverseTransposeMatrix[11]),ce)))),o.code.add(a`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),o.code.add(a`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?a`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),o.code.add(a`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===v.Normal&&(Jt(o),o.code.add(a`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&o.code.add(a`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}d([u()],ca.prototype,"instancedDoublePrecision",void 0);const ce=_();function da(e){e.vertex.code.add(a`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${a.int(z.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${a.int(z.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${a.int(z.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${a.int(z.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ct(e,t){t.hasSymbolColors?(e.include(da),e.attributes.add(x.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(a`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Kt("colorMixMode",o=>Yt[o.colorMixMode])),e.vertex.code.add(a`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function ua(e){e.fragment.code.add(a`
    #define discardOrAdjustAlpha(color) { if (color.a < ${a.float(Le)}) { discard; } }
  `)}function k(e,t){ma(e,t,new P("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function ma(e,t,o){const r=e.fragment;switch(t.alphaDiscardMode!==b.Mask&&t.alphaDiscardMode!==b.MaskBlend||r.uniforms.add(o),t.alphaDiscardMode){case b.Blend:return e.include(ua);case b.Opaque:r.code.add(a`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case b.Mask:r.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case b.MaskBlend:e.fragment.code.add(a`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function wt(e,t){const{vertex:o,fragment:r}=e,s=t.hasModelTransformation;if(s){const l=Ae();o.uniforms.add(new ot("model",c=>c.modelTransformation??fe)),o.uniforms.add(new U("normalTransform",c=>(he(l,c.modelTransformation??fe),l)))}const i=t.hasColorTexture&&t.alphaDiscardMode!==b.Opaque;switch(t.output){case v.Depth:case v.Shadow:case v.ShadowHighlight:case v.ShadowExcludeHighlight:case v.ObjectAndLayerIdColor:Y(o,t),e.include(ee,t),e.include(te,t),e.include(oe,t),e.include(to,t),e.include(G,t),e.include(oo,t),ao(e),e.varyings.add("depth","float"),i&&r.uniforms.add(new B("tex",l=>l.texture)),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            ${s?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(k,t),r.code.add(a`
          void main(void) {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===v.ObjectAndLayerIdColor?a`outputObjectAndLayerIdColor();`:a`outputDepth(depth);`}
          }
        `);break;case v.Normal:{Y(o,t),e.include(ee,t),e.include(Ne,t),e.include(at,t),e.include(te,t),e.include(oe,t),i&&r.uniforms.add(new B("tex",c=>c.texture)),t.normalType===S.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const l=t.normalType===S.Attribute||t.normalType===S.Compressed;o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            ${s?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}

            ${l?a`vNormalWorld = ${s?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormalView(vvLocalNormal(normalModel()))"};`:a`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(G,t),e.include(k,t),r.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===S.ScreenDerivative?a`vec3 normal = screenDerivativeNormal(vPositionView);`:a`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case v.Highlight:Y(o,t),e.include(ee,t),e.include(te,t),e.include(oe,t),i&&r.uniforms.add(new B("tex",l=>l.texture)),o.code.add(a`
          void main(void) {
            vpos = calculateVPos();
            ${s?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(G,t),e.include(k,t),e.include(eo,t),r.code.add(a`
          void main() {
            discardBySlice(vpos);
            ${i?a`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function pa(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(x.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===A.WindingOrder?o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==ae.None&&(e.include(ro,t),o.uniforms.add(t.pbrTextureBindType===io.Pass?new B("normalTexture",r=>r.textureNormal):new no("normalTexture",r=>r.textureNormal)),o.code.add(a`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;
return tangentSpace * rawNormal;
}`))}function Re(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new B("ssaoTex",(r,s)=>s.ssaoHelper.colorTexture)),o.constants.add("blurSizePixelsInverse","float",1/so),o.code.add(a`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(a`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Ee(e){e.constants.add("ambientBoostFactor","float",lo)}function De(e){e.uniforms.add(new P("lightingGlobalFactor",(t,o)=>o.lighting.globalFactor))}function Mt(e,t){const o=e.fragment;switch(e.include(Re,t),t.pbrMode!==T.Disabled&&e.include(Pe,t),e.include(co,t),e.include(uo),o.code.add(a`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===T.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Ee(o),De(o),rt(o),o.code.add(a`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?a`normalize(vPosWorld)`:a`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),_e(o),o.code.add(a`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case T.Disabled:case T.WaterOnIntegratedMesh:case T.Water:e.include(ke),o.code.add(a`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case T.Normal:case T.Schematic:o.code.add(a`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(a`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new mo("hasFillLights",(r,s)=>s.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(a`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new P("lightingSpecularStrength",(r,s)=>s.lighting.mainLight.specularStrength),new P("lightingEnvironmentStrength",(r,s)=>s.lighting.mainLight.environmentStrength)),o.code.add(a`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(a`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===T.Schematic?a`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:a`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case T.Terrain:case T.TerrainWithWater:e.include(ke),o.code.add(a`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:Qe(t.pbrMode);case T.COUNT:}}function ha(e){e.vertex.uniforms.add(new U("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix!=null?t.colorTextureTransformMatrix:X())),e.varyings.add("colorUV","vec2"),e.vertex.code.add(a`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function va(e){e.vertex.uniforms.add(new U("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix!=null?t.normalTextureTransformMatrix:X())),e.varyings.add("normalUV","vec2"),e.vertex.code.add(a`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function fa(e){e.vertex.uniforms.add(new U("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix!=null?t.emissiveTextureTransformMatrix:X())),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(a`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ga(e){e.vertex.uniforms.add(new U("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix!=null?t.occlusionTextureTransformMatrix:X())),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(a`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function xa(e){e.vertex.uniforms.add(new U("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix!=null?t.metallicRoughnessTextureTransformMatrix:X())),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(a`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function ye(e){e.include(po),e.code.add(a`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${a.int(z.Multiply)}) {
        return allMixed;
      }
      if (mode == ${a.int(z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(z.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${a.int(z.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${a.int(z.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Ta(e){const t=new it,{vertex:o,fragment:r,varyings:s}=t;if(Y(o,e),t.include(nt),s.add("vpos","vec3"),t.include(oe,e),t.include(bt,e),t.include(st,e),e.hasColorTextureTransform&&t.include(ha),e.output===v.Color||e.output===v.Alpha){e.hasNormalTextureTransform&&t.include(va),e.hasEmissionTextureTransform&&t.include(fa),e.hasOcclusionTextureTransform&&t.include(ga),e.hasMetallicRoughnessTextureTransform&&t.include(xa),ge(o,e),t.include(Ne,e),t.include(ee,e);const i=e.normalType===S.Attribute||e.normalType===S.Compressed;i&&e.offsetBackfaces&&t.include(yt),t.include(pa,e),t.include(at,e),e.instancedColor&&t.attributes.add(x.INSTANCECOLOR,"vec4"),s.add("vPositionLocal","vec3"),t.include(te,e),t.include(lt,e),t.include(Ct,e),t.include(ct,e),o.uniforms.add(new dt("externalColor",c=>c.externalColor)),s.add("vcolorExt","vec4"),e.hasMultipassTerrain&&s.add("depth","float");const l=e.hasModelTransformation;if(l){const c=Ae();o.uniforms.add(new ot("model",n=>n.modelTransformation??fe)),o.uniforms.add(new U("normalTransform",n=>(he(c,n.modelTransformation??fe),c)))}o.code.add(a`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${a.float(Le)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          ${l?"vpos = (model * vec4(vpos, 1.0)).xyz;":""}
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?a`vNormalWorld = ${l?"normalize(normalTransform * dpNormal(vvLocalNormal(normalModel())))":"dpNormal(vvLocalNormal(normalModel()))"};`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?a`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?a`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?a`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?a`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?a`forwardMetallicRoughnessUV();`:""}
      }
    `)}switch(e.output){case v.Alpha:t.include(G,e),t.include(k,e),t.include(xe,e),r.uniforms.add(new P("opacity",i=>i.opacity),new P("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&r.uniforms.add(new B("tex",i=>i.texture)),r.include(ye),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case v.Color:t.include(G,e),t.include(Mt,e),t.include(Re,e),t.include(k,e),t.include(e.instancedDoublePrecision?ut:mt,e),t.include(xe,e),ge(r,e),r.uniforms.add(o.uniforms.get("localOrigin"),new Te("ambient",i=>i.ambient),new Te("diffuse",i=>i.diffuse),new P("opacity",i=>i.opacity),new P("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&r.uniforms.add(new B("tex",i=>i.texture)),t.include(pt,e),t.include(Pe,e),r.include(ye),t.include(ia,e),Ee(r),De(r),_e(r),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===S.ScreenDerivative?a`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:a`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===T.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?a`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?a`normalUV`:"vuv0"});`:a`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?a`normalize(posWorld);`:a`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?a`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===T.Normal||e.pbrMode===T.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?a`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Q.Color?a`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(wt,e),t}const ya=Object.freeze(Object.defineProperty({__proto__:null,build:Ta},Symbol.toStringTag,{value:"Module"}));let ba=class extends vo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Oe(Tt),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=F.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=ue(0,0,0),this.instancedDoublePrecision=!1,this.normalType=S.Attribute,this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=ue(.2,.2,.2),this.diffuse=ue(.8,.8,.8),this.externalColor=Dt(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=_(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=re.Less,this.textureAlphaMode=b.Blend,this.textureAlphaCutoff=fo,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=go.Occlude}},vr=class extends ho{constructor(){super(...arguments),this.origin=_(),this.slicePlaneLocalOrigin=this.origin}};class ie extends xo{initializeConfiguration(t,o){o.spherical=t.viewingMode===Se.Global,o.doublePrecisionRequiresObfuscation=t.rctx.driverTest.doublePrecisionRequiresObfuscation.result,o.textureCoordinateType=o.hasColorTexture||o.hasMetallicRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture||o.hasNormalTexture?ae.Default:ae.None,o.objectAndLayerIdColorInstanced=o.instanced}initializeProgram(t){return this._initializeProgram(t,ie.shader)}_initializeProgram(t,o){return new To(t.rctx,o.get().build(this.configuration),yo)}_convertDepthTestFunction(t){return t===re.Lequal?We.LEQUAL:We.LESS}_makePipeline(t,o){const r=this.configuration,s=t===Q.NONE,i=t===Q.FrontFace;return Qo({blending:r.output!==v.Color&&r.output!==v.Alpha||!r.transparent?null:s?Xo:Zo(t),culling:Ca(r)?Jo(r.cullFace):null,depthTest:{func:Ko(t,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(s||i)&&r.writeDepth?Yo:null,colorWrite:ea,stencilWrite:r.hasOccludees?bo:null,stencilTest:r.hasOccludees?o?Co:wo:null,polygonOffset:s||i?null:ta(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(t,o){return o?this._occludeePipelineState:super.getPipelineState(t,o)}}function Ca(e){return e.cullFace!==F.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}ie.shader=new ht(ya,()=>Xe(()=>import("./DefaultMaterial.glsl-c4a5794e.js"),["assets/DefaultMaterial.glsl-c4a5794e.js","assets/index-fdfa590d.js","assets/index-b7aeb234.css","assets/mat3f64-221ce671.js","assets/mat4f64-65d35099.js","assets/VertexColor.glsl-49a4fe71.js","assets/requestImageUtils-9d04786e.js","assets/basicInterfaces-bb952591.js","assets/enums-b14466b3.js","assets/Texture-49e8f2d7.js","assets/InterleavedLayout-93f1345d.js","assets/BufferView-bba8d347.js","assets/types-1305598a.js","assets/Indices-dca2f98a.js","assets/triangle-9156e780.js","assets/sphere-8d57d872.js","assets/quatf64-3363c48e.js","assets/lineSegment-360e478e.js","assets/VertexAttribute-9f2e53ec.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/OrderIndependentTransparency-0ab46cc4.js","assets/quat-95b41819.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-e943c837.js","assets/symbolColorUtils-fc80265f.js","assets/vec32-cc735301.js","assets/DefaultMaterial_COLOR_GAMMA-e93f40c1.js","assets/resourceUtils-ebdc7923.js","assets/byteSizeEstimations-7cf1c05d.js","assets/NestedMap-1b5db22e.js"]));class m extends Mo{constructor(){super(...arguments),this.output=v.Color,this.alphaDiscardMode=b.Opaque,this.doubleSidedMode=A.None,this.pbrMode=T.Disabled,this.cullFace=F.None,this.transparencyPassType=Q.NONE,this.normalType=S.Attribute,this.textureCoordinateType=ae.None,this.customDepthTest=re.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}d([u({count:v.COUNT})],m.prototype,"output",void 0),d([u({count:b.COUNT})],m.prototype,"alphaDiscardMode",void 0),d([u({count:A.COUNT})],m.prototype,"doubleSidedMode",void 0),d([u({count:T.COUNT})],m.prototype,"pbrMode",void 0),d([u({count:F.COUNT})],m.prototype,"cullFace",void 0),d([u({count:Q.COUNT})],m.prototype,"transparencyPassType",void 0),d([u({count:S.COUNT})],m.prototype,"normalType",void 0),d([u({count:ae.COUNT})],m.prototype,"textureCoordinateType",void 0),d([u({count:re.COUNT})],m.prototype,"customDepthTest",void 0),d([u()],m.prototype,"spherical",void 0),d([u()],m.prototype,"hasVertexColors",void 0),d([u()],m.prototype,"hasSymbolColors",void 0),d([u()],m.prototype,"hasVerticalOffset",void 0),d([u()],m.prototype,"hasSlicePlane",void 0),d([u()],m.prototype,"hasSliceHighlight",void 0),d([u()],m.prototype,"hasColorTexture",void 0),d([u()],m.prototype,"hasMetallicRoughnessTexture",void 0),d([u()],m.prototype,"hasEmissionTexture",void 0),d([u()],m.prototype,"hasOcclusionTexture",void 0),d([u()],m.prototype,"hasNormalTexture",void 0),d([u()],m.prototype,"hasScreenSizePerspective",void 0),d([u()],m.prototype,"hasVertexTangents",void 0),d([u()],m.prototype,"hasOccludees",void 0),d([u()],m.prototype,"hasMultipassTerrain",void 0),d([u()],m.prototype,"hasModelTransformation",void 0),d([u()],m.prototype,"offsetBackfaces",void 0),d([u()],m.prototype,"vvSize",void 0),d([u()],m.prototype,"vvColor",void 0),d([u()],m.prototype,"receiveShadows",void 0),d([u()],m.prototype,"receiveAmbientOcclusion",void 0),d([u()],m.prototype,"textureAlphaPremultiplied",void 0),d([u()],m.prototype,"instanced",void 0),d([u()],m.prototype,"instancedColor",void 0),d([u()],m.prototype,"objectAndLayerIdColorInstanced",void 0),d([u()],m.prototype,"instancedDoublePrecision",void 0),d([u()],m.prototype,"doublePrecisionRequiresObfuscation",void 0),d([u()],m.prototype,"writeDepth",void 0),d([u()],m.prototype,"transparent",void 0),d([u()],m.prototype,"enableOffset",void 0),d([u()],m.prototype,"cullAboveGround",void 0),d([u()],m.prototype,"snowCover",void 0),d([u()],m.prototype,"hasColorTextureTransform",void 0),d([u()],m.prototype,"hasEmissionTextureTransform",void 0),d([u()],m.prototype,"hasNormalTextureTransform",void 0),d([u()],m.prototype,"hasOcclusionTextureTransform",void 0),d([u()],m.prototype,"hasMetallicRoughnessTextureTransform",void 0),d([u({constValue:!0})],m.prototype,"hasVvInstancing",void 0),d([u({constValue:!1})],m.prototype,"useCustomDTRExponentForWater",void 0),d([u({constValue:!1})],m.prototype,"supportsTextureAtlas",void 0),d([u({constValue:!0})],m.prototype,"useFillLights",void 0);function wa(e){const t=new it,{vertex:o,fragment:r,varyings:s}=t;return Y(o,e),t.include(nt),s.add("vpos","vec3"),t.include(oe,e),t.include(bt,e),t.include(st,e),e.output!==v.Color&&e.output!==v.Alpha||(ge(t.vertex,e),t.include(Ne,e),t.include(ee,e),e.offsetBackfaces&&t.include(yt),e.instancedColor&&t.attributes.add(x.INSTANCECOLOR,"vec4"),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3"),e.hasMultipassTerrain&&s.add("depth","float"),t.include(te,e),t.include(lt,e),t.include(Ct,e),t.include(ct,e),o.uniforms.add(new dt("externalColor",i=>i.externalColor)),s.add("vcolorExt","vec4"),o.code.add(a`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${a.float(Le)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?a`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===v.Alpha&&(t.include(G,e),t.include(k,e),t.include(xe,e),r.uniforms.add(new P("opacity",i=>i.opacity),new P("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&r.uniforms.add(new B("tex",i=>i.texture)),r.include(ye),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?a`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===v.Color&&(t.include(G,e),t.include(Mt,e),t.include(Re,e),t.include(k,e),t.include(e.instancedDoublePrecision?ut:mt,e),t.include(xe,e),ge(t.fragment,e),rt(r),Ee(r),De(r),r.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new Te("ambient",i=>i.ambient),new Te("diffuse",i=>i.diffuse),new P("opacity",i=>i.opacity),new P("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&r.uniforms.add(new B("tex",i=>i.texture)),t.include(pt,e),t.include(Pe,e),r.include(ye),_e(r),r.code.add(a`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?a`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?a`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?a`colorUV`:a`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===T.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?a`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:a`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?a`albedo = mix(albedo, vec3(1), 0.9);`:a``}
        ${a`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===T.Normal||e.pbrMode===T.Schematic?e.spherical?a`vec3 normalGround = normalize(vpos + localOrigin);`:a`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:a``}
        ${e.pbrMode===T.Normal||e.pbrMode===T.Schematic?a`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?a`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Q.Color?a`fragColor = premultiplyAlpha(fragColor);`:a``}
      }
    `)),t.include(wt,e),t}const Ma=Object.freeze(Object.defineProperty({__proto__:null,build:wa},Symbol.toStringTag,{value:"Module"}));let $t=class Ot extends ie{initializeConfiguration(t,o){super.initializeConfiguration(t,o),o.hasMetallicRoughnessTexture=!1,o.hasEmissionTexture=!1,o.hasOcclusionTexture=!1,o.hasNormalTexture=!1,o.hasModelTransformation=!1,o.normalType=S.Attribute,o.doubleSidedMode=A.WindingOrder,o.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,Ot.shader)}};$t.shader=new ht(Ma,()=>Xe(()=>import("./RealisticTree.glsl-36c439cb.js"),["assets/RealisticTree.glsl-36c439cb.js","assets/VertexColor.glsl-49a4fe71.js","assets/index-fdfa590d.js","assets/index-b7aeb234.css","assets/requestImageUtils-9d04786e.js","assets/basicInterfaces-bb952591.js","assets/enums-b14466b3.js","assets/Texture-49e8f2d7.js","assets/InterleavedLayout-93f1345d.js","assets/BufferView-bba8d347.js","assets/types-1305598a.js","assets/mat4f64-65d35099.js","assets/Indices-dca2f98a.js","assets/triangle-9156e780.js","assets/sphere-8d57d872.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/lineSegment-360e478e.js","assets/VertexAttribute-9f2e53ec.js","assets/doublePrecisionUtils-e3c3d0d8.js","assets/OrderIndependentTransparency-0ab46cc4.js","assets/quat-95b41819.js","assets/vec3f32-ad1dc57f.js","assets/VertexElementDescriptor-2925c6af.js","assets/VertexArrayObject-e943c837.js","assets/symbolColorUtils-fc80265f.js","assets/vec32-cc735301.js","assets/DefaultMaterial_COLOR_GAMMA-e93f40c1.js","assets/resourceUtils-ebdc7923.js","assets/byteSizeEstimations-7cf1c05d.js","assets/NestedMap-1b5db22e.js"]));let be=class extends $o{constructor(t){super(t,Sa),this.supportsEdges=!0,this._configuration=new m,this._vertexBufferLayout=Aa(this.parameters)}isVisibleForOutput(t){return t!==v.Shadow&&t!==v.ShadowExcludeHighlight&&t!==v.ShadowHighlight||this.parameters.castShadows}isVisible(){const t=this.parameters;if(!super.isVisible()||t.layerOpacity===0)return!1;const{hasInstancedColor:o,hasVertexColors:r,hasSymbolColors:s,vvColor:i}=t,l=t.colorMixMode==="replace",c=t.opacity>0,n=t.externalColor&&t.externalColor[3]>0,p=o||i||s;return r&&p?l||c:r?l?n:c:p?l||c:l?n:c}getConfiguration(t,o){return this._configuration.output=t,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?F.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=o.multipassTerrain.enabled,this._configuration.cullAboveGround=o.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,t!==v.Color&&t!==v.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=A.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?A.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?A.WindingOrder:A.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!o.ssaoHelper.active&&this.parameters.receiveSSAO,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?T.Schematic:T.Normal:T.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=o.transparencyPassType,this._configuration.enableOffset=o.camera.relativeElevation<oa,this._configuration.snowCover=this.hasSnowCover(o),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(t){return t.weather!=null&&t.weatherVisible&&t.weather.type==="snowy"&&t.weather.snowCover==="enabled"}intersect(t,o,r,s,i,l){if(this.parameters.verticalOffset!=null){const c=r.camera;pe($e,o[12],o[13],o[14]);let n=null;switch(r.viewingMode){case Se.Global:n=Ze(qe,$e);break;case Se.Local:n=Vt(qe,Pa)}let p=0;const h=me(_a,$e,c.eye),f=Je(h),y=Ie(h,h,1/f);let g=null;this.parameters.screenSizePerspective&&(g=It(n,y)),p+=Oo(c,f,this.parameters.verticalOffset,g??0,this.parameters.screenSizePerspective),Ie(n,n,p),zt(Me,n,r.transform.inverseRotation),s=me(La,s,Me),i=me(Na,i,Me)}So(t,r,s,i,Ao(r.verticalOffset),l)}requiresSlot(t,o){return o===v.Color||o===v.Alpha||o===v.Depth||o===v.Normal||o===v.Shadow||o===v.ShadowHighlight||o===v.ShadowExcludeHighlight||o===v.Highlight||o===v.ObjectAndLayerIdColor?t===(this.parameters.transparent?this.parameters.writeDepth?se.TRANSPARENT_MATERIAL:se.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:se.OPAQUE_MATERIAL)||t===se.DRAPED_MATERIAL:!1}createGLMaterial(t){return new $a(t)}createBufferWriter(){return new Lo(this._vertexBufferLayout)}},$a=class extends No{constructor(t){super({...t,...t.material.parameters})}_updateShadowState(t){t.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:t.shadowMap.enabled})}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:t.hasOccludees})}beginSlot(t){this._output!==v.Color&&this._output!==v.Alpha||(this._updateShadowState(t),this._updateOccludeeState(t));const o=this._material.parameters;this.updateTexture(o.textureId);const r=t.camera.viewInverseTransposeMatrix;return pe(o.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(o.treeRendering?$t:ie,t)}},Oa=class extends ba{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}};const Sa=new Oa;function Aa(e){const t=qo().vec3f(x.POSITION);return e.normalType===S.Compressed?t.vec2i16(x.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(x.NORMAL),e.hasVertexTangents&&t.vec4f(x.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(x.UV0),e.hasVertexColors&&t.vec4u8(x.COLOR),e.hasSymbolColors&&t.vec4u8(x.SYMBOLCOLOR),Bt("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(x.OBJECTANDLAYERIDCOLOR),t}const La=_(),Na=_(),Pa=ue(0,0,1),qe=_(),Me=_(),$e=_(),_a=_();function K(e){if(e==null)return null;const t=e.offset!=null?e.offset:Ft,o=e.rotation!=null?e.rotation:0,r=e.scale!=null?e.scale:Gt,s=Ce(1,0,0,0,1,0,t[0],t[1],1),i=Ce(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),l=Ce(r[0],0,0,0,r[1],0,0,0,1),c=X();return ze(c,i,l),ze(c,s,c),c}class Ra{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Ea{constructor(t,o,r){this.name=t,this.lodThreshold=o,this.pivotOffset=r,this.stageResources=new Ra,this.numberOfVertices=0}}const I=kt.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Da(e,t){const o=await Va(e,t),r=await Ga(o.textureDefinitions??{},t);let s=0;for(const i in r)if(r.hasOwnProperty(i)){const l=r[i];s+=l!=null&&l.image?l.image.width*l.image.height*4:0}return{resource:o,textures:r,size:s+jo(o)}}async function Va(e,t){const o=t!=null&&t.streamDataRequester;if(o)return Ia(e,o,t);const r=await Ke(Ut(e,t));if(r.ok===!0)return r.value.data;Ye(r.error),St(r.error)}async function Ia(e,t,o){const r=await Ke(t.request(e,"json",o));if(r.ok===!0)return r.value;Ye(r.error),St(r.error.details.url)}function St(e){throw new jt("",`Request for object resource failed: ${e}`)}function za(e){const t=e.params,o=t.topology;let r=!0;switch(t.vertexAttributes||(I.warn("Geometry must specify vertex attributes"),r=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const i=t.faces;if(i){if(t.vertexAttributes)for(const l in t.vertexAttributes){const c=i[l];c&&c.values?(c.valueType!=null&&c.valueType!=="UInt32"&&(I.warn(`Unsupported indexed geometry indices type '${c.valueType}', only UInt32 is currently supported`),r=!1),c.valuesPerElement!=null&&c.valuesPerElement!==1&&(I.warn(`Unsupported indexed geometry values per element '${c.valuesPerElement}', only 1 is currently supported`),r=!1)):(I.warn(`Indexed geometry does not specify face indices for '${l}' attribute`),r=!1)}}else I.warn("Indexed geometries must specify faces"),r=!1;break}default:I.warn(`Unsupported topology '${o}'`),r=!1}e.params.material||(I.warn("Geometry requires material"),r=!1);const s=e.params.vertexAttributes;for(const i in s)s[i].values||(I.warn("Geometries with externally defined attributes are not yet supported"),r=!1);return r}function Ba(e,t){var C;const o=new Array,r=new Array,s=new Array,i=new Wo,l=e.resource,c=et.parse(l.version||"1.0","wosr");Ua.validate(c);const n=l.model.name,p=l.model.geometries,h=l.materialDefinitions??{},f=e.textures;let y=0;const g=new Map;for(let M=0;M<p.length;M++){const $=p[M];if(!za($))continue;const V=ka($),R=$.params.vertexAttributes,E=[];for(const w in R){const D=R[w],W=D.values;E.push([w,new q(W,D.valuesPerElement,!0)])}const j=[];if($.params.topology!=="PerAttributeArray"){const w=$.params.faces;for(const D in w)j.push([D,w[D].values])}const L=V.texture,O=f&&f[L];if(O&&!g.has(L)){const{image:w,parameters:D}=O,W=new vt(w,D);r.push(W),g.set(L,W)}const ne=g.get(L),Z=ne?ne.id:void 0,N=V.material;let J=i.get(N,L);if(J==null){const w=h[N.substring(N.lastIndexOf("/")+1)].params;w.transparency===1&&(w.transparency=0);const D=O&&O.alphaChannelUsage,W=w.transparency>0||D==="transparency"||D==="maskAndTransparency",_t=O?At(O.alphaChannelUsage):void 0,Ve={ambient:Oe(w.diffuse),diffuse:Oe(w.diffuse),opacity:1-(w.transparency||0),transparent:W,textureAlphaMode:_t,textureAlphaCutoff:.33,textureId:Z,initTextureTransparent:!0,doubleSided:!0,cullFace:F.None,colorMixMode:w.externalColorMixMode||"tint",textureAlphaPremultiplied:(O==null?void 0:O.parameters.preMultiplyAlpha)??!1};t!=null&&t.materialParamsMixin&&Object.assign(Ve,t.materialParamsMixin),J=new be(Ve),i.set(N,L,J)}s.push(J);const Pt=new ft(J,E,j);y+=((C=j.find(w=>w[0]===x.POSITION))==null?void 0:C[1].length)??0,o.push(Pt)}return{engineResources:[{name:n,stageResources:{textures:r,materials:s,geometries:o},pivotOffset:l.model.pivotOffset,numberOfVertices:y,lodThreshold:null}],referenceBoundingBox:Fa(o)}}function Fa(e){const t=tt();return e.forEach(o=>{const r=o.boundingInfo;r!=null&&(ve(t,r.bbMin),ve(t,r.bbMax))}),t}async function Ga(e,t){const o=new Array;for(const i in e){const l=e[i],c=l.images[0].data;if(!c){I.warn("Externally referenced texture data is not yet supported");continue}const n=l.encoding+";base64,"+c,p="/textureDefinitions/"+i,h=l.channels==="rgba"?l.alphaChannelUsage||"transparency":"none",f={noUnpackFlip:!0,wrap:{s:He.REPEAT,t:He.REPEAT},preMultiplyAlpha:At(h)!==b.Opaque},y=t!=null&&t.disableTextures?Promise.resolve(null):Ho(n,t);o.push(y.then(g=>({refId:p,image:g,parameters:f,alphaChannelUsage:h})))}const r=await Promise.all(o),s={};for(const i of r)s[i.refId]=i;return s}function At(e){switch(e){case"mask":return b.Mask;case"maskAndTransparency":return b.MaskBlend;case"none":return b.Opaque;default:return b.Blend}}function ka(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Ua=new et(1,2,"wosr");async function ja(e,t){var f;const o=Lt(Wt(e));if(o.fileType==="wosr"){const y=await(t.cache?t.cache.loadWOSR(o.url,t):Da(o.url,t)),{engineResources:g,referenceBoundingBox:C}=Ba(y,t);return{lods:g,referenceBoundingBox:C,isEsriSymbolResource:!1,isWosr:!0}}const r=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):Io(new zo(t.streamDataRequester),o.url,t,t.usePBR)),s=(f=r.model.meta)==null?void 0:f.ESRI_proxyEllipsoid,i=r.meta.isEsriSymbolResource&&s!=null&&r.meta.uri.includes("/RealisticTrees/");i&&!r.customMeta.esriTreeRendering&&(r.customMeta.esriTreeRendering=!0,Qa(r,s));const l=!!t.usePBR,c=r.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:i,mrrFactors:[...la]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...Tt]},n={...t.materialParamsMixin,treeRendering:i},{engineResources:p,referenceBoundingBox:h}=Nt(r,c,n,t.skipHighLods&&o.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:p,referenceBoundingBox:h,isEsriSymbolResource:r.meta.isEsriSymbolResource,isWosr:!1}}function Lt(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:t[4]!=null?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Nt(e,t,o,r){const s=e.model,i=new Array,l=new Map,c=new Map,n=s.lods.length,p=tt();return s.lods.forEach((h,f)=>{const y=r.skipHighLods===!0&&(n>1&&f===0||n>3&&f===1)||r.skipHighLods===!1&&r.singleLodIndex!=null&&f!==r.singleLodIndex;if(y&&f!==0)return;const g=new Ea(h.name,h.lodThreshold,[0,0,0]);h.parts.forEach(C=>{const M=y?new be({}):Wa(s,C,g,t,o,l,c),{geometry:$,vertexCount:V}=Ha(C,M??new be({})),R=$.boundingInfo;R!=null&&f===0&&(ve(p,R.bbMin),ve(p,R.bbMax)),M!=null&&(g.stageResources.geometries.push($),g.numberOfVertices+=V)}),y||i.push(g)}),{engineResources:i,referenceBoundingBox:p}}function Wa(e,t,o,r,s,i,l){const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),n=e.materials.get(t.material),p=t.attributes.texCoord0!=null,h=t.attributes.normal!=null;if(n==null)return null;const f=qa(n.alphaMode);if(!i.has(c)){if(p){const L=(O,ne=!1)=>{if(O!=null&&!l.has(O)){const Z=e.textures.get(O);if(Z!=null){const N=Z.data;l.set(O,new vt(we(N)?N.data:N,{...Z.parameters,preMultiplyAlpha:!we(N)&&ne,encoding:we(N)&&N.encoding!=null?N.encoding:void 0}))}}};L(n.textureColor,f!==b.Opaque),L(n.textureNormal),L(n.textureOcclusion),L(n.textureEmissive),L(n.textureMetallicRoughness)}const g=n.color[0]**(1/H),C=n.color[1]**(1/H),M=n.color[2]**(1/H),$=n.emissiveFactor[0]**(1/H),V=n.emissiveFactor[1]**(1/H),R=n.emissiveFactor[2]**(1/H),E=n.textureColor!=null&&p?l.get(n.textureColor):null,j=na({normalTexture:n.textureNormal,metallicRoughnessTexture:n.textureMetallicRoughness,metallicFactor:n.metallicFactor,roughnessFactor:n.roughnessFactor,emissiveTexture:n.textureEmissive,emissiveFactor:n.emissiveFactor,occlusionTexture:n.textureOcclusion});i.set(c,new be({...r,transparent:f===b.Blend,customDepthTest:re.Lequal,textureAlphaMode:f,textureAlphaCutoff:n.alphaCutoff,diffuse:[g,C,M],ambient:[g,C,M],opacity:n.opacity,doubleSided:n.doubleSided,doubleSidedType:"winding-order",cullFace:n.doubleSided?F.None:F.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?S.Attribute:S.ScreenDerivative,castShadows:!0,receiveSSAO:!0,textureId:E!=null?E.id:void 0,colorMixMode:n.colorMixMode,normalTextureId:n.textureNormal!=null&&p?l.get(n.textureNormal).id:void 0,textureAlphaPremultiplied:E!=null&&!!E.parameters.preMultiplyAlpha,occlusionTextureId:n.textureOcclusion!=null&&p?l.get(n.textureOcclusion).id:void 0,emissiveTextureId:n.textureEmissive!=null&&p?l.get(n.textureEmissive).id:void 0,metallicRoughnessTextureId:n.textureMetallicRoughness!=null&&p?l.get(n.textureMetallicRoughness).id:void 0,emissiveFactor:[$,V,R],mrrFactors:j?[...sa]:[n.metallicFactor,n.roughnessFactor,r.mrrFactors[2]],isSchematic:j,colorTextureTransformMatrix:K(n.colorTextureTransform),normalTextureTransformMatrix:K(n.normalTextureTransform),occlusionTextureTransformMatrix:K(n.occlusionTextureTransform),emissiveTextureTransformMatrix:K(n.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:K(n.metallicRoughnessTextureTransform),...s}))}const y=i.get(c);if(o.stageResources.materials.push(y),p){const g=C=>{C!=null&&o.stageResources.textures.push(l.get(C))};g(n.textureColor),g(n.textureNormal),g(n.textureOcclusion),g(n.textureEmissive),g(n.textureMetallicRoughness)}return y}function Ha(e,t){const o=e.attributes.position.count,r=Bo(e.indices||o,e.primitiveType),s=le(3*o),{typedBuffer:i,typedBufferStride:l}=e.attributes.position;Do(s,i,e.transform,3,l);const c=[[x.POSITION,new q(s,3,!0)]],n=[[x.POSITION,r]];if(e.attributes.normal!=null){const p=le(3*o),{typedBuffer:h,typedBufferStride:f}=e.attributes.normal;he(de,e.transform),Vo(p,h,de,3,f),c.push([x.NORMAL,new q(p,3,!0)]),n.push([x.NORMAL,r])}if(e.attributes.tangent!=null){const p=le(4*o),{typedBuffer:h,typedBufferStride:f}=e.attributes.tangent;he(de,e.transform),Fo(p,h,de,4,f),c.push([x.TANGENT,new q(p,4,!0)]),n.push([x.TANGENT,r])}if(e.attributes.texCoord0!=null){const p=le(2*o),{typedBuffer:h,typedBufferStride:f}=e.attributes.texCoord0;Go(p,h,2,f),c.push([x.UV0,new q(p,2,!0)]),n.push([x.UV0,r])}if(e.attributes.color!=null){const p=new Uint8Array(4*o);e.attributes.color.elementCount===4?e.attributes.color instanceof Po?je(p,e.attributes.color,255):e.attributes.color instanceof gt?ko(p,e.attributes.color):e.attributes.color instanceof _o&&je(p,e.attributes.color,1/256):(p.fill(255),e.attributes.color instanceof xt?Ue(p,e.attributes.color,255,4):e.attributes.color instanceof Ro?Uo(p,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof Eo&&Ue(p,e.attributes.color,1/256,4)),c.push([x.COLOR,new q(p,4,!0)]),n.push([x.COLOR,r])}return{geometry:new ft(t,c,n),vertexCount:o}}const de=Ae();function qa(e){switch(e){case"BLEND":return b.Blend;case"MASK":return b.Mask;case"OPAQUE":case null:case void 0:return b.Opaque}}function Qa(e,t){for(let o=0;o<e.model.lods.length;++o){const r=e.model.lods[o];for(const s of r.parts){const i=s.attributes.normal;if(i==null)return;const l=s.attributes.position,c=l.count,n=_(),p=_(),h=_(),f=new Uint8Array(4*c),y=new Float64Array(3*c),g=Ht(Qt(),s.transform);let C=0,M=0;for(let $=0;$<c;$++){l.getVec($,p),i.getVec($,n),Be(p,p,s.transform),me(h,p,t.center),Fe(h,h,t.radius);const V=h[2],R=Je(h),E=Math.min(.45+.55*R*R,1);Fe(h,h,t.radius),g!==null&&Be(h,h,g),Ze(h,h),o+1!==e.model.lods.length&&e.model.lods.length>1&&qt(h,h,n,V>-1?.2:Math.min(-4*V-3.8,1)),y[C]=h[0],y[C+1]=h[1],y[C+2]=h[2],C+=3,f[M]=255*E,f[M+1]=255*E,f[M+2]=255*E,f[M+3]=255,M+=4}s.attributes.normal=new xt(y),s.attributes.color=new gt(f)}}}const yr=Object.freeze(Object.defineProperty({__proto__:null,fetch:ja,gltfToEngineResources:Nt,parseUrl:Lt},Symbol.toStringTag,{value:"Module"}));export{wa as I,vr as N,ja as X,Ta as Y,be as a,sa as b,De as c,ia as e,Ee as h,A as i,Tt as n,yr as o,Mt as p,K as r,Re as t,na as u};
