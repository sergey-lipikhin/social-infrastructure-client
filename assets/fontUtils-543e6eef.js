import{a8 as u}from"./index-a6c97245.js";const f="arial-unicode-ms",a="woff2",i=new Map,c=new Set;class l{constructor(e,r){this.fontFace=e,this.promise=r}}async function y(t){const e=w(t),r=i.get(e);if(r)return r.promise;const n=new FontFace(t.family,`url('${u.fontsUrl}/woff2/${e}.${a}') format('${a}')`,{style:t.style,weight:t.weight}),s=document.fonts;if(s.has(n)&&n.status==="loading")return n.loaded;const o=n.load().then(()=>(s.add(n),n));return i.set(e,new l(n,o)),c.add(n),o}function p(t){return c.has(t)}function d(t){if(!t)return f;const e=t.toLowerCase().split(" ").join("-");switch(e){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return e}}function w(t){const e=h(t)+m(t);return d(t.family)+(e.length>0?e:"-regular")}function h(t){if(!t.weight)return"";switch(t.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function m(t){if(!t.style)return"";switch(t.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}export{y as c,w as f,p as i,f as t,d as u};
