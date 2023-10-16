import{s as P,hy as x,hz as E,cm as N,dk as v,aQ as W,dl as d,hA as q,bF as L,ds as b,cn as Q,hB as k,h2 as D,hC as H}from"./index-a6c97245.js";import{e as I}from"./mat3f64-221ce671.js";import{o as h,e as O}from"./mat4f64-65d35099.js";import{c as S}from"./spatialReferenceEllipsoidUtils-e0e52451.js";import{t as $,o as J}from"./DoubleArray-96e88651.js";import{m as K}from"./MeshGeoreferencedRelativeVertexSpace-d7e61dbc.js";import{m as X,p as Y}from"./MeshLocalVertexSpace-074ee7fb.js";import{N as Z}from"./MeshTransform-95c79502.js";import{r as m,n as y}from"./vec32-8d32ec1b.js";import{E as U,j as V,v as nn,h as en,_ as tn,R as rn,M as on,O as an}from"./projection-81bc5b8c.js";function z(n,t){return n.isGeographic||n.isWebMercator&&((t==null?void 0:t.geographic)??!0)}function _n(n,t,e){const r=!n.isGeoreferenced;(e==null?void 0:e.geographic)!=null&&e.geographic!==r&&P.getLogger(t).warnOnce(`Specifying the 'geographic' parameter (${e.geographic}) for a Mesh vertex space of type "${n.type}" is not supported. This parameter will be ignored.`)}function A(n,t,e){return z(t.spatialReference,e)?fn(n,t,e):un(n,t,e)}function T(n,t,e,r){const{position:i,normal:o,tangent:a}=n;if(!t.isRelative)return{position:i,normal:o,tangent:a};const s=(e==null?void 0:e.localMatrix)??h;return A({position:m(new Float64Array(i.length),i,s),normal:o!=null?on(o,new Float32Array(o.length),s):null,tangent:a!=null?an(a,new Float32Array(a.length),s):null},t.getOriginPoint(r),{geographic:!t.isGeoreferenced})}function ln(n,t,e){if(e!=null&&e.useTransform){const{position:r,normal:i,tangent:o}=n,{x:a,y:s,z:c}=t,l=L(a,s,c??0);return{vertexAttributes:{position:r,normal:i,tangent:o},vertexSpace:e.geographic??1?new X({origin:l}):new K({origin:l}),transform:new Z}}return{vertexAttributes:A(n,t,e),vertexSpace:new Y,transform:null}}function w(n,t,e){return z(t.spatialReference,e)?hn(n,t,e):_(n,t,e)}function sn(n,t,e,r,i){if(!t.isRelative)return w(n,r,i);const{spatialReference:o}=r,a=T(n,t,e,o);return r.equals(t.getOriginPoint(o))?_(a,r,i):w(a,r,i)}function cn({positions:n,transform:t,vertexSpace:e,inSpatialReference:r,outSpatialReference:i,outPositions:o,local:a}){const s=e.isRelative?e.origin:x,c=e.isRelative?(t==null?void 0:t.localMatrix)??h:h;if(e.isGeoreferenced){const u=o??$(n.length);if(E(c,h)?J(u,n):m(u,n,c),!N(s,x)){const[B,C,G]=s;for(let g=0;g<u.length;g+=3)u[g]+=B,u[g+1]+=C,u[g+2]+=G}return v(u,r,0,u,i,0,u.length/3),u}const l=S(r),F=!a&&W(r,l)?l:r;d(r,s,f,F),q(f,f,c);const p=o??$(n.length);return m(p,n,f),v(p,F,0,p,i,0,p.length/3),p}function un(n,t,e){const r=new Float64Array(n.position.length),i=n.position,o=t.x,a=t.y,s=t.z??0,c=R(e?e.unit:null,t.spatialReference);for(let l=0;l<i.length;l+=3)r[l]=i[l]*c+o,r[l+1]=i[l+1]*c+a,r[l+2]=i[l+2]*c+s;return{position:r,normal:n.normal,tangent:n.tangent}}function fn(n,t,e){const r=t.spatialReference,i=M(t,e,f),o=new Float64Array(n.position.length),a=pn(n.position,i,r,o),s=b(j,i);return{position:a,normal:gn(a,o,n.normal,s,r),tangent:mn(a,o,n.tangent,s,r)}}function pn(n,t,e,r){m(r,n,t);const i=new Float64Array(n.length);return U(r,i,e)}function gn(n,t,e,r,i){if(e==null)return null;const o=new Float32Array(e.length);return y(o,e,r),V(o,n,t,i,o),o}function mn(n,t,e,r,i){if(e==null)return null;const o=new Float32Array(e.length);y(o,e,r,4);for(let a=3;a<o.length;a+=4)o[a]=e[a];return nn(o,n,t,i,o),o}function _(n,t,e){const r=new Float64Array(n.position.length),i=n.position,o=t.x,a=t.y,s=t.z??0,c=R(e?e.unit:null,t.spatialReference);for(let l=0;l<i.length;l+=3)r[l]=(i[l]-o)/c,r[l+1]=(i[l+1]-a)/c,r[l+2]=(i[l+2]-s)/c;return{position:r,normal:n.normal,tangent:n.tangent}}function hn(n,t,e){const r=t.spatialReference;M(t,e,f);const i=Q(Rn,f),o=new Float64Array(n.position.length),a=yn(n.position,r,i,o),s=b(j,i);return{position:a,normal:wn(n.normal,n.position,o,r,s),tangent:An(n.tangent,n.position,o,r,s)}}function M(n,t,e){d(n.spatialReference,[n.x,n.y,n.z??0],e,S(n.spatialReference));const r=R(t?t.unit:null,n.spatialReference);return k(e,e,[r,r,r]),e}function yn(n,t,e,r){const i=en(n,t,r),o=new Float64Array(i.length);return m(o,i,e),o}function wn(n,t,e,r,i){if(n==null)return null;const o=tn(n,t,e,r,new Float32Array(n.length));return y(o,o,i),o}function An(n,t,e,r,i){if(n==null)return null;const o=rn(n,t,e,r,new Float32Array(n.length));return y(o,o,i,4),o}function R(n,t){if(n==null)return 1;const e=D(t);return 1/H(e,"meters",n)}const f=O(),Rn=O(),j=I(),Mn=Object.freeze(Object.defineProperty({__proto__:null,georeference:A,georeferenceApplyTransform:T,georeferenceByTransform:ln,project:cn,ungeoreference:w,ungeoreferenceByTransform:sn},Symbol.toStringTag,{value:"Module"}));export{w as D,sn as E,cn as I,A as O,T,Mn as g,_n as o,ln as q,z as r};