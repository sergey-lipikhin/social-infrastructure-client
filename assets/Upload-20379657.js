import{a9 as h,m as w,bh as y,bi as p,bj as T,b7 as _,aA as b,ae as g,bk as k,u as r,v as u,w as v,bl as F,bm as $,bn as E,bo as P,bp as x,bq as d,br as A}from"./index-a6c97245.js";let a=class extends h{constructor(){super({}),this._uploadTask=null}destroy(){this.cancel()}get state(){const e=this._uploadTask;return e?e.finished?e.error?w(e.error)?"canceled":"error":"success":"pending":"default"}get result(){var e;return((e=this._uploadTask)==null?void 0:e.value)??null}get error(){var e;return((e=this._uploadTask)==null?void 0:e.error)??null}uploadTo(e){this.cancel(),this._uploadTask=y(async t=>{const o=await D(e);if(p(t),o.length===0)throw T();const s=(await _(()=>import("./Mesh-789ba28e.js"),["assets/Mesh-789ba28e.js","assets/index-a6c97245.js","assets/index-a3fce6eb.css","assets/MeshTransform-95c79502.js","assets/mat4f64-65d35099.js","assets/quat-7c737b79.js","assets/mat3f64-221ce671.js","assets/quatf64-3363c48e.js","assets/MeshComponent-7c12c075.js","assets/imageUtils-c2d0d1ae.js","assets/MeshGeoreferencedRelativeVertexSpace-d7e61dbc.js","assets/MeshLocalVertexSpace-074ee7fb.js","assets/triangulationUtils-4a253704.js","assets/earcut-15ea0d28.js","assets/DoubleArray-96e88651.js","assets/Indices-b766e722.js","assets/deduplicate-058a0b05.js","assets/georeference-5800a154.js","assets/spatialReferenceEllipsoidUtils-e0e52451.js","assets/vec32-8d32ec1b.js","assets/projection-81bc5b8c.js","assets/BufferView-c58f8e7f.js","assets/External-15d5178e.js"])).default;p(t);const i=new b({x:0,y:0,z:0,spatialReference:e.spatialReference}),n=await s.createFromFiles(i,o,{layer:e,signal:t});if(p(t),!n)throw new g("editor:upload","could not upload or convert model");return n.load()})}cancel(){this._uploadTask=k(this._uploadTask)}};r([u()],a.prototype,"state",null),r([u()],a.prototype,"result",null),r([u()],a.prototype,"error",null),r([u()],a.prototype,"_uploadTask",void 0),a=r([v("esri.widgets.Editor.Upload")],a);let l=null;async function D(e){return"showOpenFilePicker"in window&&!l?O(e):j(e)}async function O(e){try{const t=await window.showOpenFilePicker({multiple:!0,excludeAcceptAllOption:!0,types:F(e.infoFor3D)});return Promise.all(t.map(o=>o.getFile()))}catch(t){return $(t),[]}}async function j(e){const t=E();let o;const s=document.createElement("input");s.type="file",s.multiple=!0,s.accept=P(e.infoFor3D).join(",");const i=x([d(s,"change",()=>f(n())),A(()=>clearTimeout(o)),d(document,["focus","focusin"],m),d(window,["focus","focusin"],m)]);function n(){return s.files?Array.from(s.files):[]}function f(c){i.remove(),t.resolve(c)}function m(){clearTimeout(o),o=setTimeout(()=>{if(!document.hasFocus())return;const c=n();c.length===0&&f(c)},R)}return l?l(s):s.click(),t.promise.finally(()=>i.remove())}function U(e){l=t=>{setTimeout(()=>{const o=new DataTransfer;e.forEach(s=>o.items.add(s)),t.files=o.files,t.dispatchEvent(new Event("change"))})}}function q(){l=null}const R=5e3;export{a as Upload,q as clearPromptForFilesStub,U as simulateSelectingFiles};