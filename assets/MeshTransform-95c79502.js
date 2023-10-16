import{cc as w,hk as d,hl as j,hm as I,hn as q,ho as B,u as a,v as s,bH as E,bE as F,hp as L,bF as O,cb as e,hq as k,cn as z,cp as m,hr as D,w as H}from"./index-a6c97245.js";import{e as $}from"./mat4f64-65d35099.js";import{v as h,y as P,x as T}from"./quat-7c737b79.js";import{e as y}from"./quatf64-3363c48e.js";function i(t=N){return[t[0],t[1],t[2],t[3]]}function c(t,o,n=i()){return w(n,t),n[3]=o,n}function f(t,o,n=i()){return h(l,t,p(t)),h(v,o,p(o)),P(l,v,l),_(n,d(T(n,l)))}function Q(t,o,n,b=i()){return c(j,t,u),c(I,o,A),c(q,n,M),f(u,A,u),f(u,M,b),b}function R(t){return t}function U(t){return t[3]}function p(t){return B(t[3])}function _(t,o){return t[3]=o,t}const N=[0,0,1,0],l=y(),v=y();i();const u=i(),A=i(),M=i();var x;let r=x=class extends E{constructor(t){super(t),this.translation=F(),this.rotationAxis=L(N),this.rotationAngle=0,this.scale=O(1,1,1)}get rotation(){return c(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=e(t),this.rotationAngle=U(t)}get localMatrix(){const t=$();return h(g,this.rotation,p(this.rotation)),k(t,g,this.translation,this.scale),t}get localMatrixInverse(){return z($(),this.localMatrix)}applyLocal(t,o){return m(o,t,this.localMatrix)}applyLocalInverse(t,o){return m(o,t,this.localMatrixInverse)}equals(t){return this===t||t!=null&&D(this.localMatrix,t.localMatrix)}clone(){const t={translation:e(this.translation),rotationAxis:e(this.rotationAxis),rotationAngle:this.rotationAngle,scale:e(this.scale)};return new x(t)}};a([s({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"translation",void 0),a([s({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAxis",void 0),a([s({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAngle",void 0),a([s({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"scale",void 0),a([s()],r.prototype,"rotation",null),a([s()],r.prototype,"localMatrix",null),a([s()],r.prototype,"localMatrixInverse",null),r=x=a([H("esri.geometry.support.MeshTransform")],r);const g=y(),S=r;export{S as N,U as b,f as g,i as h,Q as l,p as w,R as x};
